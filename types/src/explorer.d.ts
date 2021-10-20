import { FilesNature } from "./files";
export declare class Explorer {
    private divBody;
    private actualFolder;
    private serverFolder;
    private nature;
    private extensions;
    constructor(nature?: FilesNature, extensions?: string[]);
    private initBody;
    install(on: HTMLElement): void;
    setNature(nature: FilesNature): void;
    setExtensions(extensions: string[]): void;
    getActualFolder(): string;
    getServerFolder(): string;
    load(folder: string, callBack?: (serverFolder: string) => void): void;
    private clean;
    private newDir;
    private newFile;
    private newItem;
}
//# sourceMappingURL=explorer.d.ts.map