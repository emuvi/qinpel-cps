import { QinNature } from "qinpel-res";
import { QinBase } from "./qin-base";

export abstract class QinEdit extends QinBase {
  public constructor(qindred: string, qined: HTMLElement | QinBase) {
    super(qindred + "_" + "edit", qined);
  }

  public abstract getNature(): QinNature;
  public abstract getData(): any;
  public abstract setData(data: any): void;
  public abstract turnReadOnly(): void;
  public abstract turnEditable(): void;
  public abstract isEditable(): boolean;
}
