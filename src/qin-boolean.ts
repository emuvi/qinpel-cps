import { QinNature } from "qinpel-res";
import { QinAsset } from "./qin-assets";
import { QinEdit } from "./qin-edit";
import { QinIcon } from "./qin-icon";
import { QinLabel } from "./qin-label";
import { QinLine } from "./qin-line";

export class QinBoolean extends QinEdit {
  private _qinSpan = new QinLabel();
  private _qinIcon = new QinIcon(QinAsset.FaceCheckRadio);
  private _value = false;
  private _readOnly = false;

  public constructor(options?: QinBooleanSet, isQindred?: string) {
    super((isQindred ? isQindred + "_" : "") + "boolean", new QinLine());
    this._qinSpan.install(this.qinedBase);
    this._qinIcon.install(this._qinSpan);
    this._qinSpan.style.putAsEditable();
    this._qinSpan.style.putAsDisplayFlex();
    this._qinSpan.style.putAsAllCentered();
    this._qinSpan.addAction((qinEvent) => {
      if (qinEvent.isMain && !this._readOnly) {
        this.toggle();
      }
    });
    if (options?.initial) {
      this.setData(options.initial);
    }
    if (options?.readOnly) {
      this.turnReadOnly();
    }
  }

  public override castedQine(): QinLine {
    return this.qinedBase as QinLine;
  }

  public override styled(styles: Partial<CSSStyleDeclaration>): QinBoolean {
    super.styled(styles);
    return this;
  }

  public override getNature(): QinNature {
    return QinNature.BOOL;
  }

  public override getData(): boolean {
    return this._value;
  }

  public override setData(data: boolean) {
    this._value = data;
    this.updateIcon();
  }

  public override turnReadOnly(): void {
    this._readOnly = true;
    this._qinSpan.style.putAsReadOnly();
  }

  public override turnEditable(): void {
    this._readOnly = false;
    this._qinSpan.style.putAsEditable();
  }

  public override isEditable(): boolean {
    return !this._readOnly;
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
      this._qinIcon.asset = QinAsset.FaceCheckedRadio;
    } else {
      this._qinIcon.asset = QinAsset.FaceCheckRadio;
    }
  }

  public toggle() {
    this._value = !this._value;
    this.updateIcon();
  }
}

export type QinBooleanSet = {
  initial?: boolean;
  readOnly?: boolean;
};
