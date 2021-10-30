import { QinSoul } from "qinpel-res";

export default {
    applyOnButton: (el: HTMLButtonElement) => {
        QinSoul.skin.styleAsEdit(el);
        el.style.display = "flex";
        el.style.flexDirection = "row"
        el.style.alignItems = "center";
    }
}