import { QinBase } from "./qin-base";

export class QinPanel extends QinBase {
  private _elMain = document.createElement("div");

  public constructor() {
    super();
  }

  public getMain(): HTMLDivElement {
    return this._elMain;
  }
}
