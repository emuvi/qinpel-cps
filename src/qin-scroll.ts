import { QinBase } from "./qin-base";
import { QinPanel, QinPanelSet } from "./qin-panel";

export class QinScroll extends QinPanel {
  public constructor(options?: QinPanelSet, isQindred?: string) {
    super(options, (isQindred ? isQindred + "_" : "") + "scroll");
    this.style.putAsScroll();
  }

  public override put(item: QinBase): QinScroll {
    item.install(this);
    return this;
  }
}
