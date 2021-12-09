import { QinSoul } from "qinpel-res";
import { QinEdit } from "./qin-edit";

export class QinInteger extends QinEdit {

    private _inputMain: HTMLInputElement = document.createElement("input");

    public constructor(options?: QinIntegerOptions) {
        super();
        this._inputMain.type = "number";
        QinSoul.skin.styleAsEdit(this._inputMain);
        this._inputMain.style.width = "120px";
        this._inputMain.addEventListener("focusout", () => {
            this.setData(this.getData());
        });
        if (options?.initial) {
            this.setData(options.initial);
        }
    }

    public getMain(): HTMLInputElement {
        return this._inputMain;
    }

    public getData(): number {
        const value = this._inputMain.value;
        if (value == null || value == undefined || value.length == 0) {
            return null;
        } else {
            return parseInt(this._inputMain.value, 10);
        }
    }

    public setData(data: number) {
        if (data == null || data == undefined) {
            this._inputMain.value = "";
        } else {
            this._inputMain.value = (data | 0).toString();
        }
    }

    /**
     * Getter inputMain
     * @return {HTMLInputElement }
     */
    public get inputMain(): HTMLInputElement {
        return this._inputMain;
    }

}

export type QinIntegerOptions = {
    initial?: number
};