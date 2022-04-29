import { QinBase } from "./qin-base";
import { QinPanel, QinPanelSet } from "./qin-panel";

export class QinLine extends QinPanel {
  public constructor(options?: QinPanelSet) {
    super(options);
    this.style.putAsFlexDirectionRow();
    this.style.putAsFlexWrap();
    this.getMain().style.minWidth = "min-content";
    this.getMain().style.minHeight = "min-content";
  }

  public override put(item: QinBase): QinLine {
    item.install(this);
    return this;
  }
}
