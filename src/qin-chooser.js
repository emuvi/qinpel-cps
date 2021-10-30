"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinChooser = void 0;
var qinpel_res_1 = require("qinpel-res");
var qin_edit_1 = require("./qin-edit");
var qin_column_1 = require("./qin-column");
var qin_explorer_1 = require("./qin-explorer");
var qin_line_1 = require("./qin-line");
var qin_string_1 = require("./qin-string");
var qin_combo_1 = require("./qin-combo");
var qin_button_1 = require("./qin-button");
var qin_icon_1 = require("./qin-icon");
var qin_assets_1 = require("./qin-assets");
var QinChooser = (function (_super) {
    __extends(QinChooser, _super);
    function QinChooser(nature, operation, descriptors) {
        var _this = _super.call(this) || this;
        _this.qinBody = new qin_column_1.QinColumn();
        _this.qinExplorer = new qin_explorer_1.QinExplorer();
        _this.qinBottom = new qin_line_1.QinLine();
        _this.qinName = new qin_string_1.QinString();
        _this.qinExtensions = new qin_combo_1.QinCombo();
        _this.qinAction = new qin_button_1.QinButton(new qin_icon_1.QinIcon(qin_assets_1.QinAsset.FaceCog, qinpel_res_1.QinGrandeur.SMALL));
        _this.nature = nature ? nature : qinpel_res_1.QinFilesNature.BOTH;
        _this.operation = operation ? operation : qinpel_res_1.QinFilesOperation.OPEN;
        _this.descriptors = descriptors ? descriptors : [];
        _this.initBody();
        _this.initBottom();
        return _this;
    }
    QinChooser.prototype.initBody = function () {
        this.qinExplorer.install(this.qinBody);
        this.qinExplorer.setNature(this.nature);
        this.qinBottom.install(this.qinBody);
    };
    QinChooser.prototype.initBottom = function () {
        var _this = this;
        this.qinName.install(this.qinBottom);
        qinpel_res_1.QinSoul.skin.styleFlexMax(this.qinName.getMain());
        this.qinAction.addAction(function (qinEvent) {
            if (qinEvent.fromTyping && qinEvent.isEnter) {
                _this.qinExplorer.load(_this.qinName.getData(), function (loaded) {
                    _this.qinName.setData(loaded);
                });
                qinEvent.stop();
            }
        });
        this.qinExtensions.install(this.qinBottom);
        this.initExtensions();
        this.qinAction.install(this.qinBottom);
    };
    QinChooser.prototype.initExtensions = function () {
        if (this.descriptors.length == 0) {
            this.qinExtensions.addOption("All Files (*.*)", "*", true);
            this.qinExplorer.setExtensions([]);
        }
        else {
            for (var index = 0; index < this.descriptors.length; index++) {
                var descriptor = this.descriptors[index];
                this.qinExtensions.addOption(descriptor.description, descriptor.extensions.join(";"), index == 0);
            }
            this.qinExplorer.setExtensions(this.descriptors[0].extensions);
        }
    };
    QinChooser.prototype.getMain = function () {
        return this.qinBody.getMain();
    };
    QinChooser.prototype.getData = function () {
        return this.qinExplorer.getData();
    };
    QinChooser.prototype.setData = function (data) {
        this.qinExplorer.setData(data);
    };
    return QinChooser;
}(qin_edit_1.QinEdit));
exports.QinChooser = QinChooser;
//# sourceMappingURL=qin-chooser.js.map