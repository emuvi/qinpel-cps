import { QinBase } from "./qin-base";
import { QinPanel } from "./qin-panel";

export class QinLine extends QinPanel {
  public constructor(options?: QinLineSet) {
    super();
    this.style.putAsFlexDirectionRow();
    this.style.putAsFlexWrap();
    if (options?.items) {
      for (const item of options.items) {
        item.install(this);
      }
    }
  }

  public put(item: QinBase): QinLine {
    item.install(this);
    return this;
  }
}

export type QinLineSet = {
  items?: QinBase[];
};
