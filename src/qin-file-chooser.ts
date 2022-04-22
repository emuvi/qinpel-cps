import { QinFilesDescriptor, QinFilesNature, QinFilesOperation } from "qinpel-res";
import { QinAsset } from "./qin-assets";
import { QinButton } from "./qin-button";
import { QinColumn } from "./qin-column";
import { QinCombo } from "./qin-combo";
import { QinEdit } from "./qin-edit";
import { QinFileExplorer } from "./qin-file-explorer";
import { QinIcon } from "./qin-icon";
import { QinLine } from "./qin-line";
import { QinPanel } from "./qin-panel";
import { QinString } from "./qin-string";

export class QinFileChooser extends QinEdit {
  private _qinMain = new QinColumn();
  private _qinUpper = new QinLine();
  private _qinConfirm = new QinButton({
    icon: new QinIcon(QinAsset.FaceConfirm),
  });
  private _qinFolder = new QinString();
  private _qinExtensions = new QinCombo();
  private _qinSearch = new QinButton({
    icon: new QinIcon(QinAsset.FaceSearch),
  });
  private _qinUnder = new QinPanel();
  private _qinExplorer = new QinFileExplorer();

  private _nature: QinFilesNature;
  private _operation: QinFilesOperation;
  private _descriptors: QinFilesDescriptor[];
  private _singleSelection: boolean;

  private _listeners: QinFileChosen[] = [];

  public constructor(options?: QinFileChooserSet) {
    super();
    this._nature = options?.nature ? options.nature : QinFilesNature.BOTH;
    this._operation = options?.operation ? options.operation : QinFilesOperation.OPEN;
    this._descriptors = options?.descriptors ? options.descriptors : [];
    this._singleSelection = options?.singleSelection ? options?.singleSelection : false;
    this.initMain();
    this.initUpper();
    this.initUnder();
  }

  private initMain() {
    this._qinUpper.install(this._qinMain);
    this._qinUnder.install(this._qinMain);
  }

  private initUpper() {
    this._qinUpper.style.putAsFlexMin();
    this._qinConfirm.install(this._qinUpper);
    this._qinConfirm.addAction((qinEvent) => {
      if (qinEvent.isMain) {
        let data = this.getData();
        for (const chosen of this._listeners) {
          chosen(data);
        }
        qinEvent.consumed();
      }
    });
    this._qinFolder.install(this._qinUpper);
    this._qinFolder.style.putAsMinWidth(100);
    this._qinFolder.style.putAsFlexMax();
    this._qinFolder.addAction((qinEvent) => {
      if (qinEvent.isEnter) {
        this.loadFolder();
        qinEvent.consumed();
      }
    });
    this._qinExtensions.install(this._qinUpper);
    this._qinExtensions.style.putAsMinWidth(100);
    this.initExtensions();
    this._qinSearch.install(this._qinUpper);
    this._qinSearch.addAction((qinEvent) => {
      if (qinEvent.isMain) {
        this.loadFolder();
        qinEvent.consumed();
      }
    });
  }

  private initUnder() {
    this._qinUnder.style.putAsScroll();
    this._qinUnder.style.putAsFlexMax();
    this._qinExplorer.install(this._qinUnder);
    this._qinExplorer.nature = this._nature;
    this._qinExplorer.singleSelection = this._singleSelection;
  }

  private initExtensions() {
    if (this._descriptors.length == 0) {
      this._qinExtensions.addItem({
        title: "All Files (*.*)",
        value: "*",
        selected: true,
      });
      this._qinExplorer.extensions = [];
    } else {
      for (let index = 0; index < this._descriptors.length; index++) {
        const descriptor = this._descriptors[index];
        this._qinExtensions.addItem({
          title: descriptor.description,
          value: descriptor.extensions.join(";"),
          selected: index == 0,
        });
      }
      this._qinExplorer.extensions = this._descriptors[0].extensions;
    }
  }

  public getMain(): HTMLDivElement {
    return this._qinMain.getMain();
  }

  public getData(): string[] {
    return this._qinExplorer.getData();
  }

  public setData(data: string[]) {
    this._qinExplorer.setData(data);
  }

  public get qinMain(): QinColumn {
    return this._qinMain;
  }

  public get qinUpper(): QinLine {
    return this._qinUpper;
  }

  public get qinConfirm(): QinButton {
    return this._qinConfirm;
  }

  public get qinFolder(): QinString {
    return this._qinFolder;
  }

  public get qinExtensions(): QinCombo {
    return this._qinExtensions;
  }

  public get qinSearch(): QinButton {
    return this._qinSearch;
  }

  public get qinUnder(): QinPanel {
    return this._qinUnder;
  }

  public get qinExplorer(): QinFileExplorer {
    return this._qinExplorer;
  }

  public get nature(): QinFilesNature {
    return this._nature;
  }

  public set nature(value: QinFilesNature) {
    this._nature = value;
    this._qinExplorer.nature = value;
  }

  public get operation(): QinFilesOperation {
    return this._operation;
  }

  public set operation(value: QinFilesOperation) {
    this._operation = value;
  }

  public get descriptors(): QinFilesDescriptor[] {
    return this._descriptors;
  }

  public set descriptors(value: QinFilesDescriptor[]) {
    this._descriptors = value;
  }

  public get singleSelection(): boolean {
    return this._singleSelection;
  }

  public set singleSelection(value: boolean) {
    this._singleSelection = value;
    this._qinExplorer.singleSelection = value;
  }

  private loadFolder() {
    this._qinExplorer.load(this._qinFolder.getData(), (loaded) => {
      this._qinFolder.setData(loaded);
    });
  }

  public addChosen(chosen: QinFileChosen): QinFileChooser {
    this._listeners.push(chosen);
    return this;
  }
}

export type QinFileChooserSet = {
  nature?: QinFilesNature;
  operation?: QinFilesOperation;
  descriptors?: QinFilesDescriptor[];
  singleSelection?: boolean;
};

export type QinFileChosen = (chosen: string[]) => void;
