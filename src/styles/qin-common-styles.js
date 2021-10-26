"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    applyOnEdit: function (el) {
        el.style.margin = "1px";
        el.style.padding = "3px";
        el.style.outline = "none";
        el.style.border = "1px solid #270036";
        el.style.borderRadius = "3px";
        el.style.color = "#270036";
        el.style.backgroundColor = "#ffffff";
        el.style.fontFamily = "Poppins";
        el.style.fontSize = "15px";
        el.addEventListener("focus", function () {
            el.style.outline = "none";
            el.style.border = "1px solid #ae0000";
            el.style.backgroundColor = "#dfeeff";
        });
        el.addEventListener("focusout", function () {
            el.style.outline = "none";
            el.style.border = "1px solid #270036";
            el.style.backgroundColor = "#ffffff";
        });
    }
};
//# sourceMappingURL=qin-common-styles.js.map