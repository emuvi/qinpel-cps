import { QinDimension, QinGrandeur, QinSoul } from "qinpel-res";
import { QinAsset, qinAssetUrl } from "./qin-assets";
import { QinBase } from "./qin-base";

export class QinIcon extends QinBase {
  private _elMain = document.createElement("img");

  public constructor(
    asset: QinAsset,
    size: QinDimension | QinGrandeur = QinGrandeur.SMALL
  ) {
    super();
    this._elMain.src = qinAssetUrl(asset);
    QinSoul.skin.styleSize(this._elMain, size);
  }

  public getMain(): HTMLImageElement {
    return this._elMain;
  }

  public change(asset: QinAsset) {
    this._elMain.src = qinAssetUrl(asset);
  }
}
