"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinChooser = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_edit_1 = require("./qin-edit");
const qin_column_1 = require("./qin-column");
const qin_explorer_1 = require("./qin-explorer");
const qin_line_1 = require("./qin-line");
const qin_string_1 = require("./qin-string");
const qin_combo_1 = require("./qin-combo");
const qin_button_1 = require("./qin-button");
const qin_icon_1 = require("./qin-icon");
const qin_assets_1 = require("./qin-assets");
const qin_panel_1 = require("./qin-panel");
class QinChooser extends qin_edit_1.QinEdit {
    constructor(nature, operation, descriptors) {
        super();
        this._qinMain = new qin_column_1.QinColumn();
        this._qinUpper = new qin_line_1.QinLine();
        this._qinConfirm = new qin_button_1.QinButton(new qin_icon_1.QinIcon(qin_assets_1.QinAsset.FaceConfirm));
        this._qinName = new qin_string_1.QinString();
        this._qinExtensions = new qin_combo_1.QinCombo();
        this._qinSearch = new qin_button_1.QinButton(new qin_icon_1.QinIcon(qin_assets_1.QinAsset.FaceSearch));
        this._qinUnder = new qin_panel_1.QinPanel();
        this._qinExplorer = new qin_explorer_1.QinExplorer();
        this._nature = nature ? nature : qinpel_res_1.QinFilesNature.BOTH;
        this._operation = operation ? operation : qinpel_res_1.QinFilesOperation.OPEN;
        this._descriptors = descriptors ? descriptors : [];
        this.initMain();
        this.initUpper();
        this.initUnder();
    }
    initMain() {
        this._qinUpper.install(this._qinMain);
        this._qinUnder.install(this._qinMain);
    }
    initUpper() {
        this._qinUpper.putAsFlexMin();
        this._qinConfirm.install(this._qinUpper);
        this._qinName.install(this._qinUpper);
        qinpel_res_1.QinSoul.skin.styleFlexMax(this._qinName.getMain());
        this._qinExtensions.install(this._qinUpper);
        this.initExtensions();
        this._qinSearch.install(this._qinUpper);
        this._qinSearch.addAction((qinEvent) => {
            if (qinEvent.isPrimary()) {
                this._qinExplorer.load(this._qinName.getData(), (loaded) => {
                    this._qinName.setData(loaded);
                });
                qinEvent.stop();
            }
        });
    }
    initUnder() {
        this._qinUnder.putAsScroll();
        this._qinUnder.putAsFlexMax();
        this._qinExplorer.install(this._qinUnder);
        this._qinExplorer.nature = this._nature;
    }
    initExtensions() {
        if (this._descriptors.length == 0) {
            this._qinExtensions.addOption("All Files (*.*)", "*", true);
            this._qinExplorer.extensions = [];
        }
        else {
            for (let index = 0; index < this._descriptors.length; index++) {
                const descriptor = this._descriptors[index];
                this._qinExtensions.addOption(descriptor.description, descriptor.extensions.join(";"), index == 0);
            }
            this._qinExplorer.extensions = this._descriptors[0].extensions;
        }
    }
    getMain() {
        return this._qinMain.getMain();
    }
    getData() {
        return this._qinExplorer.getData();
    }
    setData(data) {
        this._qinExplorer.setData(data);
    }
    get qinMain() {
        return this._qinMain;
    }
    get qinUpper() {
        return this._qinUpper;
    }
    get qinConfirm() {
        return this._qinConfirm;
    }
    get qinName() {
        return this._qinName;
    }
    get qinExtensions() {
        return this._qinExtensions;
    }
    get qinSearch() {
        return this._qinSearch;
    }
    get qinUnder() {
        return this._qinUnder;
    }
    get qinExplorer() {
        return this._qinExplorer;
    }
    get nature() {
        return this._nature;
    }
    get operation() {
        return this._operation;
    }
    get descriptors() {
        return this._descriptors;
    }
}
exports.QinChooser = QinChooser;
//# sourceMappingURL=qin-chooser.js.map