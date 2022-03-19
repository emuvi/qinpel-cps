import { QinSoul } from "qinpel-res";
import { QinAsset } from "./qin-assets";

export class QinBaseStyle {

    private element: HTMLElement;

    public constructor(element: HTMLElement) {
        this.element = element;
    }

    public putAsBody() {
        document.body.appendChild(this.element);
        QinSoul.skin.styleAsBody(this.element);
    }

    public delAsBody() {
        document.body.removeChild(this.element);
    }

    public putAsEdit() {
        QinSoul.skin.styleAsEdit(this.element);
        this.element.tabIndex = 0;
    }

    public putAsScroll() {
        this.element.style.overflow = "auto";
    }

    public putAsMargin(margin?: number) {
        this.element.style.margin = margin ? margin + "px" : "initial";
    }

    public putAsPadding(padding?: number) {
        this.element.style.padding = padding ? padding + "px" : "initial";
    }

    public putAsAllCentered() {
        this.element.style.textAlign = "center";
        this.element.style.alignItems = "center";
        this.element.style.alignContent = "center";
        this.element.style.verticalAlign = "middle";
    }

    public putAsDisplayFlex() {
        this.element.style.display = "flex";
    }

    public putAsDisplayInline() {
        this.element.style.display = "inline";
    }

    public putAsDisplayInlineBlock() {
        this.element.style.display = "inline-block";
    }

    public putAsFlexDirectionRow() {
        this.element.style.flexDirection = "row";
    }

    public putAsFlexDirectionRowReverse() {
        this.element.style.flexDirection = "row-reverse";
    }

    public putAsFlexDirectionColumn() {
        this.element.style.flexDirection = "column";
    }

    public putAsFlexDirectionColumnReverse() {
        this.element.style.flexDirection = "column-reverse";
    }

    public putAsFlexWrap() {
        this.element.style.flexWrap = "wrap";
    }

    public putAsFlexWrapNot() {
        this.element.style.flexWrap = "nowrap";
    }

    public putAsFlexWrapReverse() {
        this.element.style.flexWrap = "wrap-reverse";
    }

    public putAsFlexMin() {
        this.element.style.flex = "none";
    }

    public putAsFlexMax() {
        this.element.style.flex = "auto";
    }

    public putAsWidth(width: number) {
        if (width != null && width != undefined) {
            this.element.style.width = width + "px";
        }
    }

    public putAsHeight(height: number) {
        if (height != null && height != undefined) {
            this.element.style.height = height + "px";
        }
    }

    public putAsSize(width: number, height: number) {
        if (width != null && width != undefined) {
            this.element.style.width = width + "px";
        }
        if (height != null && height != undefined) {
            this.element.style.height = height + "px";
        }
    }

    public putAsMinWidth(width: number) {
        if (width != null && width != undefined) {
            this.element.style.minWidth = width + "px";
        }
    }

    public putAsMinHeight(height: number) {
        if (height != null && height != undefined) {
            this.element.style.minHeight = height + "px";
        }
    }

    public putAsMinSize(width: number, height: number) {
        if (width != null && width != undefined) {
            this.element.style.minWidth = width + "px";
        }
        if (height != null && height != undefined) {
            this.element.style.minHeight = height + "px";
        }
    }

    public putAsMaxWidth(width: number) {
        if (width != null && width != undefined) {
            this.element.style.maxWidth = width + "px";
        }
    }

    public putAsMaxHeight(height: number) {
        if (height != null && height != undefined) {
            this.element.style.maxHeight = height + "px";
        }
    }

    public putAsMaxSize(width: number, height: number) {
        if (width != null && width != undefined) {
            this.element.style.maxWidth = width + "px";
        }
        if (height != null && height != undefined) {
            this.element.style.maxHeight = height + "px";
        }
    }

    public putAsForeground(foreground: string) {
        this.element.style.color = foreground;
    }

    public putAsBackground(background: string) {
        this.element.style.background = background;
    }

    public putAsBackAsset(asset: QinAsset) {
        this.element.style.backgroundImage = "url('/app/qinpel-app/assets/" + asset + "')";
    }

    public putAsBackInitial() {
        this.element.style.backgroundImage = "initial";
    }

    public putAsDisabledSelection() {
        QinSoul.skin.disableSelection(this.element);
    }

}