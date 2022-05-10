import { QinSkin } from "qinpel-res";
import { QinBase } from "./qin-base";
import { QinIcon } from "./qin-icon";

export class QinIconCell extends QinBase {
  private _qinIcon: QinIcon;
  private _selected = false;

  public constructor(icon: QinIcon, isQindred?: string) {
    super(
      (isQindred ? isQindred + "_" : "") + "icon-cell",
      document.createElement("div")
    );
    let border = Math.round(icon.size.width / 10);
    let padding = border * 2;
    this.qinedHTML.style.borderRadius = border + "px";
    this.qinedHTML.style.padding = padding + "px";
    this.qinedHTML.style.display = "flex";
    this._qinIcon = icon;
    this._qinIcon.install(this);
  }

  public override castedQine(): HTMLDivElement {
    return this.qinedHTML as HTMLDivElement;
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
      this.qinedHTML.style.backgroundColor = QinSkin.styles.ColorSelected;
    } else {
      this.qinedHTML.style.backgroundColor = "initial";
    }
  }
}
