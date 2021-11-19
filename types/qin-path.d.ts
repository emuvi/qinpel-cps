import { QinEdit } from "./qin-edit";
import { QinLine } from "./qin-line";
import { QinString } from "./qin-string";
import { QinButton } from "./qin-button";
import { QinChooser } from "./qin-chooser";
import { QinFilesDescriptor, QinFilesNature, QinFilesOperation } from "qinpel-res";
export declare class QinPath extends QinEdit {
    private _qinMain;
    private _qinPath;
    private _qinSearch;
    private _qinChooser;
    constructor(nature?: QinFilesNature, operation?: QinFilesOperation, descriptors?: QinFilesDescriptor[]);
    private initAction;
    getMain(): HTMLDivElement;
    getData(): string;
    setData(data: string): void;
    get qinMain(): QinLine;
    get qinPath(): QinString;
    get qinSearch(): QinButton;
    get qinChooser(): QinChooser;
}
//# sourceMappingURL=qin-path.d.ts.map