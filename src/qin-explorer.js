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
exports.QinExplorer = void 0;
var qin_edit_1 = require("./qin-edit");
var qin_explorer_styles_1 = require("./styles/qin-explorer-styles");
var qinpel_res_1 = require("qinpel-res");
function getIconName(fromExtension) {
    var result = "explorer-file.png";
    if (qinpel_res_1.QinSoul.foot.isFileApp(fromExtension)) {
        result = "explorer-apps.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileCmd(fromExtension)) {
        result = "explorer-cmds.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileExec(fromExtension)) {
        result = "explorer-exec.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileImage(fromExtension)) {
        result = "explorer-image.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileVector(fromExtension)) {
        result = "explorer-image.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileMusic(fromExtension)) {
        result = "explorer-music.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileMovie(fromExtension)) {
        result = "explorer-movie.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileZipped(fromExtension)) {
        result = "explorer-zipped.png";
    }
    return result;
}
var Item = (function () {
    function Item(fileName, iconName) {
        this.divItem = document.createElement("div");
        this.divItemBody = document.createElement("div");
        this.spanIcon = document.createElement("span");
        this.imgIcon = document.createElement("img");
        this.spanText = document.createElement("span");
        this.selected = false;
        this.fileName = fileName;
        this.iconName = iconName;
        this.initItem();
    }
    Item.prototype.initItem = function () {
        var _this = this;
        qin_explorer_styles_1.default.applyOnDivItem(this.divItem);
        this.divItem.tabIndex = 0;
        qin_explorer_styles_1.default.applyOnDivItemBody(this.divItemBody);
        this.divItem.appendChild(this.divItemBody);
        qin_explorer_styles_1.default.applyOnSpanIcon(this.spanIcon);
        this.divItemBody.appendChild(this.spanIcon);
        this.imgIcon.src = "/run/app/qinpel-app/assets/" + this.iconName;
        this.spanIcon.appendChild(this.imgIcon);
        this.spanText.innerText = this.fileName;
        qin_explorer_styles_1.default.applyOnSpanText(this.spanText);
        this.divItemBody.appendChild(this.spanText);
        qinpel_res_1.QinSoul.arm.addAction(this.divItem, function (qinEvent) {
            if (qinEvent.fromPointing
                || (qinEvent.fromTyping && qinEvent.isSpace)) {
                _this.divItem.focus();
                _this.toggle();
                qinEvent.stop();
            }
        });
    };
    Item.prototype.install = function (on) {
        on.appendChild(this.divItem);
    };
    Item.prototype.select = function () {
        qin_explorer_styles_1.default.applyOnDivSelect(this.divItem);
        this.selected = true;
    };
    Item.prototype.unselect = function () {
        qin_explorer_styles_1.default.applyOnDivUnSelect(this.divItem);
        this.selected = false;
    };
    Item.prototype.toggle = function () {
        if (!this.selected) {
            this.select();
        }
        else {
            this.unselect();
        }
    };
    Item.prototype.getName = function () {
        return this.fileName;
    };
    Item.prototype.isSelected = function () {
        return this.selected;
    };
    return Item;
}());
var QinExplorer = (function (_super) {
    __extends(QinExplorer, _super);
    function QinExplorer(nature, extensions) {
        var _this = _super.call(this) || this;
        _this.divBody = document.createElement("div");
        _this.actualFolder = "";
        _this.serverFolder = "";
        _this.items = [];
        _this.nature = nature ? nature : qinpel_res_1.QinFilesNature.BOTH;
        _this.extensions = extensions ? extensions : [];
        _this.initBody();
        return _this;
    }
    QinExplorer.prototype.initBody = function () {
        var _this = this;
        qin_explorer_styles_1.default.applyOnDivBody(this.divBody);
        qinpel_res_1.QinSoul.arm.addAction(this.divBody, function (qe) {
            if (qe.fromPointing) {
                _this.cleanSelection();
            }
        });
        qinpel_res_1.QinSoul.skin.disableSelection(this.divBody);
    };
    QinExplorer.prototype.getMain = function () {
        return this.divBody;
    };
    QinExplorer.prototype.getData = function () {
        var result = [];
        return result;
    };
    QinExplorer.prototype.setNature = function (nature) {
        this.nature = nature;
    };
    QinExplorer.prototype.setExtensions = function (extensions) {
        this.extensions = extensions;
    };
    QinExplorer.prototype.getActualFolder = function () {
        return this.actualFolder;
    };
    QinExplorer.prototype.getServerFolder = function () {
        return this.serverFolder;
    };
    QinExplorer.prototype.newDir = function (name) {
        this.newItem(name, "explorer-dir.png");
    };
    QinExplorer.prototype.newFile = function (name, extension) {
        this.newItem(name, getIconName(extension));
    };
    QinExplorer.prototype.newItem = function (name, icon) {
        var item = new Item(name, icon);
        item.install(this.divBody);
        this.items.push(item);
    };
    QinExplorer.prototype.load = function (folder, onLoad) {
        var _this = this;
        this.clean();
        this.qinpel().post("/dir/list", { path: folder })
            .then(function (res) {
            _this.actualFolder = folder;
            for (var _i = 0, _a = qinpel_res_1.QinSoul.body.getTextLines(res.data); _i < _a.length; _i++) {
                var line = _a[_i];
                var lineValue = line.substring(3);
                if (!lineValue) {
                    continue;
                }
                if (line.indexOf("P: ") === 0) {
                    _this.serverFolder = lineValue;
                    if (onLoad) {
                        onLoad(lineValue);
                    }
                }
                else if (line.indexOf("D: ") === 0) {
                    if (_this.nature == qinpel_res_1.QinFilesNature.BOTH ||
                        _this.nature == qinpel_res_1.QinFilesNature.DIRECTORIES) {
                        _this.newDir(lineValue);
                    }
                }
                else if (line.indexOf("F: ") === 0) {
                    if (_this.nature == qinpel_res_1.QinFilesNature.BOTH ||
                        _this.nature == qinpel_res_1.QinFilesNature.FILES) {
                        var extension = qinpel_res_1.QinSoul.foot.getFileExtension(lineValue);
                        var passedExtension = true;
                        if (_this.extensions && _this.extensions.length > 0) {
                            passedExtension = _this.extensions.indexOf(extension) > -1;
                        }
                        if (passedExtension) {
                            _this.newFile(lineValue, extension);
                        }
                    }
                }
            }
        })
            .catch(function (err) {
            _this.divBody.innerText = qinpel_res_1.QinSoul.head.getErrorMessage(err);
        });
    };
    QinExplorer.prototype.clean = function () {
        this.divBody.innerHTML = "";
        this.items = [];
        this.actualFolder = "";
        this.serverFolder = "";
    };
    QinExplorer.prototype.cleanSelection = function () {
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            item.unselect();
        }
    };
    return QinExplorer;
}(qin_edit_1.QinEdit));
exports.QinExplorer = QinExplorer;
//# sourceMappingURL=qin-explorer.js.map