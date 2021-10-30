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
exports.QinField = void 0;
var qin_edit_1 = require("./qin-edit");
var qin_column_1 = require("./qin-column");
var qin_label_1 = require("./qin-label");
var QinField = (function (_super) {
    __extends(QinField, _super);
    function QinField(title, edit) {
        var _this = _super.call(this) || this;
        _this.qinField = new qin_column_1.QinColumn();
        _this.qinLabel = new qin_label_1.QinLabel();
        _this.qinEdit = null;
        _this.qinLabel.setTitle(title);
        _this.qinLabel.install(_this.qinField);
        _this.qinEdit = edit;
        _this.qinEdit.install(_this.qinField);
        return _this;
    }
    QinField.prototype.getMain = function () {
        return this.qinField.getMain();
    };
    QinField.prototype.getData = function () {
        return this.qinEdit.getData();
    };
    QinField.prototype.setData = function (data) {
        this.qinEdit.setData(data);
    };
    return QinField;
}(qin_edit_1.QinEdit));
exports.QinField = QinField;
//# sourceMappingURL=qin-field.js.map