import { QinNature, QinWaiter, QinWaiters } from "qinpel-res";
import { QinBase } from "./qin-base";

export abstract class QinEdit<T> extends QinBase {
  public constructor(qindred: string, qined: HTMLElement | QinBase) {
    super(qindred + "_" + "edit", qined);
    for (let mayChange of this.mayChange()) {
      mayChange.addEventListener("change", () => {
        this.sendChanged();
      });
    }
  }

  public abstract getNature(): QinNature;

  protected abstract getData(): T;
  protected abstract setData(data: T): void;

  protected abstract mayChange(): HTMLElement[];

  public get value(): T {
    return this.getData();
  }

  public set value(data: T) {
    this.setData(data);
    this.sendChanged();
  }

  public abstract turnReadOnly(): void;
  public abstract turnEditable(): void;
  public abstract isEditable(): boolean;

  private _changedWaiters = new QinWaiters();

  protected sendChanged() {
    this._changedWaiters.sendWaiters(this.getData());
  }

  public getOnChanged(waiter: QinWaiter) {
    this._changedWaiters.addWaiter(waiter);
  }

  public getChangeable(): HTMLElement[] {
    return this.mayChange();
  }
}
