import { Qinpel } from "qinpel-app/types/qinpel"
// @ts-ignore
const qinpel = window.frameElement.qinpel as Qinpel;

import { QinBase } from "./qin-base";
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
        qinpel.util.applyStyleAsBody(this.divPanel);
    }

    public getMain(): HTMLElement {
        return this.divPanel;
    }

}