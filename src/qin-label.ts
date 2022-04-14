import { QinBase } from "./qin-base";

export class QinLabel extends QinBase {
  private _elMain = document.createElement("span");

  public constructor(title?: string) {
    super();
    if (title) {
      this._elMain.textContent = title;
    }
  }

  public getMain(): HTMLSpanElement {
    return this._elMain;
  }

  public setTitle(title: string) {
    this._elMain.textContent = title;
  }

  public getTitle(): string {
    return this._elMain.textContent;
  }
}
