import { QinBase } from "./qin-base";

export class QinSplitter extends QinBase {
  private _elMain = document.createElement("div");
  private _elSideA = document.createElement("div");
  private _elMover = document.createElement("div");
  private _elSideB = document.createElement("div");

  public constructor() {
    super();
    this._elMain.appendChild(this._elSideA);
    this._elMain.appendChild(this._elMover);
    this._elMain.appendChild(this._elSideB);
    this._elMain.style.display = "flex";
    this._elSideA.style.display = "flex";
    this._elSideA.style.position = "relative";
    this._elSideA.style.overflow = "auto";
    this._elSideB.style.display = "flex";
    this._elSideB.style.position = "relative";
    this._elSideB.style.overflow = "auto";
  }

  public getMain(): HTMLDivElement {
    return this._elMain;
  }

  public setVertical() {
    this._elMain.style.flexDirection = "column";
  }

  public setHorizontal() {
    this._elMain.style.flexDirection = "row";
  }
}
