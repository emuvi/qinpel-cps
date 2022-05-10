import { QinNature, QinSoul } from "qinpel-res";
import { QinEdit } from "./qin-edit";

export class QinInteger extends QinEdit {
  public constructor(options?: QinIntegerSet, isQindred?: string) {
    super(
      (isQindred ? isQindred + "_" : "") + "integer",
      document.createElement("input")
    );
    this.castedQine().type = "number";
    QinSoul.skin.styleAsEdit(this.qinedHTML);
    this.qinedHTML.style.width = "120px";
    this.qinedHTML.addEventListener("focusout", () => {
      this.setData(this.getData());
    });
    if (options?.initial) {
      this.setData(options.initial);
    }
  }

  public override castedQine(): HTMLInputElement {
    return this.qinedHTML as HTMLInputElement;
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
};
