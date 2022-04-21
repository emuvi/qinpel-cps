import { QinEdit } from "./qin-edit";
import { QinSkin } from "qinpel-res";
import { QinIcon } from "./qin-icon";

export class QinIconOption extends QinEdit {
  private _elMain = document.createElement("div");
  private _icon: QinIcon;
  private _selected = false;

  public constructor(icon: QinIcon) {
    super();
    let border = Math.round(icon.size.width / 10);
    let padding = border * 2;
    this._elMain.style.borderRadius = border + "px";
    this._elMain.style.padding = padding + "px";
    this._elMain.style.display = "flex";
    this._icon = icon;
    this._icon.install(this);
  }

  public getMain(): HTMLElement {
    return this._elMain;
  }

  public getData(): boolean {
    return this._selected;
  }

  public setData(data: boolean): void {
    this._selected = data;
    if (this._selected) {
      this._elMain.style.backgroundColor = QinSkin.styles.ColorSelected;
    } else {
      this._elMain.style.backgroundColor = "initial";
    }
  }

  public get icon(): QinIcon {
    return this._icon;
  }

  public get selected(): boolean {
    return this._selected;
  }

  public set selected(selected: boolean) {
    this.setData(selected);
  }
}