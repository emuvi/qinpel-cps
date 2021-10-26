import { QinStyles, QinGrandeur } from "./qin-utils";
import { QinEdit } from "./qin-edit";
import { QinLine } from "./qin-line";
import { QinString } from "./qin-string";
import { QinButton } from "./qin-button";
import { QinAsset } from "./qin-assets";
import { QinIcon } from "./qin-icon";

export class QinPath extends QinEdit {

    private qinLine = new QinLine();
    private qinPath = new QinString();
    private qinAction = new QinButton(
        new QinIcon(QinAsset.FaceCog, QinGrandeur.SMALL, QinStyles.ColorFont));

    public constructor() {
        super();
        this.qinPath.install(this.qinLine);
        this.qinAction.install(this.qinLine);
        this.qinAction.addAction(() => {
            console.log("OI!");
        });
    }

    public getMain(): HTMLElement {
        return this.qinLine.getMain();
    }

    public getData(): string {
        return this.qinPath.getData();
    }

}