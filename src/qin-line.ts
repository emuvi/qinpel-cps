import { QinBase } from "./qin-base";
import { QinSoul } from "qinpel-res"
import styles from "./styles/qin-line-styles";

export class QinLine extends QinBase {
    
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

    public getMain(): HTMLDivElement {
        return this.divPanel;
    }

}