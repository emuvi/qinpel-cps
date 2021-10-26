import { QinEdit } from "./qin-edit";

export class QinCheck extends QinEdit {
    
    private inputCheck = document.createElement("input");

    public constructor(title?: string) {
        super();
        this.inputCheck.type = "checkbox";
        if (title) {
            this.inputCheck.innerText = title;
        }
    }

    public getMain(): HTMLElement {
        return this.inputCheck;
    }

    public getData(): boolean {
        return this.inputCheck.checked;
    }

}