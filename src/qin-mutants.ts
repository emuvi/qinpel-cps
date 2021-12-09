import { QinEdit } from "./qin-edit"
import { QinBoolean } from "./qin-boolean"
import { QinChooser } from "./qin-chooser"
import { QinCombo } from "./qin-combo"
import { QinExplorer } from "./qin-explorer"
import { QinInteger } from "./qin-integer"
import { QinPath } from "./qin-path"
import { QinString } from "./qin-string"

export enum QinMutants {
    BOOLEAN = "boolean",
    CHOOSER = "chooser",
    COMBO = "combo",
    EXPLORER = "explorer",
    INTEGER = "integer",
    PATH = "path",
    STRING = "string",
}

function create(kind: QinMutants, options: any): QinEdit {
    switch (kind) {
        case QinMutants.BOOLEAN:
            return new QinBoolean(options);
        case QinMutants.CHOOSER:
            return new QinChooser(options);
        case QinMutants.COMBO:
            return new QinCombo(options);
        case QinMutants.EXPLORER:
            return new QinExplorer(options);
        case QinMutants.INTEGER:
            return new QinInteger(options);
        case QinMutants.PATH:
            return new QinPath(options);
        case QinMutants.STRING:
            return new QinString(options);
        default:
            throw new Error("Unknown kind of mutant to create.");
    }
}

export const QinMutantsArm = {
    create
};