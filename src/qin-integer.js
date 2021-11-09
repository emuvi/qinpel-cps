"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinInteger = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_edit_1 = require("./qin-edit");
class QinInteger extends qin_edit_1.QinEdit {
    constructor() {
        super();
        this._inputMain = document.createElement("input");
        this._inputMain.type = "number";
        qinpel_res_1.QinSoul.skin.styleAsEdit(this._inputMain);
        this._inputMain.style.width = "120px";
        this._inputMain.addEventListener("focusout", () => {
            this.setData(this.getData());
        });
    }
    getMain() {
        return this._inputMain;
    }
    getData() {
        const value = this._inputMain.value;
        if (value == null || value == undefined || value.length == 0) {
            return null;
        }
        else {
            return parseInt(this._inputMain.value, 10);
        }
    }
    setData(data) {
        if (data == null || data == undefined) {
            this._inputMain.value = "";
        }
        else {
            this._inputMain.value = (data | 0).toString();
        }
    }
    get inputMain() {
        return this._inputMain;
    }
}
exports.QinInteger = QinInteger;
//# sourceMappingURL=qin-integer.js.map