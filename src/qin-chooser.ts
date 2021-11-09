import {
    QinSoul, QinFilesNature, QinFilesOperation, QinFilesDescriptor
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
import { QinPanel } from "./qin-panel";


export class QinChooser extends QinEdit {

    private _qinMain: QinColumn = new QinColumn();
    private _qinUpper: QinLine = new QinLine();
    private _qinConfirm: QinButton = new QinButton(new QinIcon(QinAsset.FaceConfirm));
    private _qinName: QinString = new QinString();
    private _qinExtensions: QinCombo = new QinCombo();
    private _qinSearch: QinButton = new QinButton(new QinIcon(QinAsset.FaceSearch));
    private _qinUnder: QinPanel = new QinPanel();
    private _qinExplorer: QinExplorer = new QinExplorer();

    private _nature: QinFilesNature;
    private _operation: QinFilesOperation;
    private _descriptors: QinFilesDescriptor[];

    public constructor(
        nature?: QinFilesNature,
        operation?: QinFilesOperation,
        descriptors?: QinFilesDescriptor[]) {
        super();
        this._nature = nature ? nature : QinFilesNature.BOTH;
        this._operation = operation ? operation : QinFilesOperation.OPEN;
        this._descriptors = descriptors ? descriptors : [];
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
        this._qinName.install(this._qinUpper);
        QinSoul.skin.styleFlexMax(this._qinName.getMain());
        this._qinExtensions.install(this._qinUpper);
        this.initExtensions();
        this._qinSearch.install(this._qinUpper);
        this._qinSearch.addAction((qinEvent) => {
            if (qinEvent.isPrimary()) {
                this._qinExplorer.load(this._qinName.getData(), (loaded) => {
                    this._qinName.setData(loaded);
                });
                qinEvent.stop();
            }
        });
    }

    private initUnder() {
        this._qinUnder.putAsScroll();
        this._qinUnder.putAsFlexMax();
        this._qinExplorer.install(this._qinUnder);
        this._qinExplorer.nature = this._nature;
    }

    private initExtensions() {
        if (this._descriptors.length == 0) {
            this._qinExtensions.addOption("All Files (*.*)", "*", true);
            this._qinExplorer.extensions = [];
        } else {
            for (let index = 0; index < this._descriptors.length; index++) {
                const descriptor = this._descriptors[index];
                this._qinExtensions.addOption(descriptor.description,
                    descriptor.extensions.join(";"), index == 0);
            }
            this._qinExplorer.extensions = this._descriptors[0].extensions;
        }
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

    /**
     * Getter qinMain
     * @return {QinColumn }
     */
	public get qinMain(): QinColumn  {
		return this._qinMain;
	}

    /**
     * Getter qinUpper
     * @return {QinLine }
     */
	public get qinUpper(): QinLine  {
		return this._qinUpper;
	}

    /**
     * Getter qinConfirm
     * @return {QinButton }
     */
	public get qinConfirm(): QinButton  {
		return this._qinConfirm;
	}

    /**
     * Getter qinName
     * @return {QinString }
     */
	public get qinName(): QinString  {
		return this._qinName;
	}

    /**
     * Getter qinExtensions
     * @return {QinCombo }
     */
	public get qinExtensions(): QinCombo  {
		return this._qinExtensions;
	}

    /**
     * Getter qinSearch
     * @return {QinButton }
     */
	public get qinSearch(): QinButton  {
		return this._qinSearch;
	}

    /**
     * Getter qinUnder
     * @return {QinPanel }
     */
	public get qinUnder(): QinPanel  {
		return this._qinUnder;
	}

    /**
     * Getter qinExplorer
     * @return {QinExplorer }
     */
	public get qinExplorer(): QinExplorer  {
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
     * Getter operation
     * @return {QinFilesOperation}
     */
	public get operation(): QinFilesOperation {
		return this._operation;
	}

    /**
     * Getter descriptors
     * @return {QinFilesDescriptor[]}
     */
	public get descriptors(): QinFilesDescriptor[] {
		return this._descriptors;
	}

}