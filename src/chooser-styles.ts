import common from "./common-styles"

export default {
    applyOnDivBody: (divBody: HTMLDivElement) => {
        divBody.style.display = "flex";
        divBody.style.flexFlow = "column nowrap";
    },
    applyOnDivBottom: (divBottom: HTMLDivElement) => {
        divBottom.style.display = "flex";
        divBottom.style.flexFlow = "row wrap";
    },
    applyOnInputName: (inputName: HTMLInputElement) => {
        common.applyOnEdit(inputName);
        inputName.style.flex = "1";
    },
    applyOnSelectType: (selectType: HTMLSelectElement) => {
        common.applyOnEdit(selectType);
    },
}