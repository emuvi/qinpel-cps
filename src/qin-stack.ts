import { QinBase } from "./qin-base";
import { QinPanel } from "./qin-panel";

export class QinStack extends QinPanel {
  public stack(qinComp: QinBase) {
    this.children().forEach((child) => {
      child.unDisplay();
    });
    qinComp.install(this);
  }

  public show(qinComp: QinBase) {
    this.children().forEach((child) => {
      if (child === qinComp) {
        child.reDisplay();
      } else {
        child.unDisplay();
      }
    });
  }
}
