"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qin_common_styles_1 = require("./qin-common-styles");
exports.default = {
    applyOnButton: function (el) {
        qin_common_styles_1.default.applyOnEdit(el);
        el.style.display = "flex";
        el.style.flexDirection = "row";
        el.style.alignItems = "center";
    }
};
//# sourceMappingURL=qin-button-styles.js.map