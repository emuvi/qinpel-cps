import { QinAsset } from "./qin-assets";
import { QinColumn } from "./qin-column";
import { QinEdit } from "./qin-edit";
import { QinIcon } from "./qin-icon";
import { QinLabel } from "./qin-label";
import { QinPanel } from "./qin-panel";

export class QinMenu extends QinEdit {
  private _qinMain: QinPanel = new QinPanel();

  public constructor(options?: QinMenuSet) {
    super();
    this._qinMain.style.putAsEdit();
    this._qinMain.style.putAsScroll();
    // this._qinMain.style.putAsDisplayFlex();
    // this._qinMain.style.putAsFlexDirectionRow();
    // this._qinMain.style.putAsFlexWrap();
    if (options?.items) {
      this.setData(options.items);
    }
  }

  public getMain(): HTMLDivElement {
    return this._qinMain.getMain();
  }

  public getData(): QinMenuItem[] {
    let result: QinMenuItem[] = [];
    for (let child of this.children()) {
      if (child instanceof QinMenuItem) {
        result.push(child);
      }
    }
    return result;
  }

  public setData(data: QinMenuItem[]) {
    this.clearChildren();
    for (let item of data) {
      item.install(this);
    }
  }

  public putItem(item: QinMenuItem) {
    item.install(this);
  }
}

export class QinMenuItem extends QinPanel {
  private _face = new QinPanel();
  private _body = new QinColumn();
  private _icon: QinIcon;
  private _label: QinLabel;

  private _selected = false;

  public constructor(icon?: QinIcon, label?: QinLabel) {
    super();
    this._face.install(this);
    this._body.install(this._face);
    this._icon = icon;
    if (this._icon) {
      this._icon.install(this._body);
    }
    this._label = label;
    if (this._label) {
      this._label.install(this._body);
    }
    this.putTabIndex(0);
    this.style.putAsEdit();
    this.style.putAsMargin(3);
    this.style.putAsPadding(6);
    this.style.putAsDisplayInlineBlock();
    this.style.putAsMaxWidth(96);
    this._body.style.putAsAllCentered();
  }

  public select() {
    this._face.style.putAsBackAsset(QinAsset.BackTiny01);
    this._selected = true;
  }

  public unSelect() {
    this._face.style.putAsBackInitial();
    this._selected = false;
  }

  public swapSelect() {
    if (this._selected) {
      this.unSelect();
    } else {
      this.select();
    }
  }
}

export type QinMenuSet = {
  items?: QinMenuItem[];
};
