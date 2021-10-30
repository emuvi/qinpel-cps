import { QinSoul } from "qinpel-res";
import { QinEdit } from "./qin-edit";

export class QinCombo extends QinEdit {
    
    private selectCombo = document.createElement("select");

    public constructor() {
        super();
        QinSoul.skin.styleAsEdit(this.selectCombo);
    }

    public getMain(): HTMLSelectElement {
        return this.selectCombo;
    }

    public getData(): string {
        return this.selectCombo.value;
    }

    public setData(data: string) {
        this.selectCombo.value = data;
    }

    public addOption(title: string, value: string, selected?: boolean) {
        const option = document.createElement("option");
        option.text = title;
        option.value = value;
        if (selected != undefined && selected != null) {
            option.selected = selected;
        }
        this.selectCombo.appendChild(option);
    }

}