import { QinNature, QinSkin } from "qinpel-res";
import { QinEdit } from "./qin-edit";

export class QinCombo extends QinEdit {
  private _elGroups = new Array<HTMLOptGroupElement>();

  public constructor(options?: QinComboSet, isQindred?: string) {
    super((isQindred ? isQindred + "_" : "") + "combo", document.createElement("select"));
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

  public override castedQine(): HTMLSelectElement {
    return this.qinedHTML as HTMLSelectElement;
  }

  public getNature(): QinNature {
    return QinNature.CHARS;
  }

  public override getData(): string {
    return (this.qinedHTML as HTMLSelectElement).value;
  }

  public override setData(data: string) {
    (this.qinedHTML as HTMLSelectElement).value = data;
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
      this.qinedHTML.appendChild(option);
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
    this.qinedHTML.appendChild(newGroup);
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
