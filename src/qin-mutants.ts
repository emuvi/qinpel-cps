import { QinBoolean } from "./qin-boolean";
import { QinCombo } from "./qin-combo";
import { QinEdit } from "./qin-edit";
import { QinFilePath } from "./qin-file-path";
import { QinFilePick } from "./qin-file-pick";
import { QinFileView } from "./qin-file-view";
import { QinIconPick } from "./qin-icon-pick";
import { QinInteger } from "./qin-integer";
import { QinString } from "./qin-string";
import { QinTool } from "./qin-tool";

export enum QinMutants {
  BOOLEAN = "boolean",
  INTEGER = "integer",
  STRING = "string",
  COMBO = "combo",
  ICON_PICK = "icon-pick",
  FILE_PATH = "file_path",
  FILE_PICK = "file_pick",
  FILE_VIEW = "file_view",
}

function newEdit(kind: QinMutants, options: any): QinEdit<any> {
  switch (kind) {
    case QinMutants.BOOLEAN:
      return new QinBoolean(options);
    case QinMutants.INTEGER:
      return new QinInteger(options);
    case QinMutants.STRING:
      return new QinString(options);
    case QinMutants.COMBO:
      return new QinCombo(options);
    case QinMutants.ICON_PICK:
      return new QinIconPick(options);
    case QinMutants.FILE_PATH:
      return new QinFilePath(options);
    case QinMutants.FILE_PICK:
      return new QinFilePick(options);
    case QinMutants.FILE_VIEW:
      return new QinFileView(options);
    default:
      throw new Error(QinTool.qinpel.tr("Unknown kind of mutant to create: ") + kind);
  }
}

export const QinMutantsArm = {
  newEdit,
};
