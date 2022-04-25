import { QinBase } from "./qin-base";
import { QinPanel, QinPanelSet } from "./qin-panel";

export class QinColumn extends QinPanel {
  public constructor(options?: QinPanelSet) {
    super(options);
    this.style.putAsFlexDirectionColumn();
    this.style.putAsFlexWrapNot();
  }

  public put(item: QinBase): QinColumn {
    item.install(this);
    return this;
  }
}
