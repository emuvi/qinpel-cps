import { QinEdit } from "./qin-edit";
export declare class QinCombo extends QinEdit {
    private _selectMain;
    constructor();
    getMain(): HTMLSelectElement;
    getData(): string;
    setData(data: string): void;
    addOption(title: string, value: string, selected?: boolean): void;
    get selectMain(): HTMLSelectElement;
}
//# sourceMappingURL=qin-combo.d.ts.map