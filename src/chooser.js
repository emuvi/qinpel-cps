"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chooser = void 0;
var qinpel = window.frameElement.qinpel;
var explorer_1 = require("./explorer");
var chooser_styles_1 = require("./chooser-styles");
var files_1 = require("./files");
var Chooser = (function () {
    function Chooser(nature, operation, descriptors) {
        this.divBody = document.createElement("div");
        this.explorer = new explorer_1.Explorer();
        this.divBottom = document.createElement("div");
        this.inputName = document.createElement("input");
        this.selectType = document.createElement("select");
        this.nature = nature ? nature : files_1.FilesNature.BOTH;
        this.operation = operation ? operation : files_1.FilesOperation.OPEN;
        this.descriptors = descriptors ? descriptors : [];
        this.initBody();
        this.initBottom();
    }
    Chooser.prototype.initBody = function () {
        chooser_styles_1.default.applyOnDivBody(this.divBody);
        this.explorer.install(this.divBody);
        this.explorer.setNature(this.nature);
        this.divBody.appendChild(this.divBottom);
    };
    Chooser.prototype.initBottom = function () {
        chooser_styles_1.default.applyOnDivBottom(this.divBottom);
        this.initInput();
        this.initSelect();
    };
    Chooser.prototype.initInput = function () {
        var _this = this;
        chooser_styles_1.default.applyOnInputName(this.inputName);
        this.divBottom.appendChild(this.inputName);
        qinpel.util.addAction(this.inputName, function (_) {
            _this.explorer.load(_this.inputName.value, function (loaded) {
                _this.inputName.value = loaded;
            });
        });
    };
    Chooser.prototype.initSelect = function () {
        if (this.descriptors.length == 0) {
            var optionAll = document.createElement("option");
            optionAll.text = "All Files (*.*)";
            optionAll.value = "*";
            optionAll.selected = true;
            this.selectType.appendChild(optionAll);
            this.explorer.setExtensions([]);
        }
        else {
            for (var index = 0; index < this.descriptors.length; index++) {
                var descriptor = this.descriptors[index];
                var option = document.createElement("option");
                option.text = descriptor.description;
                option.value = descriptor.extensions.join(";");
                if (index == 0)
                    option.selected = true;
                this.selectType.appendChild(option);
            }
            this.explorer.setExtensions(this.descriptors[0].extensions);
        }
        chooser_styles_1.default.applyOnSelectType(this.selectType);
        this.divBottom.appendChild(this.selectType);
    };
    Chooser.prototype.install = function (on) {
        on.appendChild(this.divBody);
    };
    return Chooser;
}());
exports.Chooser = Chooser;
//# sourceMappingURL=chooser.js.map