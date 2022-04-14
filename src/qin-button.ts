import { QinSkin } from "qinpel-res";
import { QinBase } from "./qin-base";
import { QinIcon } from "./qin-icon";
import { QinLabel } from "./qin-label";

export class QinButton extends QinBase {
  private _elMain = document.createElement("button");
  private _qinIcon: QinIcon = null;
  private _qinLabel: QinLabel = null;

  public constructor(options?: QinButtonSet) {
    super();
    styles.applyOnButton(this._elMain);
    if (options?.icon) {
      this._qinIcon = options.icon;
      this._qinIcon.install(this);
    }
    if (options?.label) {
      this._qinLabel = options.label;
      this._qinLabel.install(this);
    }
  }

  public getMain(): HTMLButtonElement {
    return this._elMain;
  }

  public get qinIcon(): QinIcon {
    return this._qinIcon;
  }

  public get qinLabel(): QinLabel {
    return this._qinLabel;
  }
}

export type QinButtonSet = {
  icon?: QinIcon;
  label?: QinLabel;
};

const styles = {
  applyOnButton: (el: HTMLButtonElement) => {
    QinSkin.styleAsEdit(el);
    el.style.display = "flex";
    el.style.flexDirection = "row";
    el.style.alignItems = "center";
  },
};
