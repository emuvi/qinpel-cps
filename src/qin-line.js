"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinLine = void 0;
const qin_base_1 = require("./qin-base");
class QinLine extends qin_base_1.QinBase {
    constructor() {
        super();
        this._divMain = document.createElement("div");
        this.initPanel();
    }
    initPanel() {
        styles.applyOnPanel(this._divMain);
    }
    getMain() {
        return this._divMain;
    }
    get divMain() {
        return this._divMain;
    }
}
exports.QinLine = QinLine;
const styles = {
    applyOnPanel: (el) => {
        el.style.display = "flex";
        el.style.flexDirection = "row";
        el.style.flexWrap = "wrap";
    }
};
//# sourceMappingURL=qin-line.js.map