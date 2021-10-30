import { QinBase } from "./qin-base";
import { QinAsset, qinAssetUrl } from "./qin-assets";
import { QinSoul, QinDimension, QinGrandeur } from "qinpel-res";

export class QinIcon extends QinBase {

    private imgIcon = document.createElement("img");

    public constructor(asset: QinAsset, size?: QinDimension | QinGrandeur) {
        super();
        this.imgIcon.src = qinAssetUrl(asset);
        QinSoul.skin.styleSize(this.imgIcon, size);
    }

    public getMain(): HTMLImageElement {
        return this.imgIcon;
    }
    
}