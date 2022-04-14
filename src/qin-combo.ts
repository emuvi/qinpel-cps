import { QinEdit } from "./qin-edit";

export class QinCombo extends QinEdit {
  private _elMain = document.createElement("select");

  public constructor(options?: QinComboSet) {
    super();
    this.style.putAsEdit();
    if (options?.items) {
      for (let item of options.items) {
        this.addItem(item);
      }
    }
    if (options?.selected) {
      this.setData(options.selected);
    }
  }

  public getMain(): HTMLSelectElement {
    return this._elMain;
  }

  public getData(): string {
    return this._elMain.value;
  }

  public setData(data: string) {
    this._elMain.value = data;
  }

  public addItem(item: QinComboItem): QinCombo {
    const option = document.createElement("option");
    option.text = item.title;
    option.value = item.value;
    if (item.selected != undefined && item.selected != null) {
      option.selected = item.selected;
    }
    this._elMain.appendChild(option);
    return this;
  }
}

export type QinComboSet = {
  items?: QinComboItem[];
  selected?: string;
};

export type QinComboItem = {
  title: string;
  value: string;
  selected?: boolean;
};
