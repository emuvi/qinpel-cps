import { QinSoul } from "qinpel-res";
import { QinEdit } from "./qin-edit";

export class QinString extends QinEdit {
    
    private inputString = document.createElement("input");

    public constructor() {
        super();
        this.inputString.type = "text";
        QinSoul.skin.styleAsEdit(this.inputString);
    }

    public getMain(): HTMLInputElement {
        return this.inputString;
    }

    public getData(): string {
        return this.inputString.value;
    }

    public setData(data: string) {
        this.inputString.value = data;
    }

}