import { QinEdit } from "./qin-edit";
import { QinFilesNature, QinFilesOperation, QinFilesDescriptor } from "qinpel-res";
export declare class QinChooser extends QinEdit {
    private divBody;
    private qinExplorer;
    private divBottom;
    private inputName;
    private selectType;
    private nature;
    private operation;
    private descriptors;
    constructor(nature?: QinFilesNature, operation?: QinFilesOperation, descriptors?: QinFilesDescriptor[]);
    private initBody;
    private initBottom;
    private initInput;
    private initSelect;
    getMain(): HTMLElement;
    getData(): any;
}
//# sourceMappingURL=qin-chooser.d.ts.map