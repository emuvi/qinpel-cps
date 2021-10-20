import { FilesNature, FilesOperation, FilesDescriptor } from "./files";
export declare class Chooser {
    private divBody;
    private explorer;
    private divBottom;
    private inputName;
    private selectType;
    private nature;
    private operation;
    private descriptors;
    constructor(nature?: FilesNature, operation?: FilesOperation, descriptors?: FilesDescriptor[]);
    private initBody;
    private initBottom;
    private initInput;
    private initSelect;
    install(on: HTMLElement): void;
}
//# sourceMappingURL=chooser.d.ts.map