import { QinEdit } from "./qin-edit";
import { QinLine } from "./qin-line";
import { QinString } from "./qin-string";
import { QinButton } from "./qin-button";
import { QinAsset } from "./qin-assets";
import { QinIcon } from "./qin-icon";
import { QinChooser } from "./qin-chooser";
import { QinFilesDescriptor, QinFilesNature, QinFilesOperation } from "qinpel-res";

export class QinPath extends QinEdit {

    private _qinMain: QinLine = new QinLine();
    private _qinPath: QinString = new QinString();
    private _qinSearch: QinButton = new QinButton(new QinIcon(QinAsset.FaceFolder));
    private _qinChooser: QinChooser;

    public constructor(
        nature?: QinFilesNature,
        operation?: QinFilesOperation,
        descriptors?: QinFilesDescriptor[]) {
        super();
        this._qinChooser = new QinChooser(nature, operation, descriptors);
        this._qinPath.install(this._qinMain);
        this.initAction();
    }

    private initAction() {
        this._qinSearch.install(this._qinMain);
        const popup = this.qinpel().frame.newPopup(this._qinChooser.getMain());
        this._qinSearch.addAction((qinEvent) => {
            if (qinEvent.isPrimary()) {
                popup.show();
                const upperHeight = this._qinChooser.qinUpper.getMain().clientHeight;
                const explorerMaxHeight = popup.maxHeight - (upperHeight + 12);
                this._qinChooser.qinExplorer.putAsMaxHeight(explorerMaxHeight);
            }
        });
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

    /**
     * Getter qinMain
     * @return {QinLine }
     */
    public get qinMain(): QinLine {
        return this._qinMain;
    }

    /**
     * Getter qinPath
     * @return {QinString }
     */
    public get qinPath(): QinString {
        return this._qinPath;
    }

    /**
     * Getter qinSearch
     * @return {QinButton }
     */
    public get qinSearch(): QinButton {
        return this._qinSearch;
    }

    /**
     * Getter qinChooser
     * @return {QinChooser }
     */
    public get qinChooser(): QinChooser {
        return this._qinChooser;
    }

}
