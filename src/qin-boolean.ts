import { QinNature } from "qinpel-res";
import { QinAsset } from "./qin-assets";
import { QinEdit } from "./qin-edit";
import { QinIcon } from "./qin-icon";
import { QinLabel } from "./qin-label";
import { QinLine } from "./qin-line";

export class QinBoolean extends QinEdit {
  private _qinMain = new QinLine();
  private _qinSpan = new QinLabel();
  private _qinIcon = new QinIcon(QinAsset.FaceCircle);
  private _value = false;

  public constructor(options?: QinBooleanSet) {
    super();
    this._qinSpan.install(this._qinMain);
    this._qinIcon.install(this._qinSpan);
    this._qinSpan.style.putAsEdit();
    this._qinSpan.style.putAsDisplayFlex();
    this._qinSpan.style.putAsAllCentered();
    this._qinSpan.addAction((qinEvent) => {
      if (qinEvent.isMain) {
        this.toggle();
      }
    });
    if (options?.initial) {
      this.setData(options.initial);
    }
  }

  public getNature(): QinNature {
    return QinNature.BOOL;
  }

  public override getMain(): HTMLDivElement {
    return this._qinMain.getMain();
  }

  public override getData(): boolean {
    return this._value;
  }

  public override setData(data: boolean) {
    this._value = data;
    this.updateIcon();
  }

  public get qinMain(): QinLine {
    return this._qinMain;
  }

  public get qinSpan(): QinLabel {
    return this._qinSpan;
  }

  public get qinIcon(): QinIcon {
    return this._qinIcon;
  }

  public get value(): boolean {
    return this._value;
  }

  public set value(value: boolean) {
    this._value = value;
    this.updateIcon();
  }

  private updateIcon() {
    if (this._value) {
      this._qinIcon.asset = QinAsset.FaceConfirm;
    } else {
      this._qinIcon.asset = QinAsset.FaceCircle;
    }
  }

  public toggle() {
    this._value = !this._value;
    this.updateIcon();
  }
}

export type QinBooleanSet = {
  initial?: boolean;
};
