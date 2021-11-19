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

    public putAsBody() {
        document.body.appendChild(this.getMain());
        QinSoul.skin.styleAsBody(this.getMain());
    }

    public putAsEdit() {
        QinSoul.skin.styleAsEdit(this.getMain());
        this.getMain().tabIndex = 0;
    }

    public putAsScroll() {
        this.getMain().style.overflow = "auto";
    }

    public putAsDisabledSelection() {
        QinSoul.skin.disableSelection(this.getMain());
    }

    public putAsCentered() {
        this.getMain().style.textAlign = "center";
        this.getMain().style.alignItems = "center";
        this.getMain().style.alignContent = "center";
        this.getMain().style.verticalAlign = "middle";
    }

    public putAsDisplayInlineBlock() {
        this.getMain().style.display = "inline-block";
    }

    public putAsDisplayFlex() {
        this.getMain().style.display = "flex";
    }

    public putAsFlexMin() {
        this.getMain().style.flex = "none";
    }

    public putAsFlexMax() {
        this.getMain().style.flex = "auto";
    }

    public putAsWidth(width: number) {
        if (width != null && width != undefined) {
            this.getMain().style.width = width + "px";
        }
    }

    public putAsHeight(height: number) {
        if (height != null && height != undefined) {
            this.getMain().style.height = height + "px";
        }
    }

    public putAsSize(width: number, height: number) {
        if (width != null && width != undefined) {
            this.getMain().style.width = width + "px";
        }
        if (height != null && height != undefined) {
            this.getMain().style.height = height + "px";
        }
    }

    public putAsMinWidth(width: number) {
        if (width != null && width != undefined) {
            this.getMain().style.minWidth = width + "px";
        }
    }

    public putAsMinHeight(height: number) {
        if (height != null && height != undefined) {
            this.getMain().style.minHeight = height + "px";
        }
    }

    public putAsMinSize(width: number, height: number) {
        if (width != null && width != undefined) {
            this.getMain().style.minWidth = width + "px";
        }
        if (height != null && height != undefined) {
            this.getMain().style.minHeight = height + "px";
        }
    }

    public putAsMaxWidth(width: number) {
        if (width != null && width != undefined) {
            this.getMain().style.maxWidth = width + "px";
        }
    }

    public putAsMaxHeight(height: number) {
        if (height != null && height != undefined) {
            this.getMain().style.maxHeight = height + "px";
        }
    }

    public putAsMaxSize(width: number, height: number) {
        if (width != null && width != undefined) {
            this.getMain().style.maxWidth = width + "px";
        }
        if (height != null && height != undefined) {
            this.getMain().style.maxHeight = height + "px";
        }
    }

}