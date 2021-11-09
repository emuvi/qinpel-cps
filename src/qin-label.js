"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinLabel = void 0;
const qin_base_1 = require("./qin-base");
class QinLabel extends qin_base_1.QinBase {
    constructor(title) {
        super();
        this._spanMain = document.createElement("span");
        if (title) {
            this._spanMain.textContent = title;
        }
    }
    getMain() {
        return this._spanMain;
    }
    setTitle(title) {
        this._spanMain.textContent = title;
    }
    getTitle() {
        return this._spanMain.textContent;
    }
    get spanMain() {
        return this._spanMain;
    }
}
exports.QinLabel = QinLabel;
//# sourceMappingURL=qin-label.js.map