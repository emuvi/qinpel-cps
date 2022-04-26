import { QinBase } from "./qin-base";

export class QinLabel extends QinBase {
  private _elMain = document.createElement("span");

  public constructor(title?: string) {
    super();
    if (title) {
      this._elMain.textContent = title;
    }
  }

  public override getMain(): HTMLSpanElement {
    return this._elMain;
  }

  public get title(): string {
    return this._elMain.textContent;
  }

  public set title(title: string) {
    this._elMain.textContent = title;
  }
}
