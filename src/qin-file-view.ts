import { QinFilesNature, QinFoot, QinNature, QinSoul } from "qinpel-res";
import { QinEdit } from "./qin-edit";
import { QinPanel } from "./qin-panel";

type OnFileViewLoad = (loaded: string) => void;

export class QinFileView extends QinEdit {
  private _nature: QinFilesNature;
  private _extensions: string[];
  private _singleSelection: boolean;

  private _folderActual: string = "";
  private _folderServer: string = "";

  private _items: Item[] = [];

  private _readOnly = false;

  public constructor(options?: QinFileExplorerSet, isQindred?: string) {
    super((isQindred ? isQindred + "_" : "") + "file-view", new QinPanel());
    this._nature = options?.nature ? options.nature : QinFilesNature.BOTH;
    this._extensions = options?.extensions ? options.extensions : [];
    this._singleSelection = options?.singleSelection ?? false;
    this.initMain();
    if (options?.readOnly) {
      this.turnReadOnly();
    }
  }

  public override castedQine(): QinPanel {
    return this.qinedBase as QinPanel;
  }

  private initMain() {
    this.style.putAsEditable();
    styles.applyOnMain(this.qinedHTML);
    this.qinedBase.addActionMain((_) => {
      if (!this._readOnly) {
        this.cleanSelection();
      }
    });
    this.qinedBase.style.putAsDisabledSelection();
  }

  public getNature(): QinNature {
    return QinNature.CHARS;
  }

  public override getData(): string[] {
    let result = [];
    this._items.forEach((item) => {
      if (item.isSelected()) {
        result.push(QinSoul.foot.getPathJoin(this._folderServer, item.getName()));
      }
    });
    return result;
  }

  public override setData(data: string[]) {
    this.clean();
    if (data && data.length > 0) {
      let folderRoot = QinSoul.foot.getParent(data[0]);
      this.load(folderRoot, (_) => {
        for (const itemPath of data) {
          let itemRoot = QinSoul.foot.getParent(itemPath);
          let itemName = QinSoul.foot.getStem(itemPath);
          if (itemRoot !== folderRoot) {
            this.qinpel.jobbed.statusError(
              `The item '${itemPath}' is not on the root '${folderRoot}'.`,
              "{qinpel-cps}(ErrCode-000001)"
            );
          } else {
            if (!this.select(itemName)) {
              this.qinpel.jobbed.statusError(
                `Does not have the item '${itemName}' on the folder '${folderRoot}'`,
                "{qinpel-cps}(ErrCode-000002)"
              );
            }
          }
        }
      });
    }
  }

  public override turnReadOnly(): void {
    this._readOnly = true;
    this.style.putAsReadOnly();
  }

  public override turnEditable(): void {
    this._readOnly = false;
    this.style.putAsEditable();
  }

  public override isEditable(): boolean {
    return !this._readOnly;
  }

  public get nature(): QinFilesNature {
    return this._nature;
  }

  public set nature(value: QinFilesNature) {
    this._nature = value;
  }

  public get extensions(): string[] {
    return this._extensions;
  }

  public set extensions(value: string[]) {
    this._extensions = value;
  }

  public get singleSelection(): boolean {
    return this._singleSelection;
  }

  public set singleSelection(value: boolean) {
    this._singleSelection = value;
    this.updateSingleSelection();
  }

  public get folderActual(): string {
    return this._folderActual;
  }

  public get folderServer(): string {
    return this._folderServer;
  }

  private updateSingleSelection() {
    if (this._singleSelection) {
      let alreadyHas = false;
      for (const item of this._items) {
        if (item.isSelected()) {
          if (alreadyHas) {
            item.unselect();
          } else {
            alreadyHas = true;
          }
        }
      }
    }
  }

  public load(folder: string, onLoad?: OnFileViewLoad) {
    this.clean();
    this.qinpel.talk
      .post("/dir/list", { path: folder })
      .then((res) => {
        this._folderActual = folder;
        for (let line of QinSoul.body.getTextLines(res.data)) {
          let lineValue = line.substring(3);
          if (!lineValue) {
            continue;
          }
          if (line.startsWith("P: ")) {
            this._folderServer = lineValue;
            if (onLoad) {
              onLoad(lineValue);
            }
          } else if (line.startsWith("D: ")) {
            if (
              this._nature == QinFilesNature.BOTH ||
              this._nature == QinFilesNature.DIRECTORIES
            ) {
              this.newDir(lineValue);
            }
          } else if (line.startsWith("F: ")) {
            if (this._nature == QinFilesNature.BOTH || this._nature == QinFilesNature.FILES) {
              let extension = QinSoul.foot.getFileExtension(lineValue);
              let passedExtension = true;
              if (this._extensions && this._extensions.length > 0) {
                passedExtension = this._extensions.indexOf(extension) > -1;
              }
              if (passedExtension) {
                this.newFile(lineValue, extension);
              }
            }
          }
        }
      })
      .catch((err) => {
        this.qinpel.jobbed.statusError(err, "{qinpel-cps}(ErrCode-000003)");
      });
  }

  public reload(onLoad?: OnFileViewLoad) {
    this.load(this._folderServer, onLoad);
  }

  public goFolderUp(onLoad?: OnFileViewLoad) {
    let parent = QinFoot.getParent(this._folderServer);
    if (parent) {
      this.load(parent, onLoad);
    }
  }

