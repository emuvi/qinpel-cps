import { Qinpel } from "qinpel-app/types/qinpel";
import { QinAction, QinArm, QinBody } from "qinpel-res";
import { QinBaseStyle } from "./qin-base-style";
import { QinTool } from "./qin-tool";

export abstract class QinBase {
  public abstract getMain(): HTMLElement;

  protected _baseParent: QinBase = null;
  protected _pastParent: QinBase = null;
  protected _baseChildren: QinBase[] = [];
  protected _baseDisplay: string = null;
  protected _baseVisibility: string = null;

  protected _style: QinBaseStyle = null;

  public get qinpel(): Qinpel {
    return QinTool.qinpel;
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
    this._baseParent.addChild(this);
  }

  public unInstall() {
    if (this._baseParent != null) {
      this._baseParent.delChild(this);
      this._pastParent = this._baseParent;
      this._baseParent = null;
    }
  }

  public reInstall() {
    this.unInstall();
    if (this._pastParent != null) {
      this._pastParent.addChild(this);
      this._baseParent = this._pastParent;
    }
  }

  public unInstallChildren() {
    for (let i = this._baseChildren.length - 1; i >= 0; i--) {
      this._baseChildren[i].unInstall();
    }
  }

  public unDisplay() {
    if (this.getMain().style.display !== "none") {
      this._baseDisplay = this.getMain().style.display;
      this.getMain().style.display = "none";
    }
  }

  public reDisplay() {
    if (this._baseDisplay != null) {
      this.getMain().style.display = this._baseDisplay;
    }
  }

  public unVisible() {
    if (this.getMain().style.display !== "hidden") {
      this._baseVisibility = this.getMain().style.visibility;
      this.getMain().style.visibility = "hidden";
    }
  }

  public reVisible() {
    if (this._baseVisibility != null) {
      this.getMain().style.visibility = this._baseVisibility;
    }
  }

  public addChild(child: QinBase) {
    this._baseChildren.push(child);
    this.getMain().appendChild(child.getMain());
  }

  public delChild(child: QinBase) {
    let index = this._baseChildren.indexOf(child);
    if (index > -1) {
      this._baseChildren.splice(index, 1);
    }
    this.getMain().removeChild(child.getMain());
  }

  public children(): QinBase[] {
    return this._baseChildren;
  }

  public mustId(): string {
    var result = this.id;
    if (!result) {
      result = QinBody.makeQinUID();
      this.id = result;
    }
    return result;
  }

  public get id(): string {
    return this.getMain().id;
  }

  public set id(id: string) {
    this.getMain().id = id;
  }

  public get tabIndex(): number {
    return this.getMain().tabIndex;
  }

  public set tabIndex(index: number) {
    this.getMain().tabIndex = index;
  }

  public focus() {
    this.getMain().focus();
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

  public addActionMainMouse(action: QinAction) {
    QinArm.addActionMainMouse(this.getMain(), action);
  }

  public addActionMainTouch(action: QinAction) {
    QinArm.addActionMainTouch(this.getMain(), action);
  }

  public addActionMainPoint(action: QinAction) {
    QinArm.addActionMainPoint(this.getMain(), action);
  }

  public addActionMidi(action: QinAction) {
    QinArm.addActionMidi(this.getMain(), action);
  }

  public addActionMidiKey(action: QinAction) {
    QinArm.addActionMidiKey(this.getMain(), action);
  }

  public addActionMidiMouse(action: QinAction) {
    QinArm.addActionMidiMouse(this.getMain(), action);
  }

  public addActionMidiTouch(action: QinAction) {
    QinArm.addActionMidiTouch(this.getMain(), action);
  }

  public addActionMidiPoint(action: QinAction) {
    QinArm.addActionMidiPoint(this.getMain(), action);
  }

  public addActionMenu(action: QinAction) {
    QinArm.addActionMenu(this.getMain(), action);
  }

  public addActionMenuKey(action: QinAction) {
    QinArm.addActionMenuKey(this.getMain(), action);
  }

  public addActionMenuMouse(action: QinAction) {
    QinArm.addActionMenuMouse(this.getMain(), action);
  }

  public addActionMenuTouch(action: QinAction) {
    QinArm.addActionMenuTouch(this.getMain(), action);
  }

  public addActionMenuPoint(action: QinAction) {
    QinArm.addActionMenuPoint(this.getMain(), action);
  }
}
