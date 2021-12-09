import { QinSoul } from "qinpel-res";
import { QinBase } from "./qin-base"
import { QinIcon } from "./qin-icon"
import { QinLabel } from "./qin-label"

export class QinButton extends QinBase {

    private _buttonMain: HTMLButtonElement = document.createElement("button");
    private _qinIcon: QinIcon = null;
    private _qinLabel: QinLabel = null;

    public constructor(options?: QinButtonOptions) {
        super();
        styles.applyOnButton(this._buttonMain);
        if (options?.icon) {
            this._qinIcon = options.icon;
            this._qinIcon.install(this);
        }
        if (options?.label) {
            this._qinLabel = options.label;
            this._qinLabel.install(this);
        }
    }

    public getMain(): HTMLButtonElement {
        return this._buttonMain;
    }

    /**
     * Getter buttonMain
     * @return {HTMLButtonElement }
     */
    public get buttonMain(): HTMLButtonElement {
        return this._buttonMain;
    }

    /**
     * Getter qinIcon
     * @return {QinIcon }
     */
    public get qinIcon(): QinIcon {
        return this._qinIcon;
    }

    /**
     * Getter qinLabel
     * @return {QinLabel }
     */
    public get qinLabel(): QinLabel {
        return this._qinLabel;
    }

}

export type QinButtonOptions = {
    icon?: QinIcon,
    label?: QinLabel
};

const styles = {
    applyOnButton: (el: HTMLButtonElement) => {
        QinSoul.skin.styleAsEdit(el);
        el.style.display = "flex";
        el.style.flexDirection = "row"
        el.style.alignItems = "center";
    }
}