"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesDescriptor = exports.FilesOperation = exports.FilesNature = void 0;
var FilesNature;
(function (FilesNature) {
    FilesNature[FilesNature["DIRECTORIES"] = 0] = "DIRECTORIES";
    FilesNature[FilesNature["FILES"] = 1] = "FILES";
    FilesNature[FilesNature["BOTH"] = 2] = "BOTH";
})(FilesNature = exports.FilesNature || (exports.FilesNature = {}));
var FilesOperation;
(function (FilesOperation) {
    FilesOperation[FilesOperation["OPEN"] = 0] = "OPEN";
    FilesOperation[FilesOperation["SAVE"] = 1] = "SAVE";
})(FilesOperation = exports.FilesOperation || (exports.FilesOperation = {}));
var FilesDescriptor = (function () {
    function FilesDescriptor() {
    }
    return FilesDescriptor;
}());
exports.FilesDescriptor = FilesDescriptor;
//# sourceMappingURL=files.js.map