import { QinBase } from "./qin-base";
import { QinIcon } from "./qin-icon";
import { QinLabel } from "./qin-label";
export declare class QinButton extends QinBase {
    private _buttonMain;
    private _qinIcon;
    private _qinLabel;
    constructor(icon?: QinIcon, label?: QinLabel);
    getMain(): HTMLButtonElement;
    get buttonMain(): HTMLButtonElement;
    get qinIcon(): QinIcon;
    get qinLabel(): QinLabel;
}
//# sourceMappingURL=qin-button.d.ts.map