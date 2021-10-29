"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinBase = void 0;
var qinpel_res_1 = require("qinpel-res");
var refQinpel = window.frameElement.qinpel;
var QinBase = (function () {
    function QinBase() {
        this.baseParent = null;
        this.baseChildren = [];
        this.baseDisplay = "initial";
        this.baseVisibility = "initial";
    }
    QinBase.prototype.qinpel = function () {
        return refQinpel;
    };
    QinBase.prototype.install = function (on) {
        this.baseParent = on;
        this.baseParent.append(this);
    };
    QinBase.prototype.unInstall = function () {
        this.baseParent.remove(this);
    };
    QinBase.prototype.reInstall = function () {
        this.baseParent.append(this);
    };
    QinBase.prototype.unDisplay = function () {
        if (this.getMain().style.display !== "none") {
            this.baseDisplay = this.getMain().style.display;
            this.getMain().style.display = "none";
        }
    };
    QinBase.prototype.reDisplay = function () {
        this.getMain().style.display = this.baseDisplay;
    };
    QinBase.prototype.unVisible = function () {
        if (this.getMain().style.display !== "hidden") {
            this.baseVisibility = this.getMain().style.visibility;
            this.getMain().style.visibility = "hidden";
        }
    };
    QinBase.prototype.reVisible = function () {
        this.getMain().style.visibility = this.baseVisibility;
    };
    QinBase.prototype.append = function (child) {
        this.baseChildren.push(child);
        this.getMain().appendChild(child.getMain());
    };
    QinBase.prototype.remove = function (child) {
        var index = this.baseChildren.indexOf(child);
        if (index > -1) {
            this.baseChildren.splice(index, 1);
        }
        this.getMain().removeChild(child.getMain());
    };
    QinBase.prototype.children = function () {
        return this.baseChildren;
    };
    QinBase.prototype.addAction = function (action) {
        qinpel_res_1.QinSoul.arm.addAction(this.getMain(), action);
    };
    return QinBase;
}());
exports.QinBase = QinBase;
//# sourceMappingURL=qin-base.js.map