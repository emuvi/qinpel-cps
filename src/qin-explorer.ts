import { QinEdit } from "./qin-edit";

import { QinSoul, QinFilesNature, QinHead, QinFoot } from "qinpel-res";
import { QinPanel } from "./qin-panel";

type OnExplorerLoad = (loaded: string) => void;

export class QinExplorer extends QinEdit {

    private _qinMain: QinPanel = new QinPanel();

    private _nature: QinFilesNature;
    private _extensions: string[];
    private _singleSelection: boolean;

    private _folderActual: string = "";
    private _folderServer: string = "";

    private items: Item[] = [];

    public constructor(options?: QinExplorerOptions) {
        super();
        this._nature = options?.nature ? options.nature : QinFilesNature.BOTH;
        this._extensions = options?.extensions ? options.extensions : [];
        this._singleSelection = options?.singleSelection ? options.singleSelection : false;
        this.initMain();
    }

    private initMain() {
        styles.applyOnMain(this._qinMain.divMain);
        this._qinMain.addAction(qinEvent => {
            if (qinEvent.isPrimary()) {
                this.cleanSelection();
            }
        });
        this._qinMain.putAsDisabledSelection();
    }

    private updateSingleSelection() {
        if (this._singleSelection) {
            let alreadyHas = false;
            for (const item of this.items) {
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

    public getMain(): HTMLDivElement {
        return this._qinMain.divMain;
    }

    public getData(): string[] {
        let result = [];
        this.items.forEach(item => {
            if (item.isSelected()) {
                result.push(QinSoul.foot.getPathJoin(this._folderServer, item.getName()));
            }
        });
        return result;
    }

    public setData(data: string[]) {
        this.clean();
        if (data && data.length > 0) {
            let folderRoot = QinSoul.foot.getRoot(data[0]);
            this.load(folderRoot, _ => {
                for (const itemPath of data) {
                    let itemRoot = QinSoul.foot.getRoot(itemPath);
                    let itemName = QinSoul.foot.getStem(itemPath);
                    if (itemRoot !== folderRoot) {
                        QinHead.logSupport(`The item '${itemPath}' is not on the root '${folderRoot}'.`,
                            "{qinpel-cps}(ErrCode-000001)");
                    } else {
                        if (!this.select(itemName)) {
                            QinHead.logWarning(`Does not have the item '${itemName}' on the folder '${folderRoot}'`,
                                "{qinpel-cps}(ErrCode-000002)");
                        }
                    }
                }
            });
        }
    }

    public load(folder: string, onLoad?: OnExplorerLoad) {
        this.clean();
        this.qinpel().post("/dir/list", { path: folder })
            .then(res => {
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
                        if (this._nature == QinFilesNature.BOTH ||
                            this._nature == QinFilesNature.DIRECTORIES) {
                            this.newDir(lineValue);
                        }
                    } else if (line.startsWith("F: ")) {
                        if (this._nature == QinFilesNature.BOTH ||
                            this._nature == QinFilesNature.FILES) {
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
            .catch(err => {
                this._qinMain.divMain.innerText = QinHead.getErrorMessage(err, "{qinpel-cps}(ErrCode-000003)");
            });
    }

    public goFolderUp(onLoad?: OnExplorerLoad) {
        let root = QinFoot.getRoot(this._folderServer);
        if (root) {
            this.load(root, onLoad);
        }
    }

    public clean() {
        this._qinMain.divMain.innerHTML = "";
        this.items = [];
        this._folderActual = "";
        this._folderServer = "";
    }

    public cleanSelection() {
        for (const item of this.items) {
            item.unselect();
        }
    }

    public select(itemName: string): boolean {
        let item = this.items.find(inside => inside.getName() == itemName);
        if (item) {
            item.select();
            return true;
        } else {
            return false;
        }
    }

    public unselect(itemName: string): boolean {
        let item = this.items.find(inside => inside.getName() == itemName);
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
        item.install(this._qinMain.divMain);
        this.items.push(item);
    }

    /**
     * Getter qinMain
     * @return {QinPanel }
     */
    public get qinMain(): QinPanel {
        return this._qinMain;
    }

    /**
     * Getter nature
     * @return {QinFilesNature}
     */
    public get nature(): QinFilesNature {
        return this._nature;
    }

    /**
     * Setter nature
     * @param {QinFilesNature} value
     */
    public set nature(value: QinFilesNature) {
        this._nature = value;
    }

    /**
     * Getter extensions
     * @return {string[]}
     */
    public get extensions(): string[] {
        return this._extensions;
    }

    /**
     * Setter extensions
     * @param {string[]} value
     */
    public set extensions(value: string[]) {
        this._extensions = value;
    }

    /**
     * Getter singleSelection
     * @return {boolean}
     */
    public get singleSelection(): boolean {
        return this._singleSelection;
    }

    /**
     * Setter singleSelection
     * @param {boolean} value
     */
    public set singleSelection(value: boolean) {
        this._singleSelection = value;
        this.updateSingleSelection();
    }


    /**
     * Getter folderActual
     * @return {string }
     */
    public get folderActual(): string {
        return this._folderActual;
    }

    /**
     * Getter folderServer
     * @return {string }
     */
    public get folderServer(): string {
        return this._folderServer;
    }

}

export type QinExplorerOptions = {
    nature?: QinFilesNature,
    extensions?: string[],
    singleSelection: boolean,
}

class Item {

    private explorer: QinExplorer;
    private divItem = document.createElement("div");
    private divItemBody = document.createElement("div");
    private spanIcon = document.createElement("span");
    private imgIcon = document.createElement("img");
    private spanText = document.createElement("span");
    private fileName: string;
    private iconName: string;
    private selected: boolean = false;

    public constructor(explorer: QinExplorer, fileName: string, iconName: string) {
        this.explorer = explorer;
        this.fileName = fileName;
        this.iconName = iconName;
        this.initItem();
    }

    private initItem() {
        styles.applyOnDivItem(this.divItem);
        this.divItem.tabIndex = 0;
        styles.applyOnDivItemBody(this.divItemBody);
        this.divItem.appendChild(this.divItemBody);
        styles.applyOnSpanIcon(this.spanIcon);
        this.divItemBody.appendChild(this.spanIcon);
        this.imgIcon.src = "/run/app/qinpel-app/assets/" + this.iconName;
        this.spanIcon.appendChild(this.imgIcon);
        this.spanText.innerText = this.fileName;
        styles.applyOnSpanText(this.spanText);
        this.divItemBody.appendChild(this.spanText);
        QinSoul.arm.addAction(this.divItem, (qinEvent) => {
            if (qinEvent.isPrimary()) {
                this.divItem.focus();
                this.toggle();
                qinEvent.stop();
            }
        });
    }

    public install(on: HTMLElement) {
        on.appendChild(this.divItem);
    }

    public select() {
        styles.applyOnDivSelect(this.divItem);
        this.selected = true;
    }

    public unselect() {
        styles.applyOnDivUnSelect(this.divItem);
        this.selected = false;
    }

    public toggle() {
        if (this.selected) {
            this.unselect();
        } else {
            if (this.explorer.singleSelection) {
                this.explorer.cleanSelection();
            }
            this.select();
        }
    }

    public getName(): string {
        return this.fileName;
    }

    public isSelected(): boolean {
        return this.selected;
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
    applyOnMain: (el: HTMLDivElement) => {
        QinSoul.skin.styleAsEdit(el);
        el.style.overflow = "auto";
        el.style.minWidth = "160px";
        el.style.minHeight = "160px";
        el.tabIndex = 0;
    },
    applyOnDivItem: (el: HTMLDivElement) => {
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
    applyOnDivItemBody: (el: HTMLDivElement) => {
        el.style.display = "flex";
        el.style.flexDirection = "column";
        el.style.width = "120px";
    },
    applyOnSpanIcon: (el: HTMLSpanElement) => {
        el.style.textAlign = "center";
    },
    applyOnSpanText: (el: HTMLSpanElement) => {
        el.style.textAlign = "center";
        el.style.wordWrap = "break-word";
    },
    applyOnDivSelect: (el: HTMLSpanElement) => {
        el.style.backgroundColor = "#faefff";
    },
    applyOnDivUnSelect: (el: HTMLSpanElement) => {
        el.style.backgroundColor = "#ffffff";
    }
}