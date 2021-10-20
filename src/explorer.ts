import { Qinpel } from "qinpel-app/types/qinpel"
// @ts-ignore
const qinpel = window.frameElement.qinpel as Qinpel;

import styles from "./explorer-styles"
import { FilesNature } from "./files";

const appsExtensions = ["htm", "html", "css", "js", "jsx", "ts", "tsx"];
const cmdsExtensions = [
    "h", "c", "hpp", "cpp", "rs", "jl",
    "cs", "csproj", "fs", "ml", "fsi", "mli", "fsx", "fsscript",
    "java", "gy", "gvy", "groovy", "sc", "scala", "clj",
    "py", "ruby", "php", "phtml",
];
const execExtensions = ["exe", "jar", "com", "bat", "sh"];
const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp"];
const movieExtensions = ["avi", "mp4"];
const musicExtensions = ["wav", "mp3"];
const zippedExtensions = ["zip", "rar", "7z", "tar", "gz"];

function getIconName(fromExtension: string): string {
    let result = "explorer-file.png";
    if (appsExtensions.indexOf(fromExtension) > -1) {
        result = "explorer-apps.png";
    } else if (cmdsExtensions.indexOf(fromExtension) > -1) {
        result = "explorer-cmds.png";
    } else if (execExtensions.indexOf(fromExtension) > -1) {
        result = "explorer-exec.png";
    } else if (imageExtensions.indexOf(fromExtension) > -1) {
        result = "explorer-image.png";
    } else if (movieExtensions.indexOf(fromExtension) > -1) {
        result = "explorer-movie.png";
    } else if (musicExtensions.indexOf(fromExtension) > -1) {
        result = "explorer-music.png";
    } else if (zippedExtensions.indexOf(fromExtension) > -1) {
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
        styles.applyOnDivItemBody(this.divItemBody);
        this.divItem.appendChild(this.divItemBody);
        styles.applyOnSpanIcon(this.spanIcon);
        this.divItemBody.appendChild(this.spanIcon);
        this.imgIcon.src = "/run/app/qinpel-app/assets/" + this.iconName;
        this.spanIcon.appendChild(this.imgIcon);
        this.spanText.innerText = this.fileName;
        styles.applyOnSpanText(this.spanText);
        this.divItemBody.appendChild(this.spanText);
        qinpel.util.addAction(this.divItem, () => {
            if (!this.selected) {
                styles.applyOnDivSelect(this.divItem);
                this.selected = true;
            } else {
                styles.applyOnDivUnSelect(this.divItem);
                this.selected = false;
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

}

export class Explorer {

    private divBody = document.createElement("div");
    private nature: FilesNature;
    private extensions: string[];
    private actualFolder: string = "";
    private serverFolder: string = "";
    private items: Item[] = [];

    public constructor(nature?: FilesNature, extensions?: string[]) {
        this.nature = nature ? nature : FilesNature.BOTH;
        this.extensions = extensions ? extensions : [];
        this.initBody();
    }

    private initBody() {
        styles.applyOnDivBody(this.divBody);
        qinpel.util.disableSelection(this.divBody);
    }

    public install(on: HTMLElement) {
        on.appendChild(this.divBody);
    }

    public setNature(nature: FilesNature) {
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

    public load(folder: string,
        onLoad?: (loaded: string) => void) {
        this.clean();
        qinpel.post("/dir/list", { path: folder })
            .then(res => {
                this.actualFolder = folder;
                for (let line of qinpel.util.getTextLines(res.data)) {
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
                        if (this.nature == FilesNature.BOTH ||
                            this.nature == FilesNature.DIRECTORIES) {
                            this.newDir(lineValue);
                        }
                    } else if (line.indexOf("F: ") === 0) {
                        if (this.nature == FilesNature.BOTH ||
                            this.nature == FilesNature.FILES) {
                            let extension = qinpel.util.getFileExtension(lineValue);
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
                this.divBody.innerText = qinpel.util.getErrorMessage(err);
            });
    }

    private clean() {
        this.divBody.innerHTML = "";
        this.items = [];
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

}