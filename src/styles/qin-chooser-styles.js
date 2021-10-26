"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qin_common_styles_1 = require("./qin-common-styles");
exports.default = {
    applyOnDivBody: function (divBody) {
        divBody.style.display = "flex";
        divBody.style.flexFlow = "column nowrap";
    },
    applyOnDivBottom: function (divBottom) {
        divBottom.style.display = "flex";
        divBottom.style.flexFlow = "row wrap";
    },
    applyOnInputName: function (inputName) {
        qin_common_styles_1.default.applyOnEdit(inputName);
        inputName.style.flex = "1";
    },
    applyOnSelectType: function (selectType) {
        qin_common_styles_1.default.applyOnEdit(selectType);
    },
};
//# sourceMappingURL=qin-chooser-styles.js.map