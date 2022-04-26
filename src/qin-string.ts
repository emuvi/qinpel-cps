import { QinSkin } from "qinpel-res";
import { QinEdit } from "./qin-edit";

export class QinString extends QinEdit {
  private _elMain = document.createElement("input");

  public constructor(options?: QinStringSet) {
    super();
    this._elMain.type = "text";
    if (options?.maxLength) {
      this._elMain.maxLength = options.maxLength;
      let position = Math.min(Math.max(options.maxLength - 10, 0), 90);
      let width = Math.floor(90 + (position * 7) / 3);
      this._elMain.style.width = width + "px";
    }
    QinSkin.styleAsEdit(this._elMain);
    if (options?.initial) {
      this.setData(options.initial);
    }
  }

  public override getMain(): HTMLInputElement {
    return this._elMain;
  }

  public override getData(): string {
    return this._elMain.value;
  }

  public override setData(data: string) {
    this._elMain.value = data;
  }

  public insertAtCursor(data: string) {
    if (!data) return;
    let startPos = this._elMain.selectionStart;
    let endPos = this._elMain.selectionEnd;
    let oldVal = this._elMain.value;
    let newVal =
      (startPos > 0 ? oldVal.substring(0, startPos) : "") +
      data +
      (endPos < oldVal.length ? oldVal.substring(endPos) : "");
    this._elMain.value = newVal;
    this._elMain.selectionStart = startPos;
    this._elMain.selectionEnd = startPos + data.length;
  }
}

export type QinStringSet = {
  initial?: string;
  maxLength?: number;
};
