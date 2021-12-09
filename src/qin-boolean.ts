import { QinSoul } from "qinpel-res";
import { QinAsset } from "./qin-assets";
import { QinColumn } from "./qin-column";
import { QinEdit } from "./qin-edit";
import { QinIcon } from "./qin-icon";
import { QinLabel } from "./qin-label";
import { QinLine } from "./qin-line";

export class QinBoolean extends QinEdit {
    
    private _qinMain: QinLine = new QinLine();
    private _qinSpan: QinLabel = new QinLabel();
    private _qinIcon: QinIcon = new QinIcon(QinAsset.FaceCircle);
    private value: boolean = false;

    public constructor(options?: QinBooleanOptions) {
        super();
        this._qinSpan.install(this._qinMain);
        this._qinIcon.install(this._qinSpan);
        this._qinSpan.putAsEdit();
        this._qinSpan.putAsDisplayFlex();
        this._qinSpan.putAsCentered();
        this._qinSpan.addAction(qinEvent => {
            if (qinEvent.isPrimary()) {
                this.toggle();
            }
        });
        if (options?.initial) {
            this.setData(options.initial);
        }
    }

    public getMain(): HTMLDivElement {
        return this._qinMain.getMain();
    }

    public getData(): boolean {
        return this.value;
    }

    public setData(data: boolean) {
        this.value = data;
        this.updateIcon();
    }

    private updateIcon() {
        if (this.value) {
            this._qinIcon.change(QinAsset.FaceConfirm);
        } else {
            this._qinIcon.change(QinAsset.FaceCircle);
        }
    }

    public toggle() {
        this.value = !this.value;
        this.updateIcon();
    }

}

export type QinBooleanOptions = {
    initial?: boolean
};