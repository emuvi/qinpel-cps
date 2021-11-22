import { QinSoul } from "qinpel-res";
import { QinEdit } from "./qin-edit";

export class QinString extends QinEdit {
    
    private _inputMain: HTMLInputElement = document.createElement("input");

    public constructor(initial: string = "") {
        super();
        this._inputMain.type = "text";
        this._inputMain.value = initial;
        QinSoul.skin.styleAsEdit(this._inputMain);
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

    /**
     * Getter inputMain
     * @return {HTMLInputElement }
     */
	public get inputMain(): HTMLInputElement  {
		return this._inputMain;
	}

}