import { QinSkin } from "qinpel-res";
import { QinBase } from "./qin-base";
import { QinIcon } from "./qin-icon";

export class QinIconCell extends QinBase {
  private _elMain = document.createElement("div");
  private _qinIcon: QinIcon;
  private _selected = false;

  public constructor(icon: QinIcon) {
    super();
    let border = Math.round(icon.size.width / 10);
    let padding = border * 2;
    this._elMain.style.borderRadius = border + "px";
    this._elMain.style.padding = padding + "px";
    this._elMain.style.display = "flex";
    this._qinIcon = icon;
    this._qinIcon.install(this);
  }

  public override getMain(): HTMLElement {
    return this._elMain;
  }

  public get qinIcon(): QinIcon {
    return this._qinIcon;
  }

  public get selected(): boolean {
    return this._selected;
  }

  public set selected(selected: boolean) {
    this._selected = selected;
    if (this._selected) {
      this._elMain.style.backgroundColor = QinSkin.styles.ColorSelected;
    } else {
      this._elMain.style.backgroundColor = "initial";
    }
  }
}