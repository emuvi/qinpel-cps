import common from "./qin-common-styles"

export default {
    applyOnButton: (el: HTMLButtonElement) => {
        common.applyOnEdit(el);
        el.style.display = "flex";
        el.style.flexDirection = "row"
        el.style.alignItems = "center";
    }
}