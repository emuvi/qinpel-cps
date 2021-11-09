"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinBoolean = void 0;
const qin_assets_1 = require("./qin-assets");
const qin_edit_1 = require("./qin-edit");
const qin_icon_1 = require("./qin-icon");
const qin_label_1 = require("./qin-label");
const qin_line_1 = require("./qin-line");
class QinBoolean extends qin_edit_1.QinEdit {
    constructor() {
        super();
        this._qinMain = new qin_line_1.QinLine();
        this._qinSpan = new qin_label_1.QinLabel();
        this._qinIcon = new qin_icon_1.QinIcon(qin_assets_1.QinAsset.FaceCircle);
        this.value = false;
        this._qinSpan.install(this._qinMain);
        this._qinIcon.install(this._qinSpan);
        this._qinSpan.putAsEdit();
        this._qinSpan.putAsDisplayFlex();
        this._qinSpan.putAsCentered();
        this._qinSpan.addAction(qinEvent => {
            if (qinEvent.isPrimary()) {
                this.toggle();
            }
        });
    }
    getMain() {
        return this._qinMain.getMain();
    }
    getData() {
        return this.value;
    }
    setData(data) {
        this.value = data;
        this.updateIcon();
    }
    updateIcon() {
        if (this.value) {
            this._qinIcon.change(qin_assets_1.QinAsset.FaceConfirm);
        }
        else {
            this._qinIcon.change(qin_assets_1.QinAsset.FaceCircle);
        }
    }
    toggle() {
        this.value = !this.value;
        this.updateIcon();
    }
}
exports.QinBoolean = QinBoolean;
//# sourceMappingURL=qin-boolean.js.map