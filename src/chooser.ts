import { Qinpel } from "qinpel-app/types/qinpel"
// @ts-ignore
const qinpel = window.frameElement.qinpel as Qinpel;

import { Explorer } from "./explorer";
import styles from "./chooser-styles";

import { FilesNature, FilesOperation, FilesDescriptor } from "./files"

export class Chooser {

    private divBody = document.createElement("div");
    private explorer = new Explorer();
    private divBottom = document.createElement("div");
    private inputName = document.createElement("input");
    private selectType = document.createElement("select");

    private nature: FilesNature;
    private operation: FilesOperation;
    private descriptors: FilesDescriptor[];

    public constructor(
        nature?: FilesNature,
        operation?: FilesOperation,
        descriptors?: FilesDescriptor[]) {
        this.nature = nature ? nature : FilesNature.BOTH;
        this.operation = operation ? operation : FilesOperation.OPEN;
        this.descriptors = descriptors ? descriptors : [];
        this.initBody();
        this.initBottom();
    }

    private initBody() {
        styles.applyOnDivBody(this.divBody);
        this.explorer.install(this.divBody);
        this.explorer.setNature(this.nature);
        this.divBody.appendChild(this.divBottom);
    }

    private initBottom() {
        styles.applyOnDivBottom(this.divBottom);
        this.initInput();
        this.initSelect();
    }

    private initInput() {
        styles.applyOnInputName(this.inputName);
        this.divBottom.appendChild(this.inputName);
        qinpel.util.addAction(this.inputName, (_) => {
            this.explorer.load(this.inputName.value, (loaded) => {
                this.inputName.value = loaded;
            });
        });
    }

    private initSelect() {
        if (this.descriptors.length == 0) {
            const optionAll = document.createElement("option");
            optionAll.text = "All Files (*.*)";
            optionAll.value = "*";
            optionAll.selected = true;
            this.selectType.appendChild(optionAll)
            this.explorer.setExtensions([]);
        } else {
            for (let index = 0; index < this.descriptors.length; index++) {
                const descriptor = this.descriptors[index];
                const option = document.createElement("option");
                option.text = descriptor.description;
                option.value = descriptor.extensions.join(";");
                if (index == 0) option.selected = true;
                this.selectType.appendChild(option);
            }
            this.explorer.setExtensions(this.descriptors[0].extensions);
        }
        styles.applyOnSelectType(this.selectType);
        this.divBottom.appendChild(this.selectType);
    }

    public install(on: HTMLElement) {
        on.appendChild(this.divBody);
    }

}