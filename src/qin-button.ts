import { QinBase } from "./qin-base"
import { QinIcon } from "./qin-icon"
import { QinLabel} from "./qin-label"

import styles from "./styles/qin-button-styles"

export class QinButton extends QinBase {
    
    private button = document.createElement("button");
    private qinIcon: QinIcon = null;
    private qinLabel: QinLabel = null;

    public constructor(icon?: QinIcon, label?: QinLabel) {
        super();
        styles.applyOnButton(this.button);
        if (icon) {
            this.qinIcon = icon;
            this.qinIcon.install(this); 
        }
        if (label) {
            this.qinLabel = label;
            this.qinLabel.install(this);
        }
    }

    public getMain(): HTMLButtonElement {
        return this.button;
    }

}