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
exports.QinIcon = void 0;
var qin_base_1 = require("./qin-base");
var qin_assets_1 = require("./qin-assets");
var qinpel_res_1 = require("qinpel-res");
var QinIcon = (function (_super) {
    __extends(QinIcon, _super);
    function QinIcon(asset, size) {
        var _this = _super.call(this) || this;
        _this.imgIcon = document.createElement("img");
        _this.imgIcon.src = (0, qin_assets_1.qinAssetUrl)(asset);
        qinpel_res_1.QinSoul.skin.applyDimensionSize(_this.imgIcon, size);
        return _this;
    }
    QinIcon.prototype.getMain = function () {
        return this.imgIcon;
    };
    return QinIcon;
}(qin_base_1.QinBase));
exports.QinIcon = QinIcon;
//# sourceMappingURL=qin-icon.js.map