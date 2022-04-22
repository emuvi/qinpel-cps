import { QinBase } from "./qin-base";

export class QinSplitter extends QinBase {
  private _elMain = document.createElement("div");
  private _elSideA = document.createElement("div");
  private _elMover = document.createElement("div");
  private _elGrowA = document.createElement("div");
  private _elGrowB = document.createElement("div");
  private _elSideB = document.createElement("div");

  private _isHorizontal = true;

  public constructor(options?: QinSplitterSet) {
    super();
    this._elMain.appendChild(this._elSideA);
    this._elMain.appendChild(this._elMover);
    this._elMover.appendChild(this._elGrowA);
    this._elMover.appendChild(this._elGrowB);
    this._elMain.appendChild(this._elSideB);
    this._elMain.style.display = "flex";
    this._elMain.style.flexWrap = "nowrap";
    this._elSideA.style.display = "flex";
    this._elSideA.style.flexWrap = "nowrap";
    this._elSideA.style.overflow = "auto";
    this._elMover.style.display = "flex";
    this._elMover.style.flexWrap = "nowrap";
    this._elMover.style.borderRadius = "12px";
    this._elMover.style.border = "1px solid rgba(255,250,239,0.1)";
    this._elMover.style.overflow = "hidden";	
    this._elMover.style.flex = "0";
    this._elGrowA.style.flex = "1";
    this._elGrowB.style.flex = "1";
    this._elSideB.style.display = "flex";
    this._elSideB.style.flexWrap = "nowrap";
    this._elSideB.style.overflow = "auto";

    let balance = (grow: HTMLDivElement, fall: HTMLDivElement) => {
      let related = this._isHorizontal ? "width" : "height";
      let growAt = parseInt(grow.style[related]);
      let fallAt = parseInt(fall.style[related]);
      if (fallAt <= 10) return;
      grow.style[related] = (growAt + 10) + "%";
      fall.style[related] = (fallAt - 10) + "%";
    };
    this._elGrowA.addEventListener("mousedown", (_) => balance(this._elSideA, this._elSideB));
    this._elGrowA.addEventListener("touchstart", (_) => balance(this._elSideA, this._elSideB));
    this._elGrowB.addEventListener("mousedown", (_) => balance(this._elSideB, this._elSideA));
    this._elGrowB.addEventListener("touchstart", (_) => balance(this._elSideB, this._elSideA));

    if (options) {
      if (options.sideA) {
        this._elSideA.appendChild(options.sideA.getMain());
      }
      if (options.sideB) {
        this._elSideB.appendChild(options.sideB.getMain());
      }
    }

    this.setHorizontal();
  }

  public getMain(): HTMLDivElement {
    return this._elMain;
  }

  public setHorizontal() {
    this._elMain.style.flexDirection = "row";
    this._elMover.style.flexDirection = "row";
    this._elSideA.style.width = "50%";
    this._elSideA.style.height = "100%";
    this._elSideB.style.width = "50%";
    this._elSideB.style.height = "100%";
    this._elMover.style.minWidth = "24px";
    this._elMover.style.maxWidth = "24px";
    this._elMover.style.minHeight = "initial";
    this._elMover.style.maxHeight = "initial";
    this._elMover.style.width = "24px";
    this._elMover.style.height = "100%";
    this._elGrowA.style.background = "linear-gradient(90deg, rgba(255,250,239,0.1) 0%, rgba(255,250,239,0.1) 84%, rgba(24,0,39,0.8) 98%, rgba(24,0,39,0.8) 100%)";
    this._elGrowB.style.background = "linear-gradient(270deg, rgba(255,250,239,0.1) 0%, rgba(255,250,239,0.1) 84%, rgba(24,0,39,0.8) 98%, rgba(24,0,39,0.8) 100%)";
    this._isHorizontal = true;
  }

  public setVertical() {
    this._elMain.style.flexDirection = "column";
    this._elMover.style.flexDirection = "column";
    this._elSideA.style.width = "100%";
    this._elSideA.style.height = "50%";
    this._elSideB.style.width = "100%";
    this._elSideB.style.height = "50%";
    this._elMover.style.minWidth = "initial";
    this._elMover.style.maxWidth = "initial";
    this._elMover.style.minHeight = "24px";
    this._elMover.style.maxHeight = "24px";
    this._elMover.style.width = "100%";
    this._elMover.style.height = "24px";
    this._elGrowA.style.background = "linear-gradient(180deg, rgba(255,250,239,0.1) 0%, rgba(255,250,239,0.1) 84%, rgba(24,0,39,0.8) 98%, rgba(24,0,39,0.8) 100%)";
    this._elGrowB.style.background = "linear-gradient(0deg, rgba(255,250,239,0.1) 0%, rgba(255,250,239,0.1) 84%, rgba(24,0,39,0.8) 98%, rgba(24,0,39,0.8) 100%)";
    this._isHorizontal = false;
  }

  public setSideA(side: QinBase) {
    this._elSideA.innerHTML = "";
    this._elSideA.appendChild(side.getMain());
  }

  public setSideB(side: QinBase) {
    this._elSideB.innerHTML = "";
    this._elSideB.appendChild(side.getMain());
  }
}

export type QinSplitterSet = {
  sideA?: QinBase;
  sideB?: QinBase;
};
