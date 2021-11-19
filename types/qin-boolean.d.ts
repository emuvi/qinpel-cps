import { QinEdit } from "./qin-edit";
export declare class QinBoolean extends QinEdit {
    private _qinMain;
    private _qinSpan;
    private _qinIcon;
    private value;
    constructor();
    getMain(): HTMLDivElement;
    getData(): boolean;
    setData(data: boolean): void;
    private updateIcon;
    toggle(): void;
}
//# sourceMappingURL=qin-boolean.d.ts.map