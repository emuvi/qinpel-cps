import { QinBase } from "./qin-base";

export class QinLine extends QinBase {
  private _elMain = document.createElement("div");

  public constructor(options?: QinLineSet) {
    super();
    this.initPanel();
    if (options?.initial) {
      for (let viewer of options.initial) {
        viewer.install(this);
      }
    }
  }

  private initPanel() {
    styles.applyOnPanel(this._elMain);
  }

  public getMain(): HTMLDivElement {
    return this._elMain;
  }
}

export type QinLineSet = {
  initial?: QinBase[];
};

const styles = {
  applyOnPanel: (el: HTMLDivElement) => {
    el.style.display = "flex";
    el.style.flexDirection = "row";
    el.style.flexWrap = "wrap";
  },
};
