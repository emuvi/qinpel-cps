import { QinBase } from "./qin-base";
import { QinTool } from "./qin-tool";

export class QinTable extends QinBase {
  private _elTable = document.createElement("table");
  private _elTHead = document.createElement("thead");
  private _elTHeadRow = document.createElement("tr");
  private _elTBody = document.createElement("tbody");
  private _linesSize = 0;

  private _onLineMainAct: Array<QinTableOnLineAct> = null;
  private _onLineMidiAct: Array<QinTableOnLineAct> = null;
  private _onLineMenuAct: Array<QinTableOnLineAct> = null;
  private _onColumnMainAct: Array<QinTableOnColumnAct> = null;
  private _onColumnMidiAct: Array<QinTableOnColumnAct> = null;
  private _onColumnMenuAct: Array<QinTableOnColumnAct> = null;

  public constructor(options?: QinTableSet, isQindred?: string) {
    super((isQindred ? isQindred + "_" : "") + "table", document.createElement("div"));
    this.qinedHTML.appendChild(this._elTable);
    this._elTable.appendChild(this._elTHead);
    this._elTHead.appendChild(this._elTHeadRow);
    this._elTable.appendChild(this._elTBody);
    styles.applyOnTable(this._elTable);
    styles.applyOnHead(this._elTHead);
    styles.applyOnHeadRow(this._elTHeadRow);
    styles.applyOnBody(this._elTBody);
    if (options) {
      if (options.head) {
        this.setHead(options.head);
      }
      if (options.lines) {
        this.setLines(options.lines);
      }
    }
  }

  public override castedQine(): HTMLDivElement {
    return this.qinedHTML as HTMLDivElement;
  }

  public getLines(): string[][] {
    let result = [];
    this._elTBody.querySelectorAll("tr").forEach((tr) => {
      result.push(this.getColumnsValues(tr));
    });
    return result;
  }

  private getColumnsValues(tr: HTMLTableRowElement): string[] {
    let result = [];
    tr.querySelectorAll("td").forEach((td) => {
      result.push(td.innerText);
    });
    return result;
  }

  public setLines(lines: string[][]): void {
    this.delLines();
    for (const line of lines) {
      this.addLine(line);
    }
  }

  public setHead(head: string[]): void {
    this._elTHeadRow.innerHTML = "";
    for (const cell of head) {
      let th = document.createElement("th");
      th.innerText = cell;
      styles.applyOnHeadCol(th);
      this._elTHeadRow.appendChild(th);
    }
  }

  public getHead(): string[] {
    let result = [];
    this._elTHeadRow.querySelectorAll("th").forEach((th) => {
      result.push(th.innerText);
    });
    return result;
  }

  public addHead(head: string): void {
    let th = document.createElement("th");
    th.innerText = head;
    styles.applyOnHeadCol(th);
    this._elTHeadRow.appendChild(th);
  }

  public addLine(line: any[]): void {
    const tr = document.createElement("tr");
    if (this._linesSize % 2 === 0) {
      styles.applyOnBodyRow(tr);
    } else {
      styles.applyOnBodyRowOdd(tr);
    }
    const row = this._elTBody.children.length;
    if (this._onLineMainAct) {
      tr.style.cursor = "pointer";
      QinTool.qinpel.our.soul.arm.addActionMain(tr, (_) => {
        this._onLineMainAct.forEach((act) => {
          act(row, this.getColumnsValues(tr));
        });
      });
    }
    if (this._onLineMidiAct) {
      tr.style.cursor = "pointer";
      QinTool.qinpel.our.soul.arm.addActionMidi(tr, (_) => {
        this._onLineMidiAct.forEach((act) => {
          act(row, this.getColumnsValues(tr));
        });
      });
    }
    if (this._onLineMenuAct) {
      tr.style.cursor = "pointer";
      QinTool.qinpel.our.soul.arm.addActionMenu(tr, (_) => {
        this._onLineMenuAct.forEach((act) => {
          act(row, this.getColumnsValues(tr));
        });
      });
    }
    let column = 0;
    for (const cell of line) {
      const td = document.createElement("td");
      td.innerText = cell.toString();
      styles.applyOnBodyCol(td);
      if (this._onColumnMainAct) {
        td.style.cursor = "pointer";
        QinTool.qinpel.our.soul.arm.addActionMain(td, (_) => {
          this._onColumnMainAct.forEach((act) => {
            act(row, column, td.innerText);
          });
        });
      }
      if (this._onColumnMidiAct) {
        td.style.cursor = "pointer";
        QinTool.qinpel.our.soul.arm.addActionMidi(td, (_) => {
          this._onColumnMidiAct.forEach((act) => {
            act(row, column, td.innerText);
          });
        });
      }
      if (this._onColumnMenuAct) {
        td.style.cursor = "pointer";
        QinTool.qinpel.our.soul.arm.addActionMenu(td, (_) => {
          this._onColumnMenuAct.forEach((act) => {
            act(row, column, td.innerText);
          });
        });
      }
      tr.appendChild(td);
      column++;
    }
    this._elTBody.appendChild(tr);
    this._linesSize++;
  }

