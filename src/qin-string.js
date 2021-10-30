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
exports.QinString = void 0;
var qinpel_res_1 = require("qinpel-res");
var qin_edit_1 = require("./qin-edit");
var QinString = (function (_super) {
    __extends(QinString, _super);
    function QinString() {
        var _this = _super.call(this) || this;
        _this.inputString = document.createElement("input");
        _this.inputString.type = "text";
        qinpel_res_1.QinSoul.skin.styleAsEdit(_this.inputString);
        return _this;
    }
    QinString.prototype.getMain = function () {
        return this.inputString;
    };
    QinString.prototype.getData = function () {
        return this.inputString.value;
    };
    QinString.prototype.setData = function (data) {
        this.inputString.value = data;
    };
    return QinString;
}(qin_edit_1.QinEdit));
exports.QinString = QinString;
//# sourceMappingURL=qin-string.js.map