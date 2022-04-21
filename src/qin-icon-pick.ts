import { QinAsset } from "./qin-assets";
import { QinEdit } from "./qin-edit";
import { QinLine } from "./qin-line";
import { QinIcon } from "./qin-icon";
import { QinIconOption } from "./qin-icon-option";

export class QinIconPick extends QinEdit {
  private _qinMain = new QinLine();

  public constructor() {
    super();
    this._qinMain.style.putAsEdit();
  }

  public getMain(): HTMLElement {
    return this._qinMain.getMain();
  }

  public getData(): QinAsset {
    for (let child of this.children()) {
      if (child instanceof QinIconOption) {
        if (child.selected) {
          return child.icon.asset;
        }
      }
    };
    return null;
  }

  public setData(asset: QinAsset) {
    for (let child of this._qinMain.children()) {
      if (child instanceof QinIconOption) {
        if (child.icon.asset == asset) {
          child.selected = true;
        } else {
          child.selected = false;
        }
      }
    };
  }
  
  public addIcon(icon: QinIcon) {
    let option = new QinIconOption(icon);
    option.install(this._qinMain);
  }

  public addOption(option: QinIconOption) {
    option.install(this._qinMain);
  }
}