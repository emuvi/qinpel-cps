import { QinBase } from "./qin-base";
import { QinPanel } from "./qin-panel";

export class QinColumn extends QinPanel {
  public constructor(options?: QinColumnSet) {
    super();
    this.style.putAsFlexDirectionColumn();
    this.style.putAsFlexWrapNot();
    if (options?.items) {
      for (const item of options.items) {
        item.install(this);
      }
    }
  }

  public put(item: QinBase): QinColumn {
    item.install(this);
    return this;
  }
}

export type QinColumnSet = {
  items?: QinBase[];
};
