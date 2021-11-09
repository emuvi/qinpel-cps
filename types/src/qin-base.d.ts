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
    putAsBody(): void;
    putAsEdit(): void;
    putAsScroll(): void;
    putAsCentered(): void;
    putAsDisplayInlineBlock(): void;
    putAsDisplayFlex(): void;
    putAsFlexMin(): void;
    putAsFlexMax(): void;
    putAsWidth(width: number): void;
    putAsHeight(height: number): void;
    putAsSize(width: number, height: number): void;
    putAsMinWidth(width: number): void;
    putAsMinHeight(height: number): void;
    putAsMinSize(width: number, height: number): void;
    putAsMaxWidth(width: number): void;
    putAsMaxHeight(height: number): void;
    putAsMaxSize(width: number, height: number): void;
}
//# sourceMappingURL=qin-base.d.ts.map