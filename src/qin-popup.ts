import { QinFramePopup } from "qinpel-app/types/qin-frame";
import { QinBounds, QinFilesDescriptor, QinFilesNature, QinFilesOperation } from "qinpel-res";
import { QinAsset } from "./qin-assets";
import { QinButton } from "./qin-button";
import { QinFileChooser } from "./qin-file-chooser";
import { QinEdit } from "./qin-edit";
import { QinIcon } from "./qin-icon";
import { QinLine } from "./qin-line";
import { QinString } from "./qin-string";
import { QinBase } from "./qin-base";
import { QinTools } from "./qin-tools";
import { QinPanel } from "./qin-panel";

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
