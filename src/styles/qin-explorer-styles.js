"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qinpel_res_1 = require("qinpel-res");
exports.default = {
    applyOnDivBody: function (el) {
        qinpel_res_1.QinSoul.skin.styleAsEdit(el);
        el.style.overflow = "auto";
        el.style.minHeight = "84px";
        el.style.minWidth = "140px";
        el.tabIndex = 0;
    },
    applyOnDivItem: function (el) {
        qinpel_res_1.QinSoul.skin.styleAsEdit(el);
        el.style.display = "inline-block";
        el.style.padding = "9px";
        el.style.margin = "2px";
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