import { QinSoul } from "qinpel-res";
import { QinEdit } from "./qin-edit";

export class QinCombo extends QinEdit {
    
    private _selectMain: HTMLSelectElement = document.createElement("select");

    public constructor(options?: QinComboOptions) {
        super();
        QinSoul.skin.styleAsEdit(this._selectMain);
        if (options?.items) {
            for (let item of options.items) {
                this.addItem(item);
            }
        }
        if (options?.selected) {
            this.setData(options.selected);
        }
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

    public addItem(item: QinComboItem): QinCombo {
        const option = document.createElement("option");
        option.text = item.title;
        option.value = item.value;
        if (item.selected != undefined && item.selected != null) {
            option.selected = item.selected;
        }
        this._selectMain.appendChild(option);
        return this;
    }

    /**
     * Getter selectMain
     * @return {HTMLSelectElement }
     */
	public get selectMain(): HTMLSelectElement  {
		return this._selectMain;
	}

}

export type QinComboOptions = {
    items?: QinComboItem[]
    selected?: string,
}

export type QinComboItem = {
    title: string, 
    value: string, 
    selected?: boolean,
};