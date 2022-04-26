import { QinBase } from "./qin-base";
import { QinPanel, QinPanelSet } from "./qin-panel";

export class QinScroll extends QinPanel {
  public constructor(options?: QinPanelSet) {
    super(options);
    this.style.putAsScroll();
  }

  public override put(item: QinBase): QinScroll {
    item.install(this);
    return this;
  }
}
