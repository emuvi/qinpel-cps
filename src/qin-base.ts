import { Qinpel } from "qinpel-app/types/qinpel";
import { QinAction, QinArm, QinBody } from "qinpel-res";
import { QinBaseStyle } from "./qin-base-style";
import { QinTool } from "./qin-tool";

export abstract class QinBase {
  private _qindred: string;
  private _qined: HTMLElement | QinBase;

  public constructor(qindred: string, qined: HTMLElement | QinBase) {
    this._qindred = qindred;
    if (qined instanceof QinBase) {
      qined.qinedHTML.id = qindred + qined.qinedHTML.id;
    } else {
      qined.id = QinTool.qinpel.our.soul.body.makeQindredUID(qindred);
    }
    this._qined = qined;
  }

  public get qinedHTML(): HTMLElement {
    if (this._qined instanceof QinBase) {
      return this._qined.qinedHTML;
    } else {
      return this._qined;
    }
  }

  public get qinedBase(): QinBase {
    if (this._qined instanceof QinBase) {
      return this._qined;
    } else {
      return null;
    }
  }

  public abstract castedQine(): HTMLElement | QinBase;

  protected _baseParent: QinBase = null;
  protected _pastParent: QinBase = null;
  protected _baseChildren: QinBase[] = [];
  protected _baseDisplay: string = null;
  protected _baseVisibility: string = null;

  protected _style: QinBaseStyle = null;

  public get qindred(): string {
    return this._qindred;
  }

  public get qinpel(): Qinpel {
    return QinTool.qinpel;
  }

  public get style(): QinBaseStyle {
    if (this._style == null) {
      this._style = new QinBaseStyle(this.qinedHTML);
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
    if (this.qinedHTML.style.display !== "none") {
      this._baseDisplay = this.qinedHTML.style.display;
      this.qinedHTML.style.display = "none";
    }
  }

  public reDisplay() {
    if (this._baseDisplay != null) {
      this.qinedHTML.style.display = this._baseDisplay;
    }
  }

  public unVisible() {
    if (this.qinedHTML.style.display !== "hidden") {
      this._baseVisibility = this.qinedHTML.style.visibility;
      this.qinedHTML.style.visibility = "hidden";
    }
  }

  public reVisible() {
    if (this._baseVisibility != null) {
      this.qinedHTML.style.visibility = this._baseVisibility;
    }
  }

  public addChild(child: QinBase) {
    this._baseChildren.push(child);
    this.qinedHTML.appendChild(child.qinedHTML);
  }

  public delChild(child: QinBase) {
    let index = this._baseChildren.indexOf(child);
    if (index > -1) {
      this._baseChildren.splice(index, 1);
    }
    this.qinedHTML.removeChild(child.qinedHTML);
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
    return this.qinedHTML.id;
  }

  public set id(id: string) {
    this.qinedHTML.id = id;
  }

  public get tabIndex(): number {
    return this.qinedHTML.tabIndex;
  }

  public set tabIndex(index: number) {
    this.qinedHTML.tabIndex = index;
  }

  public focus() {
    this.qinedHTML.focus();
  }

  public addAction(action: QinAction) {
    QinArm.addAction(this.qinedHTML, action);
  }

  public addActionMain(action: QinAction) {
    QinArm.addActionMain(this.qinedHTML, action);
  }

  public addActionMainKey(action: QinAction) {
    QinArm.addActionMainKey(this.qinedHTML, action);
  }

  public addActionMainMouse(action: QinAction) {
    QinArm.addActionMainMouse(this.qinedHTML, action);
  }

  public addActionMainTouch(action: QinAction) {
    QinArm.addActionMainTouch(this.qinedHTML, action);
  }

  public addActionMainPoint(action: QinAction) {
    QinArm.addActionMainPoint(this.qinedHTML, action);
  }

  public addActionMidi(action: QinAction) {
    QinArm.addActionMidi(this.qinedHTML, action);
  }

  public addActionMidiKey(action: QinAction) {
    QinArm.addActionMidiKey(this.qinedHTML, action);
  }

  public addActionMidiMouse(action: QinAction) {
    QinArm.addActionMidiMouse(this.qinedHTML, action);
  }

  public addActionMidiTouch(action: QinAction) {
    QinArm.addActionMidiTouch(this.qinedHTML, action);
  }

  public addActionMidiPoint(action: QinAction) {
    QinArm.addActionMidiPoint(this.qinedHTML, action);
  }

  public addActionMenu(action: QinAction) {
    QinArm.addActionMenu(this.qinedHTML, action);
  }

  public addActionMenuKey(action: QinAction) {
    QinArm.addActionMenuKey(this.qinedHTML, action);
  }

  public addActionMenuMouse(action: QinAction) {
    QinArm.addActionMenuMouse(this.qinedHTML, action);
  }

  public addActionMenuTouch(action: QinAction) {
    QinArm.addActionMenuTouch(this.qinedHTML, action);
  }

  public addActionMenuPoint(action: QinAction) {
    QinArm.addActionMenuPoint(this.qinedHTML, action);
  }
}
