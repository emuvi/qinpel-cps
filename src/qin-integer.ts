import { QinNature, QinSkin } from "qinpel-res";
import { QinEdit } from "./qin-edit";

export class QinInteger extends QinEdit {
  public constructor(options?: QinIntegerSet, isQindred?: string) {
    super((isQindred ? isQindred + "_" : "") + "integer", document.createElement("input"));
    this.castedQine().type = "number";
    QinSkin.styleAsEditable(this.qinedHTML);
    this.qinedHTML.style.width = "120px";
    this.qinedHTML.addEventListener("focusout", () => {
      this.setData(this.getData());
    });
    if (options?.initial) {
      this.setData(options.initial);
    }
    if (options?.readOnly) {
      this.turnReadOnly();
    }
  }

  public override castedQine(): HTMLInputElement {
    return this.qinedHTML as HTMLInputElement;
  }

  public override styled(styles: Partial<CSSStyleDeclaration>): QinInteger {
    super.styled(styles);
    return this;
  }

  public override getNature(): QinNature {
    return QinNature.INT;
  }

  public override getData(): number {
    const value = this.castedQine().value;
    if (value == null || value == undefined || value.length == 0) {
      return null;
    } else {
      return parseInt(this.castedQine().value, 10);
    }
  }

  public override turnReadOnly(): void {
    this.castedQine().readOnly = true;
    QinSkin.styleAsReadOnly(this.qinedHTML);
  }

  public override turnEditable(): void {
    this.castedQine().readOnly = false;
    QinSkin.styleAsEditable(this.qinedHTML);
  }

  public override isEditable(): boolean {
    return !this.castedQine().readOnly;
  }

  public override setData(data: number) {
    if (data == null || data == undefined) {
      this.castedQine().value = "";
    } else {
      this.castedQine().value = (data | 0).toString();
    }
  }
}

export type QinIntegerSet = {
  initial?: number;
  readOnly?: boolean;
};
