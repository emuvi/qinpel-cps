import { QinBase } from "./qin-base";
import { QinAsset } from "./qin-assets";
import { QinDimension, QinGrandeur } from "qinpel-res";
export declare class QinIcon extends QinBase {
    private _imgMain;
    constructor(asset: QinAsset, size?: QinDimension | QinGrandeur);
    getMain(): HTMLImageElement;
    change(asset: QinAsset): void;
    get imgMain(): HTMLImageElement;
}
//# sourceMappingURL=qin-icon.d.ts.map