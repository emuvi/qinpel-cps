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
exports.QinChooser = void 0;
var qinpel = window.frameElement.qinpel;
var qin_edit_1 = require("./qin-edit");
var qin_explorer_1 = require("./qin-explorer");
var qin_chooser_styles_1 = require("./styles/qin-chooser-styles");
var qin_utils_1 = require("./qin-utils");
var QinChooser = (function (_super) {
    __extends(QinChooser, _super);
    function QinChooser(nature, operation, descriptors) {
        var _this = _super.call(this) || this;
        _this.divBody = document.createElement("div");
        _this.qinExplorer = new qin_explorer_1.QinExplorer();
        _this.divBottom = document.createElement("div");
        _this.inputName = document.createElement("input");
        _this.selectType = document.createElement("select");
        _this.nature = nature ? nature : qin_utils_1.QinFilesNature.BOTH;
        _this.operation = operation ? operation : qin_utils_1.QinFilesOperation.OPEN;
        _this.descriptors = descriptors ? descriptors : [];
        _this.initBody();
        _this.initBottom();
        return _this;
    }
    QinChooser.prototype.initBody = function () {
        qin_chooser_styles_1.default.applyOnDivBody(this.divBody);
        this.qinExplorer.install(this);
        this.qinExplorer.setNature(this.nature);
        this.divBody.appendChild(this.divBottom);
    };
    QinChooser.prototype.initBottom = function () {
        qin_chooser_styles_1.default.applyOnDivBottom(this.divBottom);
        this.initInput();
        this.initSelect();
    };
    QinChooser.prototype.initInput = function () {
        var _this = this;
        qin_chooser_styles_1.default.applyOnInputName(this.inputName);
        this.divBottom.appendChild(this.inputName);
        qinpel.util.addAction(this.inputName, function (qinEvent) {
            if (qinEvent.fromTyping && qinEvent.isEnter) {
                _this.qinExplorer.load(_this.inputName.value, function (loaded) {
                    _this.inputName.value = loaded;
                });
                qinEvent.stop();
            }
        });
    };
    QinChooser.prototype.initSelect = function () {
        if (this.descriptors.length == 0) {
            var optionAll = document.createElement("option");
            optionAll.text = "All Files (*.*)";
            optionAll.value = "*";
            optionAll.selected = true;
            this.selectType.appendChild(optionAll);
            this.qinExplorer.setExtensions([]);
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
            this.qinExplorer.setExtensions(this.descriptors[0].extensions);
        }
        qin_chooser_styles_1.default.applyOnSelectType(this.selectType);
        this.divBottom.appendChild(this.selectType);
    };
    QinChooser.prototype.getMain = function () {
        return this.divBody;
    };
    QinChooser.prototype.getData = function () {
        return undefined;
    };
    return QinChooser;
}(qin_edit_1.QinEdit));
exports.QinChooser = QinChooser;
//# sourceMappingURL=qin-chooser.js.map