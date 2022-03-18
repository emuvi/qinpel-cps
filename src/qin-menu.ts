import { QinColumn } from "./qin-column";
import { QinEdit } from "./qin-edit";
import { QinIcon } from "./qin-icon";
import { QinLabel } from "./qin-label";
import { QinPanel } from "./qin-panel";

export class QinMenu extends QinEdit {
  private _qinMain: QinPanel = new QinPanel();

  private items: QinMenuItem[] = [];

  public getMain(): HTMLDivElement {
    return this._qinMain.divMain;
  }

  public getData(): QinMenuItem[] {
    return this.items;
  }

  public setData(data: QinMenuItem[]) {
    this.items = data;
  }
}

export class QinMenuItem extends QinColumn {
  private icon: QinIcon;
  private label: QinLabel;

  public constructor(icon?: QinIcon, label?: QinLabel) {
    super()
    this.icon = icon;
    this.label = label;
    if (this.icon) {
        this.icon.install(this);
    }
    if (this.label) {
        this.label.install(this);
    }
  }
}

const styles = {
    
}
