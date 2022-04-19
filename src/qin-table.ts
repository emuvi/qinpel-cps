import { QinEdit } from "./qin-edit";

export class QinTable extends QinEdit {
  private _elMain = document.createElement("div");
  private _elTable = document.createElement("table");
  private _elTHead = document.createElement("thead");
  private _elTBody = document.createElement("tbody");

  public constructor() {
    super();
    this._elMain.appendChild(this._elTable);
    this._elTable.appendChild(this._elTHead);
    this._elTable.appendChild(this._elTBody);
  }

  public getMain(): HTMLDivElement {
    return this._elMain;
  }

  public getData(): any[][] {
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

  public setData(data: any[][]): void {
    this.delLines();
    for (const line of data) {
      this.addLine(line);
    }
  }

  public setHead(head: string[]): void {
    this._elTHead.innerHTML = "";
    for (const cell of head) {
      let th = document.createElement("th");
      th.innerText = cell;
      this._elTHead.appendChild(th);
    }
  }

  public addLine(line: any[]): void {
    let tr = document.createElement("tr");
    for (const cell of line) {
      let td = document.createElement("td");
      td.innerText = cell.toString();
      tr.appendChild(td);
    }
    this._elTBody.appendChild(tr);
  }

  public delLines() {
    this._elTBody.innerHTML = "";
  }
}
