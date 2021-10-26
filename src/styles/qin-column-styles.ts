export default {
    applyOnPanel: (el: HTMLDivElement) => {
        el.style.display = "flex";
        el.style.flexDirection = "column";
        el.style.flexWrap = "nowrap";
    },
}