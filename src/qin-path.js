"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinPath = void 0;
const qin_edit_1 = require("./qin-edit");
const qin_line_1 = require("./qin-line");
const qin_string_1 = require("./qin-string");
const qin_button_1 = require("./qin-button");
const qin_assets_1 = require("./qin-assets");
const qin_icon_1 = require("./qin-icon");
const qin_chooser_1 = require("./qin-chooser");
class QinPath extends qin_edit_1.QinEdit {
    constructor(nature, operation, descriptors) {
        super();
        this._qinMain = new qin_line_1.QinLine();
        this._qinPath = new qin_string_1.QinString();
        this._qinSearch = new qin_button_1.QinButton(new qin_icon_1.QinIcon(qin_assets_1.QinAsset.FaceFolder));
        this._qinChooser = new qin_chooser_1.QinChooser(nature, operation, descriptors);
        this._qinPath.install(this._qinMain);
        this.initAction();
    }
    initAction() {
        this._qinSearch.install(this._qinMain);
        const popup = this.qinpel().frame.newPopup(this._qinChooser.getMain());
        this._qinSearch.addAction((qinEvent) => {
            if (qinEvent.isPrimary()) {
                popup.show();
                const upperHeight = this._qinChooser.qinUpper.getMain().clientHeight;
                const explorerMaxHeight = popup.maxHeight - (upperHeight + 12);
                this._qinChooser.qinExplorer.putAsMaxHeight(explorerMaxHeight);
            }
        });
    }
    getMain() {
        return this._qinMain.getMain();
    }
    getData() {
        return this._qinPath.getData();
    }
    setData(data) {
        this._qinPath.setData(data);
    }
    get qinMain() {
        return this._qinMain;
    }
    get qinPath() {
        return this._qinPath;
    }
    get qinSearch() {
        return this._qinSearch;
    }
    get qinChooser() {
        return this._qinChooser;
    }
}
exports.QinPath = QinPath;
//# sourceMappingURL=qin-path.js.map