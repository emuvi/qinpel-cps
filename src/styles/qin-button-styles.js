"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qinpel_res_1 = require("qinpel-res");
exports.default = {
    applyOnButton: function (el) {
        qinpel_res_1.QinSoul.skin.styleAsEdit(el);
        el.style.display = "flex";
        el.style.flexDirection = "row";
        el.style.alignItems = "center";
    }
};
//# sourceMappingURL=qin-button-styles.js.map