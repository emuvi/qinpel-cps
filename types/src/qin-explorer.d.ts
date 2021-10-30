import { QinEdit } from "./qin-edit";
import { QinFilesNature } from "qinpel-res";
export declare class QinExplorer extends QinEdit {
    private divBody;
    private nature;
    private extensions;
    private actualFolder;
    private serverFolder;
    private items;
    constructor(nature?: QinFilesNature, extensions?: string[]);
    private initBody;
    getMain(): HTMLDivElement;
    getData(): string[];
    setData(data: string[]): void;
    setNature(nature: QinFilesNature): void;
    setExtensions(extensions: string[]): void;
    getActualFolder(): string;
    getServerFolder(): string;
    private newDir;
    private newFile;
    private newItem;
    load(folder: string, onLoad?: (loaded: string) => void): void;
    clean(): void;
    cleanSelection(): void;
}
//# sourceMappingURL=qin-explorer.d.ts.map