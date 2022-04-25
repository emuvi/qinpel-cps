import { QinBase } from "./qin-base";
import { QinPanel, QinPanelSet } from "./qin-panel";

export class QinRow extends QinPanel {
  public constructor(options?: QinPanelSet) {
    super(options);
    this.style.putAsFlexDirectionRow();
    this.style.putAsFlexWrapNot();
  }

  public put(item: QinBase): QinRow {
    item.install(this);
    return this;
  }
}
