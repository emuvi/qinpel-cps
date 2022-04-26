import { QinFramePopup } from "qinpel-app/types/qin-frame";
import { QinBounds } from "qinpel-res";
import { QinBase } from "./qin-base";
import { QinPanel } from "./qin-panel";
import { QinTools } from "./qin-tools";

export class QinPopup {
  private _qinMain: QinFramePopup;

  public constructor(contents: QinPanel) {
    this._qinMain = QinTools.qinpel().frame.newPopup(contents.getMain());
  }

  public show() {
    this._qinMain.show();
  }

  public showOnParent(parent: QinBase) {
    this._qinMain.showOnParent(parent.getMain());
  }

  public showOnBounds(bounds: QinBounds) {
    this._qinMain.showOnBounds(bounds);
  }

  public close() {
    this._qinMain.close();
  }
}
