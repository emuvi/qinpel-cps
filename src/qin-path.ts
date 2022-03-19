import { QinFramePopup } from "qinpel-app/types/qin-frame";
import { QinFilesDescriptor, QinFilesNature, QinFilesOperation } from "qinpel-res";
import { QinAsset } from "./qin-assets";
import { QinButton } from "./qin-button";
import { QinChooser } from "./qin-chooser";
import { QinEdit } from "./qin-edit";
import { QinIcon } from "./qin-icon";
import { QinLine } from "./qin-line";
import { QinString } from "./qin-string";


export class QinPath extends QinEdit {

    private _qinMain: QinLine = new QinLine();
    private _qinPath: QinString = new QinString();
    private _qinSearch: QinButton = new QinButton({
        icon: new QinIcon(QinAsset.FaceFolder)
    });
    private _qinChooser: QinChooser;
    private _qinPopup: QinFramePopup;

    public constructor(options?: QinPathOptions) {
        super();
        this._qinChooser = new QinChooser({
            nature: options?.nature,
            operation: options?.operation,
            descriptors: options?.descriptors,
            singleSelection: true
        });
        this._qinPopup = this.qinpel.frame.newPopup(this._qinChooser.getMain());
        this._qinPath.install(this._qinMain);
        this._qinSearch.install(this._qinMain);
        this._qinSearch.addAction((qinEvent) => {
            if (qinEvent.isPrimary()) {
                this._qinPopup.show();
                const upperHeight = this._qinChooser.qinUpper.getMain().clientHeight;
                const explorerMaxHeight = this._qinPopup.maxHeight - (upperHeight + 12);
                this._qinChooser.qinExplorer.style.putAsMaxHeight(explorerMaxHeight);
            }
        });
        this._qinChooser.addChosen(chosen => {
            if (chosen && chosen.length > 0) {
                this._qinPath.setData(chosen[0]);
            }
            this._qinPopup.close();
        });
        if (options?.initial) {
            this.setData(options.initial);
        }
    }

    public getMain(): HTMLDivElement {
        return this._qinMain.getMain();
    }

    public getData(): string {
        return this._qinPath.getData();
    }

    public setData(data: string) {
        this._qinPath.setData(data);
    }

    public get qinMain(): QinLine {
        return this._qinMain;
    }

    public get qinPath(): QinString {
        return this._qinPath;
    }

    public get qinSearch(): QinButton {
        return this._qinSearch;
    }

    public get qinChooser(): QinChooser {
        return this._qinChooser;
    }

    public get qinPopup(): QinFramePopup {
        return this._qinPopup;
    }

}

export type QinPathOptions = {
    initial?: string,
    nature?: QinFilesNature,
    operation?: QinFilesOperation,
    descriptors?: QinFilesDescriptor[]
};
