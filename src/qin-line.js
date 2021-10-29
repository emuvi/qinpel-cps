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
exports.QinLine = void 0;
var qin_base_1 = require("./qin-base");
var qinpel_res_1 = require("qinpel-res");
var qin_line_styles_1 = require("./styles/qin-line-styles");
var QinLine = (function (_super) {
    __extends(QinLine, _super);
    function QinLine() {
        var _this = _super.call(this) || this;
        _this.divPanel = document.createElement("div");
        _this.initPanel();
        return _this;
    }
    QinLine.prototype.initPanel = function () {
        qin_line_styles_1.default.applyOnPanel(this.divPanel);
    };
    QinLine.prototype.putAsBody = function () {
        document.body.appendChild(this.divPanel);
        qinpel_res_1.QinSoul.skin.applyStyleAsBody(this.divPanel);
    };
    QinLine.prototype.getMain = function () {
        return this.divPanel;
    };
    return QinLine;
}(qin_base_1.QinBase));
exports.QinLine = QinLine;
//# sourceMappingURL=qin-line.js.map