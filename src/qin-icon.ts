import { QinBase } from "./qin-base";
import { QinAsset, qinAssetUrl } from "./qin-assets";
import { QinSoul, QinDimension, QinGrandeur } from "qinpel-res";

export class QinIcon extends QinBase {

    private _imgMain: HTMLImageElement = document.createElement("img");

    public constructor(asset: QinAsset,
        size: QinDimension | QinGrandeur = QinGrandeur.SMALL) {
        super();
        this._imgMain.src = qinAssetUrl(asset);
        QinSoul.skin.styleSize(this._imgMain, size);
    }

    public getMain(): HTMLImageElement {
        return this._imgMain;
    }

    public change(asset: QinAsset) {
        this._imgMain.src = qinAssetUrl(asset);
    }

    /**
     * Getter imgMain
     * @return {HTMLImageElement }
     */
	public get imgMain(): HTMLImageElement  {
		return this._imgMain;
	}

}