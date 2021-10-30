import { QinEdit } from "./qin-edit";
import styles from "./styles/qin-explorer-styles"

import { QinSoul, QinFilesNature } from "qinpel-res";

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

class Item {

    private divItem = document.createElement("div");
    private divItemBody = document.createElement("div");
    private spanIcon = document.createElement("span");
    private imgIcon = document.createElement("img");
    private spanText = document.createElement("span");
    private fileName: string;
    private iconName: string;
    private selected: boolean = false;

    public constructor(fileName: string, iconName: string) {
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
            if (qinEvent.fromPointing
                || (qinEvent.fromTyping && qinEvent.isSpace)) {
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
        if (!this.selected) {
            this.select();
        } else {
            this.unselect();
        }
    }

    public getName(): string {
        return this.fileName;
    }

    public isSelected(): boolean {
        return this.selected;
    }

}

export class QinExplorer extends QinEdit {

    private divBody = document.createElement("div");
    private nature: QinFilesNature;
    private extensions: string[];
    private actualFolder: string = "";
    private serverFolder: string = "";
    private items: Item[] = [];

    public constructor(nature?: QinFilesNature, extensions?: string[]) {
        super();
        this.nature = nature ? nature : QinFilesNature.BOTH;
        this.extensions = extensions ? extensions : [];
        this.initBody();
    }

    private initBody() {
        styles.applyOnDivBody(this.divBody);
        QinSoul.arm.addAction(this.divBody, (qe) => {
            if (qe.fromPointing) { this.cleanSelection(); }
        });
        QinSoul.skin.disableSelection(this.divBody);
    }

    public getMain(): HTMLDivElement {
        return this.divBody;
    }

    public getData(): string[] {
        let result = [];
        // TODO - Implement getData of QinExplorer
        return result;
    }

    public setData(data: string[]) {
        // TODO - Implement setData of QinExplorer
    }

    public setNature(nature: QinFilesNature) {
        this.nature = nature;
    }

    public setExtensions(extensions: string[]) {
        this.extensions = extensions;
    }

    public getActualFolder(): string {
        return this.actualFolder;
    }

    public getServerFolder(): string {
        return this.serverFolder;
    }

    private newDir(name: string) {
        this.newItem(name, "explorer-dir.png");
    }

    private newFile(name: string, extension: string) {
        this.newItem(name, getIconName(extension));
    }

    private newItem(name: string, icon: string) {
        const item = new Item(name, icon);
        item.install(this.divBody);
        this.items.push(item);
    }

    public load(folder: string,
        onLoad?: (loaded: string) => void) {
        this.clean();
        this.qinpel().post("/dir/list", { path: folder })
            .then(res => {
                this.actualFolder = folder;
                for (let line of QinSoul.body.getTextLines(res.data)) {
                    let lineValue = line.substring(3);
                    if (!lineValue) {
                        continue;
                    }
                    if (line.indexOf("P: ") === 0) {
                        this.serverFolder = lineValue;
                        if (onLoad) {
                            onLoad(lineValue);
                        }
                    } else if (line.indexOf("D: ") === 0) {
                        if (this.nature == QinFilesNature.BOTH ||
                            this.nature == QinFilesNature.DIRECTORIES) {
                            this.newDir(lineValue);
                        }
                    } else if (line.indexOf("F: ") === 0) {
                        if (this.nature == QinFilesNature.BOTH ||
                            this.nature == QinFilesNature.FILES) {
                            let extension = QinSoul.foot.getFileExtension(lineValue);
                            let passedExtension = true;
                            if (this.extensions && this.extensions.length > 0) {
                                passedExtension = this.extensions.indexOf(extension) > -1;
                            }
                            if (passedExtension) {
                                this.newFile(lineValue, extension);
                            }
                        }
                    }
                }
            })
            .catch(err => {
                this.divBody.innerText = QinSoul.head.getErrorMessage(err);
            });
    }

    public clean() {
        this.divBody.innerHTML = "";
        this.items = [];
        this.actualFolder = "";
        this.serverFolder = "";
    }

    public cleanSelection() {
        for (const item of this.items) {
            item.unselect();
        }
    }

}