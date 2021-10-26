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
exports.QinPanel = void 0;
var qinpel = window.frameElement.qinpel;
var qin_base_1 = require("./qin-base");
var qin_panel_styles_1 = require("./styles/qin-panel-styles");
var QinPanel = (function (_super) {
    __extends(QinPanel, _super);
    function QinPanel() {
        var _this = _super.call(this) || this;
        _this.divPanel = document.createElement("div");
        _this.initPanel();
        return _this;
    }
    QinPanel.prototype.initPanel = function () {
        qin_panel_styles_1.default.applyOnPanel(this.divPanel);
    };
    QinPanel.prototype.putAsBody = function () {
        document.body.appendChild(this.divPanel);
        qinpel.util.applyStyleAsBody(this.divPanel);
    };
    QinPanel.prototype.getMain = function () {
        return this.divPanel;
    };
    return QinPanel;
}(qin_base_1.QinBase));
exports.QinPanel = QinPanel;
//# sourceMappingURL=qin-panel.js.map