import { QinEdit } from "./qin-edit";
import { QinColumn } from "./qin-column";
import { QinLabel } from "./qin-label";
export declare class QinField extends QinEdit {
    private _qinMain;
    private _qinLabel;
    private _qinEdit;
    constructor(title: string, edit: QinEdit);
    getMain(): HTMLDivElement;
    getData(): any;
    setData(data: any): void;
    get qinMain(): QinColumn;
    get qinLabel(): QinLabel;
    get qinEdit(): QinEdit;
}
//# sourceMappingURL=qin-field.d.ts.map