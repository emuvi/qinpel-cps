import { QinPanel } from "./qin-panel";

export class QinSpacer extends QinPanel {
  public constructor(distance?: number, isQindred?: string) {
    super(null, (isQindred ? isQindred + "_" : "") + "spacer");
    this.style.putAsMinSize(distance ?? 4, distance ?? 4);
  }
}
