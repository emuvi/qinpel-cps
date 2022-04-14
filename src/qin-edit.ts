import { QinBase } from "./qin-base";

export abstract class QinEdit extends QinBase {
  public abstract getData(): any;
  public abstract setData(data: any): void;
}
