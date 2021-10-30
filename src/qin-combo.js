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
exports.QinCombo = void 0;
var qinpel_res_1 = require("qinpel-res");
var qin_edit_1 = require("./qin-edit");
var QinCombo = (function (_super) {
    __extends(QinCombo, _super);
    function QinCombo() {
        var _this = _super.call(this) || this;
        _this.selectCombo = document.createElement("select");
        qinpel_res_1.QinSoul.skin.styleAsEdit(_this.selectCombo);
        return _this;
    }
    QinCombo.prototype.getMain = function () {
        return this.selectCombo;
    };
    QinCombo.prototype.getData = function () {
        return this.selectCombo.value;
    };
    QinCombo.prototype.setData = function (data) {
        this.selectCombo.value = data;
    };
    QinCombo.prototype.addOption = function (title, value, selected) {
        var option = document.createElement("option");
        option.text = title;
        option.value = value;
        if (selected != undefined && selected != null) {
            option.selected = selected;
        }
        this.selectCombo.appendChild(option);
    };
    return QinCombo;
}(qin_edit_1.QinEdit));
exports.QinCombo = QinCombo;
//# sourceMappingURL=qin-combo.js.map