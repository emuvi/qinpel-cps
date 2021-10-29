import { QinBase } from "./qin-base";
import { QinAsset } from "./qin-assets";
import { QinDimension, QinGrandeur } from "qinpel-res";
export declare class QinIcon extends QinBase {
    private imgIcon;
    constructor(asset: QinAsset, size?: QinDimension | QinGrandeur);
    getMain(): HTMLImageElement;
}
//# sourceMappingURL=qin-icon.d.ts.map