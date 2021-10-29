import { QinEdit } from "./qin-edit";
import { QinExplorer } from "./qin-explorer";
import { QinSoul, QinFilesNature, QinFilesOperation, QinFilesDescriptor } from "qinpel-res";
import styles from "./styles/qin-chooser-styles";


export class QinChooser extends QinEdit {

    private divBody = document.createElement("div");
    private qinExplorer = new QinExplorer();
    private divBottom = document.createElement("div");
    private inputName = document.createElement("input");
    private selectType = document.createElement("select");

    private nature: QinFilesNature;
    private operation: QinFilesOperation;
    private descriptors: QinFilesDescriptor[];

    public constructor(
        nature?: QinFilesNature,
        operation?: QinFilesOperation,
        descriptors?: QinFilesDescriptor[]) {
        super();
        this.nature = nature ? nature : QinFilesNature.BOTH;
        this.operation = operation ? operation : QinFilesOperation.OPEN;
        this.descriptors = descriptors ? descriptors : [];
        this.initBody();
        this.initBottom();
    }

    private initBody() {
        styles.applyOnDivBody(this.divBody);
        this.qinExplorer.install(this);
        this.qinExplorer.setNature(this.nature);
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
        QinSoul.arm.addAction(this.inputName, (qinEvent) => {
            if (qinEvent.fromTyping && qinEvent.isEnter) {
                this.qinExplorer.load(this.inputName.value, (loaded) => {
                    this.inputName.value = loaded;
                });
                qinEvent.stop();
            }
        });
    }

    private initSelect() {
        if (this.descriptors.length == 0) {
            const optionAll = document.createElement("option");
            optionAll.text = "All Files (*.*)";
            optionAll.value = "*";
            optionAll.selected = true;
            this.selectType.appendChild(optionAll)
            this.qinExplorer.setExtensions([]);
        } else {
            for (let index = 0; index < this.descriptors.length; index++) {
                const descriptor = this.descriptors[index];
                const option = document.createElement("option");
                option.text = descriptor.description;
                option.value = descriptor.extensions.join(";");
                if (index == 0) option.selected = true;
                this.selectType.appendChild(option);
            }
            this.qinExplorer.setExtensions(this.descriptors[0].extensions);
        }
        styles.applyOnSelectType(this.selectType);
        this.divBottom.appendChild(this.selectType);
    }

    public getMain(): HTMLElement {
        return this.divBody;
    }

    public getData(): any {
        return undefined;
    }

}