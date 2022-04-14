import { QinBase } from "./qin-base";
import { QinPanel } from "./qin-panel";

export class QinStack extends QinBase {
  private _elMain = document.createElement("div");

  public constructor() {
    super();
  }

  public getMain(): HTMLDivElement {
    return this._elMain;
  }

  public add(panel: QinPanel) {
    panel.install(this);
    panel.style.putAsWhole();
    panel.style.putAsZIndex(this.children().length + 1);
  }
}
