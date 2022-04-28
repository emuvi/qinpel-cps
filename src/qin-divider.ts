import { QinBase } from "./qin-base";

export class QinDivider extends QinBase {
  private _elMain = document.createElement("div");
  private _isHorizontal = true;

  public constructor(options?: QinDividerSet) {
    super();
    if (options?.horizontal) {
      this.setHorizontal();
    } else {
      this.setVertical();
    }
  }

  public override getMain(): HTMLDivElement {
    return this._elMain;
  }

  public setHorizontal() {
    this._elMain.style.minWidth = "initial";
    this._elMain.style.maxWidth = "initial";
    this._elMain.style.minHeight = "6px";
    this._elMain.style.maxHeight = "6px";
    this._elMain.style.height = "6px";
    this._elMain.style.background =
      "linear-gradient(180deg, rgba(255,250,239,0.1) 0%, rgba(255,250,239,0.1) 26%, rgba(24,0,39,0.8) 42%, rgba(24,0,39,0.8) 58%, rgba(255,250,239,0.1) 74%, rgba(255,250,239,0.1) 100%)";
    this._isHorizontal = true;
  }

  public setVertical() {
    this._elMain.style.flexDirection = "row";
    this._elMain.style.minWidth = "6px";
    this._elMain.style.maxWidth = "6px";
    this._elMain.style.minHeight = "initial";
    this._elMain.style.maxHeight = "initial";
    this._elMain.style.width = "6px";
    this._elMain.style.background =
      "linear-gradient(90deg, rgba(255,250,239,0.1) 0%, rgba(255,250,239,0.1) 26%, rgba(24,0,39,0.8) 42%, rgba(24,0,39,0.8) 58%, rgba(255,250,239,0.1) 74%, rgba(255,250,239,0.1) 100%)";
    this._isHorizontal = false;
  }

  public get isHorizontal(): boolean {
    return this._isHorizontal;
  }
}

export type QinDividerSet = {
  horizontal?: boolean;
};
