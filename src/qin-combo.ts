import { QinSoul } from "qinpel-res";
import { QinEdit } from "./qin-edit";

export class QinCombo extends QinEdit {
    
    private _selectMain: HTMLSelectElement = document.createElement("select");

    public constructor() {
        super();
        QinSoul.skin.styleAsEdit(this._selectMain);
    }

    public getMain(): HTMLSelectElement {
        return this._selectMain;
    }

    public getData(): string {
        return this._selectMain.value;
    }

    public setData(data: string) {
        this._selectMain.value = data;
    }

    public addOption(title: string, value: string, selected?: boolean) {
        const option = document.createElement("option");
        option.text = title;
        option.value = value;
        if (selected != undefined && selected != null) {
            option.selected = selected;
        }
        this._selectMain.appendChild(option);
    }

    /**
     * Getter selectMain
     * @return {HTMLSelectElement }
     */
	public get selectMain(): HTMLSelectElement  {
		return this._selectMain;
	}

}