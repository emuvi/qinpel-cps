import { QinBase } from "./qin-base";
import { QinColumn } from "./qin-column";
import { QinPanelSet } from "./qin-panel";
import { QinRow } from "./qin-row";

export class QinRows extends QinColumn {
  private _qinRows: QinRow[];

  public constructor(options?: QinRowsSet & QinPanelSet, isQindred?: string) {
    super(options, (isQindred ? isQindred + "_" : "") + "rows");
    if (options?.rows) {
      this._qinRows = options.rows;
    } else {
      this._qinRows = [];
    }
    if (options?.size) {
      while (this._qinRows.length < options.size) {
        this._qinRows.push(new QinRow());
      }
    }
  }

  public override styled(styles: Partial<CSSStyleDeclaration>): QinRows {
    super.styled(styles);
    return this;
  }

  public override put(item: QinBase): QinRows {
    item.install(this);
    return this;
  }

  public put_on(item: QinBase, row: number): QinRows {
    while (row >= this._qinRows.length) {
      this._qinRows.push(new QinRow());
    }
    this._qinRows[row].put(item);
    return this;
  }
}

export type QinRowsSet = {
  rows?: QinRow[];
  size?: number;
};
