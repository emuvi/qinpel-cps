import common from "./qin-common-styles"

export default {
    applyOnDivBody: (el: HTMLDivElement) => {
        common.applyOnEdit(el);
        el.style.overflow = "auto";
        el.style.minHeight = "84px";
        el.style.minWidth = "140px";
        el.tabIndex = 0;
    },
    applyOnDivItem: (el: HTMLDivElement) => {
        el.style.display = "inline-block";
        el.style.padding = "9px";
        el.style.margin = "2px";
        el.style.border = "1px solid #ffffff00";
        el.style.borderRadius = "2px";
        el.addEventListener("focus", () => {
            el.style.outline = "none";
            el.style.border = "1px solid #ae0000";
        });
        el.addEventListener("focusout", () => {
            el.style.outline = "none";
            el.style.border = "1px solid #ffffff00";
        });
    },
    applyOnDivItemBody: (el: HTMLDivElement) => {
        el.style.display = "flex";
        el.style.flexDirection = "column";
        el.style.width = "120px";
    },
    applyOnSpanIcon: (el: HTMLSpanElement) => {
        el.style.textAlign = "center";
    },
    applyOnSpanText: (el: HTMLSpanElement) => {
        el.style.textAlign = "center";
        el.style.wordWrap = "break-word";
    },
    applyOnDivSelect: (el: HTMLSpanElement) => {
        el.style.backgroundColor = "#6c00ff3d";
    },
    applyOnDivUnSelect: (el: HTMLSpanElement) => {
        el.style.backgroundColor = "initial";
    }
}