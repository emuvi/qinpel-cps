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
    function QinIcon(asset, size, fill) {
        var _this = _super.call(this) || this;
        _this.elModel = null;
        var assetUrl = (0, qin_assets_1.qinAssetUrl)(asset);
        _this.initImage(assetUrl, size);
        return _this;
    }
    QinIcon.prototype.initVector = function (assetUrl, size, fill) {
        var obj = document.createElement("embed");
        obj.src = assetUrl;
        obj.type = "image/svg+xml";
        this.applySize(obj, size);
        if (fill) {
            obj.style.fill = fill;
        }
        this.elModel = obj;
    };
    QinIcon.prototype.initImage = function (assetUrl, size) {
        var img = document.createElement("img");
        img.src = assetUrl;
        this.applySize(img, size);
        this.elModel = img;
    };
    QinIcon.prototype.applySize = function (el, size) {
        if (size) {
            if (size instanceof qinpel_res_1.QinDimension) {
                el.style.width = size.width + "px";
                el.style.height = size.height + "px";
            }
            else {
                var dim = qinpel_res_1.QinSoul.skin.getIconDimension(size);
                el.style.width = dim.width + "px";
                el.style.height = dim.height + "px";
            }
        }
    };
    QinIcon.prototype.getMain = function () {
        return this.elModel;
    };
    return QinIcon;
}(qin_base_1.QinBase));
exports.QinIcon = QinIcon;
//# sourceMappingURL=qin-icon.js.map