import { QinPanel } from "./qin-panel";

export class QinSpacer extends QinPanel {
  public constructor(distance?: number) {
    super();
    this.style.putAsMinSize(distance ?? 4, distance ?? 4);
  }
}
