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
exports.QinCheck = void 0;
var qin_edit_1 = require("./qin-edit");
var QinCheck = (function (_super) {
    __extends(QinCheck, _super);
    function QinCheck(title) {
        var _this = _super.call(this) || this;
        _this.inputCheck = document.createElement("input");
        _this.inputCheck.type = "checkbox";
        if (title) {
            _this.inputCheck.innerText = title;
        }
        return _this;
    }
    QinCheck.prototype.getMain = function () {
        return this.inputCheck;
    };
    QinCheck.prototype.getData = function () {
        return this.inputCheck.checked;
    };
    return QinCheck;
}(qin_edit_1.QinEdit));
exports.QinCheck = QinCheck;
//# sourceMappingURL=qin-check.js.map