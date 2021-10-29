import { QinBase } from "./qin-base";
import { QinSoul } from "qinpel-res"
import styles from "./styles/qin-panel-styles";

export class QinPanel extends QinBase {
    
    private divPanel = document.createElement("div");

    public constructor() {
        super();
        this.initPanel();
    }

    private initPanel() {
        styles.applyOnPanel(this.divPanel);
    }

    public putAsBody() {
        document.body.appendChild(this.divPanel);
        QinSoul.skin.applyStyleAsBody(this.divPanel);
    }

    public getMain(): HTMLElement {
        return this.divPanel;
    }

}