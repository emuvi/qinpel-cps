import { QinNature } from "qinpel-res";
import { QinColumn } from "./qin-column";
import { QinEdit } from "./qin-edit";
import { QinLabel } from "./qin-label";

export class QinField extends QinEdit {
  private _qinLabel = new QinLabel();
  private _qinEdit: QinEdit = null;

  public constructor(title: string, edit: QinEdit, isQindred?: string) {
    super((isQindred ? isQindred + "_" : "") + edit.qindred + "_field", new QinColumn());
    this._qinLabel.title = title;
    this._qinLabel.install(this.qinedBase);
    this._qinEdit = edit;
    this._qinEdit.install(this.qinedBase);
    this._qinLabel.qinLink(this._qinEdit);
    this.qinedBase.style.putAsMargin(3);
  }

  public override castedQine(): QinColumn {
    return this.qinedBase as QinColumn;
  }

  public override getNature(): QinNature {
    return this._qinEdit.getNature();
  }

  public override getData() {
    return this._qinEdit.getData();
  }

  public override setData(data: any) {
    this._qinEdit.setData(data);
  }

  public override turnReadOnly(): void {
    this._qinEdit.turnReadOnly();
  }

  public override turnEditable(): void {
    this._qinEdit.turnEditable();
  }

  public override isEditable(): boolean {
    return this._qinEdit.isEditable();
  }

  public get qinLabel(): QinLabel {
    return this._qinLabel;
  }

  public get qinEdit(): QinEdit {
    return this._qinEdit;
  }
}
