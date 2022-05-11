import { QinNature } from "qinpel-res";
import { QinEdit } from "./qin-edit";

export class QinString extends QinEdit {
  public constructor(options?: QinStringSet, isQindred?: string) {
    super((isQindred ? isQindred + "_" : "") + "string", document.createElement("input"));
    this.castedQine().type = "text";
    this.qinedBase.style.putAsEditable();
    if (options?.maxLength) {
      this.castedQine().maxLength = options.maxLength;
      let position = Math.min(Math.max(options.maxLength - 10, 0), 90);
      let width = Math.floor(90 + (position * 7) / 3);
      this.qinedHTML.style.width = width + "px";
    }
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

  public override getNature(): QinNature {
    return QinNature.CHARS;
  }

  public override getData(): string {
    return this.castedQine().value;
  }

  public override setData(data: string) {
    this.castedQine().value = data;
  }

  public override turnReadOnly(): void {
    this.castedQine().readOnly = true;
    this.qinedBase.style.putAsReadOnly();
  }

  public override turnEditable(): void {
    this.castedQine().readOnly = false;
    this.qinedBase.style.putAsEditable();
  }

  public override isEditable(): boolean {
    return !this.castedQine().readOnly;
  }

  public insertAtCursor(data: string) {
    if (!data) return;
    let startPos = this.castedQine().selectionStart;
    let endPos = this.castedQine().selectionEnd;
    let oldVal = this.castedQine().value;
    let newVal =
      (startPos > 0 ? oldVal.substring(0, startPos) : "") +
      data +
      (endPos < oldVal.length ? oldVal.substring(endPos) : "");
    this.castedQine().value = newVal;
    this.castedQine().selectionStart = startPos;
    this.castedQine().selectionEnd = startPos + data.length;
  }
}

export type QinStringSet = {
  initial?: string;
  maxLength?: number;
  readOnly?: boolean;
};
