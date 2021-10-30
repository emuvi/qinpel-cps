import { QinFilesNature, QinFilesOperation, QinFilesDescriptor } from "qinpel-res";
import { QinEdit } from "./qin-edit";
export declare class QinChooser extends QinEdit {
    private qinBody;
    private qinExplorer;
    private qinBottom;
    private qinName;
    private qinExtensions;
    private qinAction;
    private nature;
    private operation;
    private descriptors;
    constructor(nature?: QinFilesNature, operation?: QinFilesOperation, descriptors?: QinFilesDescriptor[]);
    private initBody;
    private initBottom;
    private initExtensions;
    getMain(): HTMLDivElement;
    getData(): string[];
    setData(data: string[]): void;
}
//# sourceMappingURL=qin-chooser.d.ts.map