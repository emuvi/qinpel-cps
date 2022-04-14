import { QinSoul } from "qinpel-res";
import { QinEdit } from "./qin-edit";

export class QinInteger extends QinEdit {
  private _elMain = document.createElement("input");

  public constructor(options?: QinIntegerSet) {
    super();
    this._elMain.type = "number";
    QinSoul.skin.styleAsEdit(this._elMain);
    this._elMain.style.width = "120px";
    this._elMain.addEventListener("focusout", () => {
      this.setData(this.getData());
    });
    if (options?.initial) {
      this.setData(options.initial);
    }
  }

  public getMain(): HTMLInputElement {
    return this._elMain;
  }

  public getData(): number {
    const value = this._elMain.value;
    if (value == null || value == undefined || value.length == 0) {
      return null;
    } else {
      return parseInt(this._elMain.value, 10);
    }
  }

  public setData(data: number) {
    if (data == null || data == undefined) {
      this._elMain.value = "";
    } else {
      this._elMain.value = (data | 0).toString();
    }
  }
}

export type QinIntegerSet = {
  initial?: number;
};
