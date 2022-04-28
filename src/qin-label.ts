import { QinBase } from "./qin-base";

export class QinLabel extends QinBase {
  private _elMain = document.createElement("label");

  public constructor(title?: string) {
    super();
    if (title) {
      this._elMain.textContent = title;
    }
  }

  public override getMain(): HTMLLabelElement {
    return this._elMain;
  }

  public get title(): string {
    return this._elMain.textContent;
  }

  public set title(title: string) {
    this._elMain.textContent = title;
  }

  public get link(): string {
    return this._elMain.getAttribute("for");
  }

  public set link(name: string) {
    this._elMain.setAttribute("for", name);
  }

  public qinLink(qinComp: QinBase) {
    this.link = qinComp.mustId();
  }
}