  public clean() {
    this.qinedHTML.innerHTML = "";
    this._items = [];
    this._folderActual = "";
    this._folderServer = "";
  }

  public cleanSelection() {
    for (const item of this._items) {
      item.unselect();
    }
  }

  public select(itemName: string): boolean {
    let item = this._items.find((inside) => inside.getName() == itemName);
    if (item) {
      item.select();
      return true;
    } else {
      return false;
    }
  }

  public unselect(itemName: string): boolean {
    let item = this._items.find((inside) => inside.getName() == itemName);
    if (item) {
      item.unselect();
      return true;
    } else {
      return false;
    }
  }

  private newDir(name: string) {
    this.newItem(name, "explorer-dir.png");
  }

  private newFile(name: string, extension: string) {
    this.newItem(name, getIconName(extension));
  }

  private newItem(name: string, icon: string) {
    const item = new Item(this, name, icon);
    item.install(this.qinedHTML);
    this._items.push(item);
  }
}

export type QinFileExplorerSet = {
  nature?: QinFilesNature;
  extensions?: string[];
  singleSelection?: boolean;
  readOnly?: boolean;
};

class Item {
  private _dad: QinFileView;
  private _divItem = document.createElement("div");
  private _divBody = document.createElement("div");
  private _spanIcon = document.createElement("span");
  private _imgIcon = document.createElement("img");
  private _spanText = document.createElement("span");
  private _fileName: string;
  private _iconName: string;
  private _selected: boolean = false;

  public constructor(dad: QinFileView, fileName: string, iconName: string) {
    this._dad = dad;
    this._fileName = fileName;
    this._iconName = iconName;
    this.initItem();
  }

  private initItem() {
    styles.applyOnDivItem(this._divItem);
    this._divItem.tabIndex = 0;
    styles.applyOnDivBody(this._divBody);
    this._divItem.appendChild(this._divBody);
    styles.applyOnSpanIcon(this._spanIcon);
    this._divBody.appendChild(this._spanIcon);
    this._imgIcon.src = "/app/qinpel-app/assets/" + this._iconName;
    this._spanIcon.appendChild(this._imgIcon);
    this._spanText.innerText = this._fileName;
    styles.applyOnSpanText(this._spanText);
    this._divBody.appendChild(this._spanText);
    QinSoul.arms.addActionMain(this._divItem, (qinEvent) => {
      if (this._dad.isEditable()) {
        this._divItem.focus();
        this.toggle();
      }
    });
  }

  public install(on: HTMLElement) {
    on.appendChild(this._divItem);
  }

  public select() {
    styles.applyOnDivSelect(this._divItem);
    this._selected = true;
  }

  public unselect() {
    styles.applyOnDivUnSelect(this._divItem);
    this._selected = false;
  }

  public toggle() {
    if (this._selected) {
      this.unselect();
    } else {
      if (this._dad.singleSelection) {
        this._dad.cleanSelection();
      }
      this.select();
    }
  }

  public getName(): string {
    return this._fileName;
  }

  public isSelected(): boolean {
    return this._selected;
  }
}

function getIconName(fromExtension: string): string {
  let result = "explorer-file.png";
  if (QinSoul.foot.isFileApp(fromExtension)) {
    result = "explorer-apps.png";
  } else if (QinSoul.foot.isFileCmd(fromExtension)) {
    result = "explorer-cmds.png";
  } else if (QinSoul.foot.isFileExec(fromExtension)) {
    result = "explorer-exec.png";
  } else if (QinSoul.foot.isFileImage(fromExtension)) {
    result = "explorer-image.png";
  } else if (QinSoul.foot.isFileVector(fromExtension)) {
    result = "explorer-image.png"; // TODO
  } else if (QinSoul.foot.isFileMusic(fromExtension)) {
    result = "explorer-music.png";
  } else if (QinSoul.foot.isFileMovie(fromExtension)) {
    result = "explorer-movie.png";
  } else if (QinSoul.foot.isFileZipped(fromExtension)) {
    result = "explorer-zipped.png";
  }
  return result;
}

const styles = {
  applyOnMain: (el: HTMLElement) => {
    el.style.overflow = "auto";
    el.style.minWidth = "160px";
    el.style.minHeight = "160px";
    el.tabIndex = 0;
  },
  applyOnDivItem: (el: HTMLElement) => {
    el.style.margin = "2px";
    el.style.padding = "9px";
    el.style.display = "inline-block";
    el.style.outline = "none";
    el.style.backgroundColor = "#ffffff";
    el.style.border = "1px solid #360045";
    el.style.borderRadius = "3px";
    el.style.color = "#270036";
    el.addEventListener("focus", () => {
      el.style.outline = "none";
      el.style.border = "1px solid #ae0000";
    });
    el.addEventListener("focusout", () => {
      el.style.outline = "none";
      el.style.border = "1px solid #360045";
    });
  },
  applyOnDivBody: (el: HTMLElement) => {
    el.style.display = "flex";
    el.style.flexDirection = "column";
    el.style.width = "96px";
  },
  applyOnSpanIcon: (el: HTMLElement) => {
    el.style.textAlign = "center";
  },
  applyOnSpanText: (el: HTMLElement) => {
    el.style.textAlign = "center";
    el.style.wordWrap = "break-word";
  },
  applyOnDivSelect: (el: HTMLElement) => {
    el.style.backgroundColor = "#faefff";
  },
  applyOnDivUnSelect: (el: HTMLElement) => {
    el.style.backgroundColor = "#ffffff";
  },
};
