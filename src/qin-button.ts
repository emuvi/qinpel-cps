import { QinSoul } from "qinpel-res";
import { QinBase } from "./qin-base"
import { QinIcon } from "./qin-icon"
import { QinLabel} from "./qin-label"

export class QinButton extends QinBase {
    
    private _buttonMain: HTMLButtonElement = document.createElement("button");
    private _qinIcon: QinIcon = null;
    private _qinLabel: QinLabel = null;

    public constructor(icon?: QinIcon, label?: QinLabel) {
        super();
        styles.applyOnButton(this._buttonMain);
        if (icon) {
            this._qinIcon = icon;
            this._qinIcon.install(this); 
        }
        if (label) {
            this._qinLabel = label;
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
	public get buttonMain(): HTMLButtonElement  {
		return this._buttonMain;
	}
    
    /**
     * Getter qinIcon
     * @return {QinIcon }
     */
	public get qinIcon(): QinIcon  {
		return this._qinIcon;
	}

    /**
     * Getter qinLabel
     * @return {QinLabel }
     */
	public get qinLabel(): QinLabel  {
		return this._qinLabel;
	}

}

const styles = {
    applyOnButton: (el: HTMLButtonElement) => {
        QinSoul.skin.styleAsEdit(el);
        el.style.display = "flex";
        el.style.flexDirection = "row"
        el.style.alignItems = "center";
    }
}