import { QinBase } from "./qin-base";

export class QinColumn extends QinBase {
  private _elMain = document.createElement("div");

  public constructor(options?: QinColumnSet) {
    super();
    this.initPanel();
    if (options?.initial) {
      for (const viewer of options.initial) {
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

export type QinColumnSet = {
  initial?: QinBase[];
};

const styles = {
  applyOnPanel: (el: HTMLDivElement) => {
    el.style.display = "flex";
    el.style.flexDirection = "column";
    el.style.flexWrap = "nowrap";
  },
};
