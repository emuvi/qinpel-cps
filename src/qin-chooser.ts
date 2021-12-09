import { QinFilesNature, QinFilesOperation, QinFilesDescriptor } from "qinpel-res";
import { QinEdit } from "./qin-edit";
import { QinColumn } from "./qin-column";
import { QinExplorer } from "./qin-explorer";
import { QinLine } from "./qin-line";
import { QinString } from "./qin-string";
import { QinCombo } from "./qin-combo";
import { QinButton } from "./qin-button";
import { QinIcon } from "./qin-icon";
import { QinAsset } from "./qin-assets";
import { QinPanel } from "./qin-panel";

export class QinChooser extends QinEdit {

    private _qinMain: QinColumn = new QinColumn();
    private _qinUpper: QinLine = new QinLine();
    private _qinConfirm: QinButton = new QinButton({
        icon: new QinIcon(QinAsset.FaceConfirm)
    });
    private _qinFolder: QinString = new QinString();
    private _qinExtensions: QinCombo = new QinCombo();
    private _qinSearch: QinButton = new QinButton({
        icon: new QinIcon(QinAsset.FaceSearch)
    });
    private _qinUnder: QinPanel = new QinPanel();
    private _qinExplorer: QinExplorer = new QinExplorer();

    private _nature: QinFilesNature;
    private _operation: QinFilesOperation;
    private _descriptors: QinFilesDescriptor[];
    private _singleSelection: boolean;

    private listeners: QinChosen[] = [];

    public constructor(options?: QinChooserOptions) {
        super();
        this._nature = options?.nature ? options.nature : QinFilesNature.BOTH;
        this._operation = options?.operation ? options.operation : QinFilesOperation.OPEN;
        this._descriptors = options?.descriptors ? options.descriptors : [];
        this._singleSelection = options?.singleSelection ? options?.singleSelection : false;
        this.initMain();
        this.initUpper();
        this.initUnder();
    }

    private initMain() {
        this._qinUpper.install(this._qinMain);
        this._qinUnder.install(this._qinMain);
    }

    private initUpper() {
        this._qinUpper.putAsFlexMin();
        this._qinConfirm.install(this._qinUpper);
        this._qinConfirm.addAction(qinEvent => {
            if (qinEvent.isPrimary()) {
                let data = this.getData();
                for (const chosen of this.listeners) {
                    chosen(data);
                }
                qinEvent.stop();
            }
        });
        this._qinFolder.install(this._qinUpper);
        this._qinFolder.putAsMinWidth(100);
        this._qinFolder.putAsFlexMax();
        this._qinFolder.addAction(qinEvent => {
            if (qinEvent.isEnter) {
                this.loadFolder();
                qinEvent.stop();
            }
        });
        this._qinExtensions.install(this._qinUpper);
        this._qinExtensions.putAsMinWidth(100);
        this.initExtensions();
        this._qinSearch.install(this._qinUpper);
        this._qinSearch.addAction((qinEvent) => {
            if (qinEvent.isPrimary()) {
                this.loadFolder();
                qinEvent.stop();
            }
        });
    }

    private initUnder() {
        this._qinUnder.putAsScroll();
        this._qinUnder.putAsFlexMax();
        this._qinExplorer.install(this._qinUnder);
        this._qinExplorer.nature = this._nature;
        this._qinExplorer.singleSelection = this._singleSelection;
    }

    private initExtensions() {
        if (this._descriptors.length == 0) {
            this._qinExtensions.addItem({
                title: "All Files (*.*)",
                value: "*",
                selected: true
            });
            this._qinExplorer.extensions = [];
        } else {
            for (let index = 0; index < this._descriptors.length; index++) {
                const descriptor = this._descriptors[index];
                this._qinExtensions.addItem({
                    title: descriptor.description,
                    value: descriptor.extensions.join(";"),
                    selected: index == 0
                });
            }
            this._qinExplorer.extensions = this._descriptors[0].extensions;
        }
    }

    private loadFolder() {
        this._qinExplorer.load(this._qinFolder.getData(), (loaded) => {
            this._qinFolder.setData(loaded);
        });
    }

    public getMain(): HTMLDivElement {
        return this._qinMain.getMain();
    }

    public getData(): string[] {
        return this._qinExplorer.getData();
    }

    public setData(data: string[]) {
        this._qinExplorer.setData(data);
    }

    public addChosen(chosen: QinChosen): QinChooser {
        this.listeners.push(chosen);
        return this;
    }

    /**
     * Getter qinMain
     * @return {QinColumn }
     */
    public get qinMain(): QinColumn {
        return this._qinMain;
    }

    /**
     * Getter qinUpper
     * @return {QinLine }
     */
    public get qinUpper(): QinLine {
        return this._qinUpper;
    }

    /**
     * Getter qinConfirm
     * @return {QinButton }
     */
    public get qinConfirm(): QinButton {
        return this._qinConfirm;
    }

    /**
     * Getter qinFolder
     * @return {QinString }
     */
    public get qinFolder(): QinString {
        return this._qinFolder;
    }

    /**
     * Getter qinExtensions
     * @return {QinCombo }
     */
    public get qinExtensions(): QinCombo {
        return this._qinExtensions;
    }

    /**
     * Getter qinSearch
     * @return {QinButton }
     */
    public get qinSearch(): QinButton {
        return this._qinSearch;
    }

    /**
     * Getter qinUnder
     * @return {QinPanel }
     */
    public get qinUnder(): QinPanel {
        return this._qinUnder;
    }

    /**
     * Getter qinExplorer
     * @return {QinExplorer }
     */
    public get qinExplorer(): QinExplorer {
        return this._qinExplorer;
    }



    /**
     * Getter nature
     * @return {QinFilesNature}
     */
    public get nature(): QinFilesNature {
        return this._nature;
    }

    /**
     * Setter nature
     * @param {QinFilesNature} value
     */
    public set nature(value: QinFilesNature) {
        this._nature = value;
        this._qinExplorer.nature = value;
    }

    /**
     * Getter operation
     * @return {QinFilesOperation}
     */
    public get operation(): QinFilesOperation {
        return this._operation;
    }

    /**
     * Setter operation
     * @param {QinFilesOperation} value
     */
    public set operation(value: QinFilesOperation) {
        this._operation = value;
    }

    /**
     * Getter descriptors
     * @return {QinFilesDescriptor[]}
     */
    public get descriptors(): QinFilesDescriptor[] {
        return this._descriptors;
    }

    /**
     * Setter descriptors
     * @param {QinFilesDescriptor[]} value
     */
    public set descriptors(value: QinFilesDescriptor[]) {
        this._descriptors = value;
    }

    /**
     * Getter singleSelection
     * @return {boolean}
     */
    public get singleSelection(): boolean {
        return this._singleSelection;
    }

    /**
     * Setter singleSelection
     * @param {boolean} value
     */
    public set singleSelection(value: boolean) {
        this._singleSelection = value;
        this._qinExplorer.singleSelection = value;
    }

}

export type QinChooserOptions = {
    nature?: QinFilesNature,
    operation?: QinFilesOperation,
    descriptors?: QinFilesDescriptor[],
    singleSelection?: boolean,
};

export type QinChosen = (chosen: string[]) => void;