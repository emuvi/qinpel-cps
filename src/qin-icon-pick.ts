import { QinNature } from "qinpel-res";
import { QinAsset } from "./qin-assets";
import { QinEdit } from "./qin-edit";
import { QinIcon } from "./qin-icon";
import { QinIconCell } from "./qin-icon-cell";
import { QinLine } from "./qin-line";

export class QinIconPick extends QinEdit {
  private _qinMain = new QinLine();

  public constructor(options?: QinIconPickSet) {
    super();
    this._qinMain.style.putAsEdit();
    if (options?.initial) {
      this.setData(options?.initial);
    }
    if (options?.icons) {
      for (const icon of options.icons) {
        this.addIcon(icon);
      }
    }
    if (options?.cells) {
      for (const cell of options.cells) {
        this.addCell(cell);
      }
    }
  }

  public override getMain(): HTMLElement {
    return this._qinMain.getMain();
  }

  public override getNature(): QinNature {
    return QinNature.CHARS;
  }

  public override getData(): QinAsset {
    for (let child of this.children()) {
      if (child instanceof QinIconCell) {
        if (child.selected) {
          return child.qinIcon.asset;
        }
      }
    }
    return null;
  }

  public override setData(asset: QinAsset) {
    for (let child of this._qinMain.children()) {
      if (child instanceof QinIconCell) {
        if (child.qinIcon.asset == asset) {
          child.selected = true;
        } else {
          child.selected = false;
        }
      }
    }
  }

  public get qinMain(): QinLine {
    return this._qinMain;
  }

  public addIcon(icon: QinIcon) {
    let option = new QinIconCell(icon);
    option.install(this._qinMain);
  }

  public addCell(option: QinIconCell) {
    option.install(this._qinMain);
  }
}

export type QinIconPickSet = {
  initial?: QinAsset;
  icons?: QinIcon[];
  cells?: QinIconCell[];
};
