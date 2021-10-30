import {
    QinSoul, QinFilesNature, QinFilesOperation,
    QinFilesDescriptor, QinGrandeur
} from "qinpel-res";
import { QinEdit } from "./qin-edit";
import { QinColumn } from "./qin-column";
import { QinExplorer } from "./qin-explorer";
import { QinLine } from "./qin-line";
import { QinString } from "./qin-string";
import { QinCombo } from "./qin-combo";
import { QinButton } from "./qin-button";
import { QinIcon } from "./qin-icon";
import { QinAsset } from "./qin-assets";


export class QinChooser extends QinEdit {

    private qinBody = new QinColumn();
    private qinExplorer = new QinExplorer();
    private qinBottom = new QinLine();
    private qinName = new QinString();
    private qinExtensions = new QinCombo();
    private qinAction = new QinButton(new QinIcon(QinAsset.FaceCog, QinGrandeur.SMALL));

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
        this.qinExplorer.install(this.qinBody);
        this.qinExplorer.setNature(this.nature);
        this.qinBottom.install(this.qinBody);
    }

    private initBottom() {
        this.qinName.install(this.qinBottom);
        QinSoul.skin.styleFlexMax(this.qinName.getMain());
        this.qinAction.addAction((qinEvent) => {
            if (qinEvent.fromTyping && qinEvent.isEnter) {
                this.qinExplorer.load(this.qinName.getData(), (loaded) => {
                    this.qinName.setData(loaded);
                });
                qinEvent.stop();
            }
        });
        this.qinExtensions.install(this.qinBottom);
        this.initExtensions();
        this.qinAction.install(this.qinBottom);
    }

    private initExtensions() {
        if (this.descriptors.length == 0) {
            this.qinExtensions.addOption("All Files (*.*)", "*", true);
            this.qinExplorer.setExtensions([]);
        } else {
            for (let index = 0; index < this.descriptors.length; index++) {
                const descriptor = this.descriptors[index];
                this.qinExtensions.addOption(descriptor.description, 
                    descriptor.extensions.join(";"), index == 0);
            }
            this.qinExplorer.setExtensions(this.descriptors[0].extensions);
        }
    }

    public getMain(): HTMLDivElement {
        return this.qinBody.getMain();
    }

    public getData(): string[] {
        return this.qinExplorer.getData();
    }

    public setData(data: string[]) {
        this.qinExplorer.setData(data);
    }

}