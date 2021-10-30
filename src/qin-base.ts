import { QinSoul, QinAction } from "qinpel-res"
import { Qinpel } from "qinpel-app/types/qinpel"
const refQinpel = (window.frameElement as any).qinpel as Qinpel;

export abstract class QinBase {

    public qinpel(): Qinpel {
        return refQinpel;
    }

    public abstract getMain(): HTMLElement;

    private baseParent: QinBase = null;
    private baseChildren: QinBase[] = [];
    private baseDisplay: string = "initial";
    private baseVisibility: string = "initial";

    public install(on: QinBase) {
        this.baseParent = on;
        this.baseParent.append(this);
    }

    public unInstall() {
        this.baseParent.remove(this);
    }

    public reInstall() {
        this.baseParent.append(this);
    }

    public unDisplay() {
        if (this.getMain().style.display !== "none") {
            this.baseDisplay = this.getMain().style.display;
            this.getMain().style.display = "none";
        }
    }

    public reDisplay() {
        this.getMain().style.display = this.baseDisplay;
    }

    public unVisible() {
        if (this.getMain().style.display !== "hidden") {
            this.baseVisibility = this.getMain().style.visibility;
            this.getMain().style.visibility = "hidden";
        }
    }

    public reVisible() {
        this.getMain().style.visibility = this.baseVisibility;
    }

    public append(child: QinBase) {
        this.baseChildren.push(child);
        this.getMain().appendChild(child.getMain());
    }

    public remove(child: QinBase) {
        let index = this.baseChildren.indexOf(child);
        if (index > -1) {
            this.baseChildren.splice(index, 1);
        }
        this.getMain().removeChild(child.getMain());
    }

    public children(): QinBase[] {
        return this.baseChildren;
    }

    public addAction(action: QinAction) {
        QinSoul.arm.addAction(this.getMain(), action);
    }

    

}