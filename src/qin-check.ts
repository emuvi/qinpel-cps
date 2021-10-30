import { QinSoul } from "qinpel-res";
import { QinEdit } from "./qin-edit";

export class QinCheck extends QinEdit {
    
    private inputCheck = document.createElement("input");

    public constructor(title?: string) {
        super();
        this.inputCheck.type = "checkbox";
        if (title) {
            this.inputCheck.innerText = title;
        }
        QinSoul.skin.styleAsEdit(this.inputCheck);
    }

    public getMain(): HTMLInputElement {
        return this.inputCheck;
    }

    public getData(): boolean {
        return this.inputCheck.checked;
    }

    public setData(data: boolean) {
        this.inputCheck.checked = data;
    }

}