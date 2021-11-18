import { QinEdit } from "./qin-edit";
import { QinFilesNature } from "qinpel-res";
import { QinPanel } from "./qin-panel";
export declare class QinExplorer extends QinEdit {
    private _qinMain;
    private _nature;
    private _extensions;
    private _singleSelection;
    private _folderActual;
    private _folderServer;
    private items;
    constructor(nature?: QinFilesNature, extensions?: string[], singleSelection?: boolean);
    private initMain;
    private updateSingleSelection;
    getMain(): HTMLDivElement;
    getData(): string[];
    setData(data: string[]): void;
    select(itemName: string): boolean;
    unselect(itemName: string): boolean;
    private newDir;
    private newFile;
    private newItem;
    load(folder: string, onLoad?: (loaded: string) => void): void;
    clean(): void;
    cleanSelection(): void;
    get qinMain(): QinPanel;
    get nature(): QinFilesNature;
    set nature(value: QinFilesNature);
    get extensions(): string[];
    set extensions(value: string[]);
    get singleSelection(): boolean;
    set singleSelection(value: boolean);
    get folderActual(): string;
    get folderServer(): string;
}
//# sourceMappingURL=qin-explorer.d.ts.map