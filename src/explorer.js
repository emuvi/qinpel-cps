"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Explorer = void 0;
var qinpel = window.frameElement.qinpel;
var explorer_styles_1 = require("./explorer-styles");
var files_1 = require("./files");
var appsExtensions = ["htm", "html", "css", "js", "jsx", "ts", "tsx"];
var cmdsExtensions = [
    "h", "c", "hpp", "cpp", "rs", "jl",
    "cs", "csproj", "fs", "ml", "fsi", "mli", "fsx", "fsscript",
    "java", "gy", "gvy", "groovy", "sc", "scala", "clj",
    "py", "ruby", "php", "phtml",
];
var execExtensions = ["exe", "jar", "com", "bat", "sh"];
var imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp"];
var movieExtensions = ["avi", "mp4"];
var musicExtensions = ["wav", "mp3"];
var zippedExtensions = ["zip", "rar", "7z", "tar", "gz"];
var Explorer = (function () {
    function Explorer(nature, extensions) {
        this.divBody = document.createElement("div");
        this.actualFolder = "";
        this.serverFolder = "";
        this.nature = nature ? nature : files_1.FilesNature.BOTH;
        this.extensions = extensions ? extensions : [];
        this.initBody();
    }
    Explorer.prototype.initBody = function () {
        explorer_styles_1.default.applyOnDivBody(this.divBody);
        qinpel.util.disableSelection(this.divBody);
    };
    Explorer.prototype.install = function (on) {
        on.appendChild(this.divBody);
    };
    Explorer.prototype.setNature = function (nature) {
        this.nature = nature;
    };
    Explorer.prototype.setExtensions = function (extensions) {
        this.extensions = extensions;
    };
    Explorer.prototype.getActualFolder = function () {
        return this.actualFolder;
    };
    Explorer.prototype.getServerFolder = function () {
        return this.serverFolder;
    };
    Explorer.prototype.load = function (folder, callBack) {
        var _this = this;
        this.clean();
        qinpel.post("/dir/list", { path: folder })
            .then(function (res) {
            _this.actualFolder = folder;
            for (var _i = 0, _a = qinpel.util.getTextLines(res.data); _i < _a.length; _i++) {
                var line = _a[_i];
                var lineValue = line.substring(3);
                if (!lineValue) {
                    continue;
                }
                if (line.indexOf("P: ") === 0) {
                    _this.serverFolder = lineValue;
                    if (callBack) {
                        callBack(lineValue);
                    }
                }
                else if (line.indexOf("D: ") === 0) {
                    if (_this.nature == files_1.FilesNature.BOTH ||
                        _this.nature == files_1.FilesNature.DIRECTORIES) {
                        _this.newDir(lineValue);
                    }
                }
                else if (line.indexOf("F: ") === 0) {
                    if (_this.nature == files_1.FilesNature.BOTH ||
                        _this.nature == files_1.FilesNature.FILES) {
                        var extension = qinpel.util.getFileExtension(lineValue);
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
            _this.divBody.innerText = qinpel.util.getErrorMessage(err);
        });
    };
    Explorer.prototype.clean = function () {
        this.divBody.innerHTML = "";
    };
    Explorer.prototype.newDir = function (name) {
        this.newItem(name, "explorer-dir.png");
    };
    Explorer.prototype.newFile = function (name, extension) {
        this.newItem(name, getIconName());
        function getIconName() {
            if (appsExtensions.indexOf(extension) > -1) {
                return "explorer-apps.png";
            }
            else if (cmdsExtensions.indexOf(extension) > -1) {
                return "explorer-cmds.png";
            }
            else if (execExtensions.indexOf(extension) > -1) {
                return "explorer-exec.png";
            }
            else if (imageExtensions.indexOf(extension) > -1) {
                return "explorer-image.png";
            }
            else if (movieExtensions.indexOf(extension) > -1) {
                return "explorer-movie.png";
            }
            else if (musicExtensions.indexOf(extension) > -1) {
                return "explorer-music.png";
            }
            else if (zippedExtensions.indexOf(extension) > -1) {
                return "explorer-zipped.png";
            }
            else {
                return "explorer-file.png";
            }
        }
    };
    Explorer.prototype.newItem = function (name, icon) {
        var divItem = document.createElement("div");
        explorer_styles_1.default.applyOnDivItem(divItem);
        this.divBody.appendChild(divItem);
        var divItemBody = document.createElement("div");
        explorer_styles_1.default.applyOnDivItemBody(divItemBody);
        divItem.appendChild(divItemBody);
        var spanIcon = document.createElement("span");
        explorer_styles_1.default.applyOnSpanIcon(spanIcon);
        divItemBody.appendChild(spanIcon);
        var imgIcon = document.createElement("img");
        imgIcon.src = "/run/app/qinpel-app/assets/" + icon;
        spanIcon.appendChild(imgIcon);
        var spanText = document.createElement("span");
        explorer_styles_1.default.applyOnSpanText(spanText);
        spanText.innerText = name;
        divItemBody.appendChild(spanText);
        var selected = false;
        qinpel.util.addAction(divItem, function () {
            if (!selected) {
                explorer_styles_1.default.applyOnDivSelect(divItem);
                selected = true;
            }
            else {
                explorer_styles_1.default.applyOnDivUnSelect(divItem);
                selected = false;
            }
        });
    };
    return Explorer;
}());
exports.Explorer = Explorer;
//# sourceMappingURL=explorer.js.map