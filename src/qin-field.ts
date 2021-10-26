import { QinEdit } from "./qin-edit";
import { QinColumn } from "./qin-column";
import { QinLabel } from "./qin-label";

export class QinField extends QinEdit {
    
    private qinField = new QinColumn();
    private qinLabel = new QinLabel();
    private qinEdit: QinEdit = null;

    public constructor(title: string, edit: QinEdit) {
        super();
        this.qinLabel.setTitle(title);
        this.qinLabel.install(this.qinField);
        this.qinEdit = edit;
        this.qinEdit.install(this.qinField);
    }

    public getMain(): HTMLElement {
        return this.qinField.getMain();
    }

    public getData() {
        return this.qinEdit.getData();
    }

}