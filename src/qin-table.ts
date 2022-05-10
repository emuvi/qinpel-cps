import { QinBase } from "./qin-base";

export class QinTable extends QinBase {
  private _elTable = document.createElement("table");
  private _elTHead = document.createElement("thead");
  private _elTHeadRow = document.createElement("tr");
  private _elTBody = document.createElement("tbody");
  private _linesSize = 0;

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
      let line = [];
      tr.querySelectorAll("td").forEach((td) => {
        line.push(td.innerText);
      });
      result.push(line);
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
    let tr = document.createElement("tr");
    if (this._linesSize % 2 === 0) {
      styles.applyOnBodyRow(tr);
    } else {
      styles.applyOnBodyRowOdd(tr);
    }
    for (const cell of line) {
      let td = document.createElement("td");
      td.innerText = cell.toString();
      styles.applyOnBodyCol(td);
      tr.appendChild(td);
    }
    this._elTBody.appendChild(tr);
    this._linesSize++;
  }

  public delLines() {
    this._elTBody.innerHTML = "";
    this._linesSize = 0;
  }
}

export type QinTableSet = {
  head?: string[];
  lines?: string[][];
};

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
