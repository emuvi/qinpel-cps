import { QinBase } from "./qin-base";
import { QinAsset, qinAssetUrl } from "./qin-assets";
import { QinSoul, QinDimension, QinGrandeur } from "qinpel-res";

export class QinIcon extends QinBase {

    private elModel: HTMLElement = null;

    public constructor(asset: QinAsset, size?: QinDimension | QinGrandeur, fill?: string) {
        super();
        const assetUrl = qinAssetUrl(asset);
        this.initImage(assetUrl, size);
        // const extension = QinSoul.foot.getFileExtension(assetUrl);
        // if (QinSoul.foot.isFileVector(extension)) {
        //     this.initVector(assetUrl, size, fill);
        // } else {
        // }
    }

    private initVector(assetUrl: string, size?: QinDimension | QinGrandeur, fill?: string) {
        const obj = document.createElement("embed");
        obj.src = assetUrl;
        obj.type = "image/svg+xml"
        this.applySize(obj, size);
        if (fill) {
            obj.style.fill = fill;
        }
        this.elModel = obj;
    }

    private initImage(assetUrl: string, size?: QinDimension | QinGrandeur) {
        const img = document.createElement("img")
        img.src = assetUrl;
        this.applySize(img, size);
        this.elModel = img;
    }

    private applySize(el: HTMLElement, size?: QinDimension | QinGrandeur) {
        if (size) {
            if (size instanceof QinDimension) {
                el.style.width = size.width + "px";
                el.style.height = size.height + "px";
            } else {
                let dim = QinSoul.skin.getIconDimension(size);
                el.style.width = dim.width + "px";
                el.style.height = dim.height + "px";
            }
        }
    }

    public getMain(): HTMLElement {
        return this.elModel;
    }
    
}