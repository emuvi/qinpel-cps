import { QinJobberPopup } from "qinpel-app/types/qin-jobber-popup";
import {
  QinFilesDescriptor,
  QinFilesNature,
  QinFilesOperation,
  QinNature,
} from "qinpel-res";
import { QinAsset } from "./qin-assets";
import { QinButton } from "./qin-button";
import { QinEdit } from "./qin-edit";
import { QinFilePick } from "./qin-file-pick";
import { QinIcon } from "./qin-icon";
import { QinLine } from "./qin-line";
import { QinString } from "./qin-string";

export class QinFilePath extends QinEdit {
  private _qinPath = new QinString();
  private _qinSearch = new QinButton({
    icon: new QinIcon(QinAsset.FaceFolder),
  });
  private _qinPicker: QinFilePick;
  private _qinPopup: QinJobberPopup;
  private _readOnly = false;

  public constructor(options?: QinFilePathSet, isQindred?: string) {
    super((isQindred ? isQindred + "_" : "") + "file-path", new QinLine());
    this._qinPicker = new QinFilePick({
      nature: options?.nature,
      operation: options?.operation,
      descriptors: options?.descriptors,
      singleSelection: true,
    });
    this._qinPopup = this.qinpel.jobbed.newPopup(
      this._qinPicker.castedQine().castedQine()
    );
    this._qinPath.install(this.qinedBase);
    this._qinSearch.install(this.qinedBase);
    this._qinSearch.addAction((qinEvent) => {
      if (qinEvent.isMain) {
        this._qinPopup.show();
        const upperHeight = this._qinPicker.qinUpper.qinedHTML.clientHeight;
        const explorerMaxHeight = this._qinPopup.maxHeight - (upperHeight + 12);
        this._qinPicker.qinExplorer.style.putAsMaxHeight(explorerMaxHeight);
      }
    });
    this._qinPicker.addChosen((chosen) => {
      if (chosen && chosen.length > 0) {
        this._qinPath.setData(chosen[0]);
      }
      this._qinPopup.close();
    });
    if (options?.initial) {
      this.setData(options.initial);
    }
    if (options?.readOnly) {
      this.turnReadOnly();
    }
  }

  public override castedQine(): QinLine {
    return this.qinedBase as QinLine;
  }

  public getNature(): QinNature {
    return QinNature.CHARS;
  }

  public override getData(): string {
    return this._qinPath.getData();
  }

  public override setData(data: string) {
    this._qinPath.setData(data);
  }

  public override turnReadOnly(): void {
    this._readOnly = true;
    this._qinPath.turnReadOnly();
  }

  public override turnEditable(): void {
    this._readOnly = false;
    this._qinPath.turnEditable();
  }

  public override isEditable(): boolean {
    return !this._readOnly;
  }

  public get qinPath(): QinString {
    return this._qinPath;
  }

  public get qinSearch(): QinButton {
    return this._qinSearch;
  }

  public get qinChooser(): QinFilePick {
    return this._qinPicker;
  }

  public get qinPopup(): QinJobberPopup {
    return this._qinPopup;
  }
}

export type QinFilePathSet = {
  initial?: string;
  nature?: QinFilesNature;
  operation?: QinFilesOperation;
  descriptors?: QinFilesDescriptor[];
  readOnly?: boolean;
};
