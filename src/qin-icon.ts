import { QinDimension, QinGrandeur, QinSkin } from "qinpel-res";
import { QinAsset, qinAssetUrl, qinUrlAsset } from "./qin-assets";
import { QinBase } from "./qin-base";

export class QinIcon extends QinBase {
  private _elMain = document.createElement("img");

  public constructor(
    asset: QinAsset,
    size: QinDimension | QinGrandeur = QinGrandeur.SMALL
  ) {
    super();
    this._elMain.src = qinAssetUrl(asset);
    QinSkin.styleSize(this._elMain, size);
  }

  public override getMain(): HTMLImageElement {
    return this._elMain;
  }

  public get asset(): QinAsset {
    return qinUrlAsset(this._elMain.src);
  }

  public set asset(asset: QinAsset) {
    this._elMain.src = qinAssetUrl(asset);
  }

  public get size(): QinDimension {
    return QinSkin.getDimension(this._elMain);
  }
}
