import { QinNature, QinSkin } from "qinpel-res";
import { QinEdit } from "./qin-edit";

export class QinCombo extends QinEdit {
  private _elMain = document.createElement("select");
  private _elGroups = new Array<HTMLOptGroupElement>();

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

  public override getMain(): HTMLSelectElement {
    return this._elMain;
  }

  public getNature(): QinNature {
    return QinNature.CHARS;
  }

  public override getData(): string {
    return this._elMain.value;
  }

  public override setData(data: string) {
    this._elMain.value = data;
  }

  public addItem(item: QinComboItem): QinCombo {
    const option = document.createElement("option");
    option.text = item.title;
    option.value = item.value;
    if (item.selected != undefined && item.selected != null) {
      option.selected = item.selected;
    }
    let group = this.getGroup(item.group);
    if (group) {
      group.appendChild(option);
    } else {
      QinSkin.styleAsBase(option);
      this._elMain.appendChild(option);
    }
    return this;
  }

  private getGroup(label: string): HTMLOptGroupElement {
    if (!label) {
      return null;
    }
    for (let group of this._elGroups) {
      if (group.label == label) {
        return group;
      }
    }
    let newGroup = document.createElement("optgroup");
    newGroup.label = label;
    QinSkin.styleAsBase(newGroup);
    this._elGroups.push(newGroup);
    this._elMain.appendChild(newGroup);
    return newGroup;
  }
}

export type QinComboSet = {
  items?: QinComboItem[];
  selected?: string;
};

export type QinComboItem = {
  group?: string;
  title: string;
  value: string;
  selected?: boolean;
};
