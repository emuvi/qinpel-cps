import { QinSoul } from "qinpel-res";
import { QinEdit } from "./qin-edit";

export class QinString extends QinEdit {

    private _inputMain: HTMLInputElement = document.createElement("input");

    public constructor(initial?: string, maxLength?: number) {
        super();
        this._inputMain.type = "text";
        if (maxLength) {
            this._inputMain.maxLength = maxLength;
            let position = Math.min(Math.max(maxLength - 10, 0), 90);
            let width = Math.floor(90 + (position * 7 / 3));
            this._inputMain.style.width = width + "px";
        }
        QinSoul.skin.styleAsEdit(this._inputMain);
        this.setData(initial);
    }

    public getMain(): HTMLInputElement {
        return this._inputMain;
    }

    public getData(): string {
        return this._inputMain.value;
    }

    public setData(data: string) {
        this._inputMain.value = data;
    }

    public insertAtCursor(data: string) {
        if (!data) return;
        let startPos = this._inputMain.selectionStart;
        let endPos = this._inputMain.selectionEnd;
        let oldVal = this._inputMain.value;
        let newVal = (startPos > 0 ? oldVal.substring(0, startPos) : "") + data
            + (endPos < oldVal.length ? oldVal.substring(endPos) : "");
        this._inputMain.value = newVal;
        this._inputMain.selectionStart = startPos;
        this._inputMain.selectionEnd = startPos + data.length;
    }

    /**
     * Getter inputMain
     * @return {HTMLInputElement }
     */
    public get inputMain(): HTMLInputElement {
        return this._inputMain;
    }

}