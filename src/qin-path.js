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
exports.QinPath = void 0;
var qin_edit_1 = require("./qin-edit");
var qin_line_1 = require("./qin-line");
var qin_string_1 = require("./qin-string");
var qin_button_1 = require("./qin-button");
var qin_assets_1 = require("./qin-assets");
var qin_icon_1 = require("./qin-icon");
var qin_chooser_1 = require("./qin-chooser");
var qinpel_res_1 = require("qinpel-res");
var QinPath = (function (_super) {
    __extends(QinPath, _super);
    function QinPath() {
        var _this = _super.call(this) || this;
        _this.qinLine = new qin_line_1.QinLine();
        _this.qinPath = new qin_string_1.QinString();
        _this.qinAction = new qin_button_1.QinButton(new qin_icon_1.QinIcon(qin_assets_1.QinAsset.FaceCog, qinpel_res_1.QinGrandeur.SMALL));
        _this.qinChooser = new qin_chooser_1.QinChooser();
        _this.qinPath.install(_this.qinLine);
        _this.initAction();
        return _this;
    }
    QinPath.prototype.initAction = function () {
        this.qinAction.install(this.qinLine);
        var popup = this.qinpel().frame.newPopup(this.qinAction.getMain(), this.qinChooser.getMain());
        this.qinAction.addAction(function () {
            popup.toggle();
        });
    };
    QinPath.prototype.getMain = function () {
        return this.qinLine.getMain();
    };
    QinPath.prototype.getData = function () {
        return this.qinPath.getData();
    };
    QinPath.prototype.setData = function (data) {
        this.qinPath.setData(data);
    };
    return QinPath;
}(qin_edit_1.QinEdit));
exports.QinPath = QinPath;
//# sourceMappingURL=qin-path.js.map