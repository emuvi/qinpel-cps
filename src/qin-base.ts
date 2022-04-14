import { Qinpel } from "qinpel-app/types/qinpel";
import { QinAction, QinArm } from "qinpel-res";
import { QinBaseStyle } from "./qin-base-style";
import { QinTools } from "./qin-tools";

export abstract class QinBase {
  public abstract getMain(): HTMLElement;

  private _baseParent: QinBase = null;
  private _baseChildren: QinBase[] = [];
  private _baseDisplay: string = "initial";
  private _baseVisibility: string = "initial";

  private _style: QinBaseStyle = null;

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
    this._baseParent = onBase;
    this._baseParent.appendChild(this);
  }

  public unInstall() {
    this._baseParent.removeChild(this);
  }

  public reInstall() {
    this._baseParent.appendChild(this);
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

  public addAction(action: QinAction) {
    QinArm.addAction(this.getMain(), action);
  }

  public putTabIndex(index?: number) {
    this.getMain().tabIndex = index;
  }
}
