import { Qinpel } from "qinpel-app/types/qinpel";
import { QinAction, QinSoul } from "qinpel-res";
import { QinTools } from "./qin-tools";
import { QinBaseStyle } from "./qin-base-style"

export abstract class QinBase {

    public abstract getMain(): HTMLElement;

    private baseParent: QinBase = null;
    private baseChildren: QinBase[] = [];
    private baseDisplay: string = "initial";
    private baseVisibility: string = "initial";

    private _style = null;

    public get qinpel(): Qinpel {
        return QinTools.qinpel();
    }

    public get style(): QinBaseStyle {
        if (this._style == null) {
            this._style = new QinBaseStyle(this.getMain());
        }
        return this._style;
    }

    public install(onBase: QinBase) {
        this.baseParent = onBase;
        this.baseParent.appendChild(this);
    }

    public unInstall() {
        this.baseParent.removeChild(this);
    }

    public reInstall() {
        this.baseParent.appendChild(this);
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

    public appendChild(child: QinBase) {
        this.baseChildren.push(child);
        this.getMain().appendChild(child.getMain());
    }

    public removeChild(child: QinBase) {
        let index = this.baseChildren.indexOf(child);
        if (index > -1) {
            this.baseChildren.splice(index, 1);
        }
        this.getMain().removeChild(child.getMain());
    }

    public children(): QinBase[] {
        return this.baseChildren;
    }

    public clearChildren() {
        for (const child of this.baseChildren) {
            this.getMain().removeChild(child.getMain());
        }
        this.baseChildren = [];
    }

    public addAction(action: QinAction) {
        QinSoul.arm.addAction(this.getMain(), action);
    }

    public putTabIndex(index?: number) {
        this.getMain().tabIndex = index ? index : 0;
    }

}