import common from "./common-styles"

export default {
    applyOnDivBody: (divBody: HTMLDivElement) => {
        common.applyOnEdit(divBody);
        divBody.style.overflow = "auto";
        divBody.style.minHeight = "64px"
        divBody.style.minWidth = "64px"
    },
    applyOnDivItem: (divItem: HTMLDivElement) => {
        divItem.style.display = "inline-block";
        divItem.style.padding = "9px";
        divItem.style.margin = "2px";
        divItem.style.borderRadius = "2px";
    },
    applyOnDivItemBody: (divItemBody: HTMLDivElement) => {
        divItemBody.style.display = "flex";
        divItemBody.style.flexDirection = "column";
        divItemBody.style.width = "84px";
    },
    applyOnSpanIcon: (spanIcon: HTMLSpanElement) => {
        spanIcon.style.textAlign = "center";
    },
    applyOnSpanText: (spanText: HTMLSpanElement) => {
        spanText.style.textAlign = "center";
        spanText.style.wordWrap = "break-word";
    },
    applyOnDivSelect: (divItem: HTMLSpanElement) => {
        divItem.style.backgroundColor = "rgba(108, 0, 255, 0.3)";
    },
    applyOnDivUnSelect: (divItem: HTMLSpanElement) => {
        divItem.style.backgroundColor = "initial";
    }
}