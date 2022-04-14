import { QinColumn } from "./qin-column";
import { QinEdit } from "./qin-edit";
import { QinLabel } from "./qin-label";

export class QinField extends QinEdit {
  private _qinMain = new QinColumn();
  private _qinLabel = new QinLabel();
  private _qinEdit: QinEdit = null;

  public constructor(title: string, edit: QinEdit) {
    super();
    this._qinLabel.setTitle(title);
    this._qinLabel.install(this._qinMain);
    this._qinEdit = edit;
    this._qinEdit.install(this._qinMain);
    this._qinMain.getMain().style.marginRight = "5px";
    this._qinMain.getMain().style.marginBottom = "5px";
  }

  public getMain(): HTMLDivElement {
    return this._qinMain.getMain();
  }

  public getData() {
    return this._qinEdit.getData();
  }

  public setData(data: any) {
    this._qinEdit.setData(data);
  }

  public get qinMain(): QinColumn {
    return this._qinMain;
  }

  public get qinLabel(): QinLabel {
    return this._qinLabel;
  }

  public get qinEdit(): QinEdit {
    return this._qinEdit;
  }
}
