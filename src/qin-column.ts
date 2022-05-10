import { QinBase } from "./qin-base";
import { QinPanel, QinPanelSet } from "./qin-panel";

export class QinColumn extends QinPanel {
  public constructor(options?: QinPanelSet, isQindred?: string) {
    super(options, (isQindred ? isQindred + "_" : "") + "column");
    this.style.putAsFlexDirectionColumn();
    this.style.putAsFlexWrapNot();
  }

  public override put(item: QinBase): QinColumn {
    item.install(this);
    return this;
  }
}
