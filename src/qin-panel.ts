import { QinBase } from "./qin-base";

export class QinPanel extends QinBase {
  private _elMain = document.createElement("div");

  public constructor(options?: QinPanelSet) {
    super();
    this.style.putAsDisplayFlex();
    if (options?.items) {
      for (const item of options.items) {
        item.install(this);
      }
    }
  }

  public getMain(): HTMLDivElement {
    return this._elMain;
  }

  public put(item: QinBase): QinPanel {
    item.install(this);
    return this;
  }
}

export type QinPanelSet = {
  items?: QinBase[];
};