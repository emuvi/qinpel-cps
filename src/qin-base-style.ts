import { QinSkin } from "qinpel-res";
import { QinAsset } from "./qin-assets";

export class QinBaseStyle {
  private element: HTMLElement;

  public constructor(element: HTMLElement) {
    this.element = element;
  }

  public putAsBody() {
    document.body.appendChild(this.element);
    QinSkin.styleAsBody(this.element);
  }

  public delAsBody() {
    document.body.removeChild(this.element);
  }

  public putAsWhole() {
    this.putAsPositionAbsolute();
    this.putAsBounds(0, 0, 0, 0);
  }

  public putAsEdit() {
    QinSkin.styleAsEdit(this.element);
    this.element.tabIndex = 0;
  }

  public putAsScroll() {
    this.element.style.overflow = "auto";
  }

  public putAsMargin(margin?: number) {
    this.element.style.margin = this.getPixelsOrInitial(margin);
  }

  public putAsMarginTop(margin?: number) {
    this.element.style.marginTop = this.getPixelsOrInitial(margin);
  }

  public putAsMarginBottom(margin?: number) {
    this.element.style.marginBottom = this.getPixelsOrInitial(margin);
  }

  public putAsMarginLeft(margin?: number) {
    this.element.style.marginLeft = this.getPixelsOrInitial(margin);
  }

  public putAsMarginRight(margin?: number) {
    this.element.style.marginRight = this.getPixelsOrInitial(margin);
  }

  public putAsPadding(padding?: number) {
    this.element.style.padding = this.getPixelsOrInitial(padding);
  }

  public putAsPaddingTop(padding?: number) {
    this.element.style.paddingTop = this.getPixelsOrInitial(padding);
  }

  public putAsPaddingBottom(padding?: number) {
    this.element.style.paddingBottom = this.getPixelsOrInitial(padding);
  }

  public putAsPaddingLeft(padding?: number) {
    this.element.style.paddingLeft = this.getPixelsOrInitial(padding);
  }

  public putAsPaddingRight(padding?: number) {
    this.element.style.paddingRight = this.getPixelsOrInitial(padding);
  }

  public putAsBounds(top: number, right: number, bottom: number, left: number) {
    this.element.style.top = this.getPixelsOrInitial(top);
    this.element.style.right = this.getPixelsOrInitial(right);
    this.element.style.bottom = this.getPixelsOrInitial(bottom);
    this.element.style.left = this.getPixelsOrInitial(left);
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

  public putAsPositionStatic() {
    this.element.style.position = "static";
  }

  public putAsPositionAbsolute() {
    this.element.style.position = "absolute";
  }

  public putAsPositionFixed() {
    this.element.style.position = "fixed";
  }

  public putAsPositionRelative() {
    this.element.style.position = "relative";
  }

  public putAsPositionSticky() {
    this.element.style.position = "sticky";
  }

  public putAsPositionInitial() {
    this.element.style.position = "initial";
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
    this.element.style.width = this.getPixelsOrInitial(width);
  }

  public putAsHeight(height: number) {
    this.element.style.height = this.getPixelsOrInitial(height);
  }

  public putAsSize(width: number, height: number) {
    this.element.style.width = this.getPixelsOrInitial(width);
    this.element.style.height = this.getPixelsOrInitial(height);
  }

  public putAsMinWidth(width: number) {
    this.element.style.minWidth = this.getPixelsOrInitial(width);
  }

  public putAsMinHeight(height: number) {
    this.element.style.minHeight = this.getPixelsOrInitial(height);
  }

  public putAsMinSize(width: number, height: number) {
    this.element.style.minWidth = this.getPixelsOrInitial(width);
    this.element.style.minHeight = this.getPixelsOrInitial(height);
  }

  public putAsMaxWidth(width: number) {
    this.element.style.maxWidth = this.getPixelsOrInitial(width);
  }

  public putAsMaxHeight(height: number) {
    this.element.style.maxHeight = this.getPixelsOrInitial(height);
  }

  public putAsMaxSize(width: number, height: number) {
    this.element.style.maxWidth = this.getPixelsOrInitial(width);
    this.element.style.maxHeight = this.getPixelsOrInitial(height);
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

  public putAsZIndex(index: number) {
    if (index == null || index == undefined) {
      this.element.style.zIndex = "initial";
    } else {
      this.element.style.zIndex = index.toString();
    }
  }

  public putAsDisabledSelection() {
    QinSkin.disableSelection(this.element);
  }

  private getPixelsOrInitial(value: number): string {
    if (value == null || value == undefined) {
      return "initial";
    }
    return value + "px";
  }
}