  public delLines() {
    this._elTBody.innerHTML = "";
    this._linesSize = 0;
  }

  public addOnLineMainAct(act: QinTableOnLineAct): void {
    if (!this._onLineMainAct) {
      this._onLineMainAct = [];
    }
    this._onLineMainAct.push(act);
  }

  public delOnLineMainAct(act: QinTableOnLineAct): void {
    if (this._onLineMainAct) {
      const index = this._onLineMainAct.indexOf(act);
      if (index > -1) {
        this._onLineMainAct.splice(index, 1);
      }
    }
  }

  public addOnLineMidiAct(act: QinTableOnLineAct): void {
    if (!this._onLineMidiAct) {
      this._onLineMidiAct = [];
    }
    this._onLineMidiAct.push(act);
  }

  public delOnLineMidiAct(act: QinTableOnLineAct): void {
    if (this._onLineMidiAct) {
      const index = this._onLineMidiAct.indexOf(act);
      if (index > -1) {
        this._onLineMidiAct.splice(index, 1);
      }
    }
  }

  public addOnLineMenuAct(act: QinTableOnLineAct): void {
    if (!this._onLineMenuAct) {
      this._onLineMenuAct = [];
    }
    this._onLineMenuAct.push(act);
  }

  public delOnLineMenuAct(act: QinTableOnLineAct): void {
    if (this._onLineMenuAct) {
      const index = this._onLineMenuAct.indexOf(act);
      if (index > -1) {
        this._onLineMenuAct.splice(index, 1);
      }
    }
  }

  public addOnColumnMainAct(act: QinTableOnColumnAct): void {
    if (!this._onColumnMainAct) {
      this._onColumnMainAct = [];
    }
    this._onColumnMainAct.push(act);
  }

  public delOnColumnMainAct(act: QinTableOnColumnAct): void {
    if (this._onColumnMainAct) {
      const index = this._onColumnMainAct.indexOf(act);
      if (index > -1) {
        this._onColumnMainAct.splice(index, 1);
      }
    }
  }

  public addOnColumnMidiAct(act: QinTableOnColumnAct): void {
    if (!this._onColumnMidiAct) {
      this._onColumnMidiAct = [];
    }
    this._onColumnMidiAct.push(act);
  }

  public delOnColumnMidiAct(act: QinTableOnColumnAct): void {
    if (this._onColumnMidiAct) {
      const index = this._onColumnMidiAct.indexOf(act);
      if (index > -1) {
        this._onColumnMidiAct.splice(index, 1);
      }
    }
  }

  public addOnColumnMenuAct(act: QinTableOnColumnAct): void {
    if (!this._onColumnMenuAct) {
      this._onColumnMenuAct = [];
    }
    this._onColumnMenuAct.push(act);
  }

  public delOnColumnMenuAct(act: QinTableOnColumnAct): void {
    if (this._onColumnMenuAct) {
      const index = this._onColumnMenuAct.indexOf(act);
      if (index > -1) {
        this._onColumnMenuAct.splice(index, 1);
      }
    }
  }
}

export type QinTableSet = {
  head?: string[];
  lines?: string[][];
};

export type QinTableOnLineAct = (row: number, values: string[]) => void;
export type QinTableOnColumnAct = (row: number, column: number, value: string) => void;

const styles = {
  applyOnTable: (el: HTMLElement) => {
    el.style.margin = "0px";
    el.style.padding = "0px";
    el.style.border = "1px solid #9e9e9e";
  },
  applyOnHead: (el: HTMLElement) => {
    el.style.margin = "0px";
    el.style.padding = "0px";
  },
  applyOnHeadRow: (el: HTMLElement) => {
    el.style.margin = "0px";
    el.style.padding = "0px";
    el.style.backgroundColor = "#56cd6436";
  },
  applyOnHeadCol: (el: HTMLElement) => {
    el.style.margin = "0px";
    el.style.padding = "5px";
    el.style.borderRight = "1px solid #5e5e5e";
    el.style.borderBottom = "2px solid #5e5e5e";
  },
  applyOnBody: (el: HTMLElement) => {
    el.style.margin = "0px";
    el.style.padding = "0px";
  },
  applyOnBodyRow: (el: HTMLElement) => {
    el.style.margin = "0px";
    el.style.padding = "0px";
    el.style.backgroundColor = "#5664cd36";
    el.addEventListener("mouseenter", () => {
      el.style.backgroundColor = "#cd566436";
    });
    el.addEventListener("mouseleave", () => {
      el.style.backgroundColor = "#5664cd36";
    });
  },
  applyOnBodyRowOdd: (el: HTMLElement) => {
    el.style.margin = "0px";
    el.style.padding = "0px";
    el.style.backgroundColor = "#cda95636";
    el.addEventListener("mouseenter", () => {
      el.style.backgroundColor = "#cd566436";
    });
    el.addEventListener("mouseleave", () => {
      el.style.backgroundColor = "#cda95636";
    });
  },
  applyOnBodyCol: (el: HTMLElement) => {
    el.style.margin = "0px";
    el.style.padding = "5px";
    el.style.borderRight = "1px solid #5e5e5e";
    el.style.borderBottom = "2px solid #5e5e5e";
  },
};
