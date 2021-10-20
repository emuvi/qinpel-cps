"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_styles_1 = require("./common-styles");
exports.default = {
    applyOnDivBody: function (divBody) {
        common_styles_1.default.applyOnEdit(divBody);
        divBody.style.overflow = "auto";
        divBody.style.minHeight = "64px";
        divBody.style.minWidth = "64px";
    },
    applyOnDivItem: function (divItem) {
        divItem.style.display = "inline-block";
        divItem.style.padding = "9px";
        divItem.style.margin = "1px";
        divItem.style.borderRadius = "2px";
    },
    applyOnDivItemBody: function (divItemBody) {
        divItemBody.style.display = "flex";
        divItemBody.style.flexDirection = "column";
        divItemBody.style.cursor = "pointer";
        divItemBody.style.width = "84px";
    },
    applyOnSpanIcon: function (spanIcon) {
        spanIcon.style.textAlign = "center";
    },
    applyOnSpanText: function (spanText) {
        spanText.style.textAlign = "center";
        spanText.style.wordWrap = "break-word";
    },
    applyOnDivSelect: function (divItem) {
        divItem.style.backgroundColor = "rgba(108, 0, 255, 0.3)";
    },
    applyOnDivUnSelect: function (divItem) {
        divItem.style.backgroundColor = "initial";
    }
};
//# sourceMappingURL=explorer-styles.js.map