export declare class Explorer {
    private divBody;
    private actualFolder;
    private serverFolder;
    constructor();
    private initBody;
    install(parent: HTMLElement): void;
    getActualFolder(): string;
    getServerFolder(): string;
    load(folder: string, callBack?: (serverFolder: string) => void): void;
    private newDir;
    private newFile;
    private newItem;
}
//# sourceMappingURL=explorer.d.ts.map