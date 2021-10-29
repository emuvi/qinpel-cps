import { QinEdit } from "./qin-edit";
import { QinLine } from "./qin-line";
import { QinString } from "./qin-string";
import { QinButton } from "./qin-button";
import { QinAsset } from "./qin-assets";
import { QinIcon } from "./qin-icon";
import { QinChooser } from "./qin-chooser";
import { QinGrandeur } from "qinpel-res";

export class QinPath extends QinEdit {

    private qinLine = new QinLine();
    private qinPath = new QinString();
    private qinAction = new QinButton(new QinIcon(QinAsset.FaceCog, QinGrandeur.SMALL));
    private qinChooser = new QinChooser();

    public constructor() {
        super();
        this.qinPath.install(this.qinLine);
        this.initAction();
    }
    
    private initAction() {
        this.qinAction.install(this.qinLine);
        const popup = this.qinpel().frame.newPopup(
            this.qinAction.getMain(), this.qinChooser.getMain());
        this.qinAction.addAction(() => {
            popup.show();
        });
    }

    public getMain(): HTMLDivElement {
        return this.qinLine.getMain();
    }

    public getData(): string {
        return this.qinPath.getData();
    }

}
