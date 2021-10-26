"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qin_common_styles_1 = require("./qin-common-styles");
exports.default = {
    applyOnDivBody: function (el) {
        qin_common_styles_1.default.applyOnEdit(el);
        el.style.overflow = "auto";
        el.style.minHeight = "84px";
        el.style.minWidth = "140px";
        el.tabIndex = 0;
    },
    applyOnDivItem: function (el) {
        el.style.display = "inline-block";
        el.style.padding = "9px";
        el.style.margin = "2px";
        el.style.border = "1px solid #ffffff00";
        el.style.borderRadius = "2px";
        el.addEventListener("focus", function () {
            el.style.outline = "none";
            el.style.border = "1px solid #ae0000";
        });
        el.addEventListener("focusout", function () {
            el.style.outline = "none";
            el.style.border = "1px solid #ffffff00";
        });
    },
    applyOnDivItemBody: function (el) {
        el.style.display = "flex";
        el.style.flexDirection = "column";
        el.style.width = "120px";
    },
    applyOnSpanIcon: function (el) {
        el.style.textAlign = "center";
    },
    applyOnSpanText: function (el) {
        el.style.textAlign = "center";
        el.style.wordWrap = "break-word";
    },
    applyOnDivSelect: function (el) {
        el.style.backgroundColor = "#6c00ff3d";
    },
    applyOnDivUnSelect: function (el) {
        el.style.backgroundColor = "initial";
    }
};
//# sourceMappingURL=qin-explorer-styles.js.map