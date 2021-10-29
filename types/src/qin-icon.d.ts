import { QinBase } from "./qin-base";
import { QinAsset } from "./qin-assets";
import { QinDimension, QinGrandeur } from "qinpel-res";
export declare class QinIcon extends QinBase {
    private elModel;
    constructor(asset: QinAsset, size?: QinDimension | QinGrandeur, fill?: string);
    private initVector;
    private initImage;
    private applySize;
    getMain(): HTMLElement;
}
//# sourceMappingURL=qin-icon.d.ts.map