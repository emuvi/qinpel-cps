import { QinAction } from "qinpel-res";
import { Qinpel } from "qinpel-app/types/qinpel";
export declare abstract class QinBase {
    qinpel(): Qinpel;
    abstract getMain(): HTMLElement;
    private baseParent;
    private baseChildren;
    private baseDisplay;
    private baseVisibility;
    install(on: QinBase): void;
    unInstall(): void;
    reInstall(): void;
    unDisplay(): void;
    reDisplay(): void;
    unVisible(): void;
    reVisible(): void;
    append(child: QinBase): void;
    remove(child: QinBase): void;
    children(): QinBase[];
    addAction(action: QinAction): void;
}
//# sourceMappingURL=qin-base.d.ts.map