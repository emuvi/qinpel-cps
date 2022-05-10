import { QinBase } from "./qin-base";
import { QinPanel, QinPanelSet } from "./qin-panel";

export class QinColumn extends QinPanel {
  public constructor(options?: QinPanelSet, isQindred?: string) {
    super(options, (isQindred ? isQindred + "_" : "") + "column");
    this.style.putAsFlexDirectionColumn();
    this.style.putAsFlexWrapNot();
    this.qinedHTML.style.minWidth = "min-content";
    this.qinedHTML.style.minHeight = "min-content";
  }

  public override put(item: QinBase): QinColumn {
    item.install(this);
    return this;
  }
}
