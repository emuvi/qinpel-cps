"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_styles_1 = require("./common-styles");
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
        common_styles_1.default.applyOnEdit(inputName);
        inputName.style.flex = "1";
    },
    applyOnSelectType: function (selectType) {
        common_styles_1.default.applyOnEdit(selectType);
    },
};
//# sourceMappingURL=chooser-styles.js.map