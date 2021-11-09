import { QinEdit } from "./qin-edit";
import { QinFilesNature } from "qinpel-res";
export declare class QinExplorer extends QinEdit {
    private _divMain;
    private _nature;
    private _extensions;
    private _folderActual;
    private _folderServer;
    private items;
    constructor(nature?: QinFilesNature, extensions?: string[]);
    private initMain;
    getMain(): HTMLDivElement;
    getData(): string[];
    setData(data: string[]): void;
    private newDir;
    private newFile;
    private newItem;
    load(folder: string, onLoad?: (loaded: string) => void): void;
    clean(): void;
    cleanSelection(): void;
    get divMain(): HTMLDivElement;
    get nature(): QinFilesNature;
    set nature(value: QinFilesNature);
    get extensions(): string[];
    set extensions(value: string[]);
    get folderActual(): string;
    get folderServer(): string;
}
//# sourceMappingURL=qin-explorer.d.ts.map