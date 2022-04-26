import { QinBoolean } from "./qin-boolean";
import { QinCombo } from "./qin-combo";
import { QinEdit } from "./qin-edit";
import { QinFileChooser } from "./qin-file-chooser";
import { QinFileExplorer } from "./qin-file-explorer";
import { QinFilePath } from "./qin-file-path";
import { QinInteger } from "./qin-integer";
import { QinString } from "./qin-string";

export enum QinMutants {
  BOOLEAN = "boolean",
  CHOOSER = "chooser",
  COMBO = "combo",
  EXPLORER = "explorer",
  INTEGER = "integer",
  PATH = "path",
  STRING = "string",
}

function newEdit(kind: QinMutants, options: any): QinEdit {
  switch (kind) {
    case QinMutants.BOOLEAN:
      return new QinBoolean(options);
    case QinMutants.CHOOSER:
      return new QinFileChooser(options);
    case QinMutants.COMBO:
      return new QinCombo(options);
    case QinMutants.EXPLORER:
      return new QinFileExplorer(options);
    case QinMutants.INTEGER:
      return new QinInteger(options);
    case QinMutants.PATH:
      return new QinFilePath(options);
    case QinMutants.STRING:
      return new QinString(options);
    default:
      throw new Error("Unknown kind of mutant to create.");
  }
}

export const QinMutantsArm = {
  newEdit,
};
