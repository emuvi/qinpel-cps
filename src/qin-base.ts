import { Qinpel } from "qinpel-app/types/qinpel";
import { QinAction, QinArm } from "qinpel-res";
import { QinBaseStyle } from "./qin-base-style";
import { QinTools } from "./qin-tools";

export abstract class QinBase {
  public abstract getMain(): HTMLElement;

  protected _baseParent: QinBase = null;
  protected _pastParent: QinBase = null;
  protected _baseChildren: QinBase[] = [];
  protected _baseDisplay: string = "initial";
  protected _baseVisibility: string = "initial";

  protected _style: QinBaseStyle = null;

  public get qinpel(): Qinpel {
    return QinTools.qinpel();
  }

  public get style(): QinBaseStyle {
    if (this._style == null) {
      this._style = new QinBaseStyle(this.getMain());
    }
    return this._style;
  }

  public put(item: QinBase): QinBase {
    item.install(this);
    return this;
  }

  public install(onBase: QinBase) {
    this.unInstall();
    this._baseParent = onBase;
    this._baseParent.appendChild(this);
  }

  public unInstall() {
    if (this._baseParent != null) {
      this._baseParent.removeChild(this);
      this._pastParent = this._baseParent;
      this._baseParent = null;
    }
  }

  public reInstall() {
    this.unInstall();
    if (this._pastParent != null) {
      this._pastParent.appendChild(this);
      this._baseParent = this._pastParent;
    }
  }

  public unDisplay() {
    if (this.getMain().style.display !== "none") {
      this._baseDisplay = this.getMain().style.display;
      this.getMain().style.display = "none";
    }
  }

  public reDisplay() {
    this.getMain().style.display = this._baseDisplay;
  }

  public unVisible() {
    if (this.getMain().style.display !== "hidden") {
      this._baseVisibility = this.getMain().style.visibility;
      this.getMain().style.visibility = "hidden";
    }
  }

  public reVisible() {
    this.getMain().style.visibility = this._baseVisibility;
  }

  public appendChild(child: QinBase) {
    this._baseChildren.push(child);
    this.getMain().appendChild(child.getMain());
  }

  public removeChild(child: QinBase) {
    let index = this._baseChildren.indexOf(child);
    if (index > -1) {
      this._baseChildren.splice(index, 1);
    }
    this.getMain().removeChild(child.getMain());
  }

  public children(): QinBase[] {
    return this._baseChildren;
  }

  public clearChildren() {
    for (const child of this._baseChildren) {
      this.getMain().removeChild(child.getMain());
    }
    this._baseChildren = [];
  }

  public putTabIndex(index?: number) {
    this.getMain().tabIndex = index;
  }

  public addAction(action: QinAction) {
    QinArm.addAction(this.getMain(), action);
  }

  public addActionMain(action: QinAction) {
    QinArm.addActionMain(this.getMain(), action);
  }

  public addActionMainKey(action: QinAction) {
    QinArm.addActionMainKey(this.getMain(), action);
  }

  public addActionMainPoint(action: QinAction) {
    QinArm.addActionMainPoint(this.getMain(), action);
  }
}
