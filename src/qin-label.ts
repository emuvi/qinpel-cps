import { QinBase } from "./qin-base";

export class QinLabel extends QinBase {

    private spanLabel = document.createElement("span");

    public constructor(title?: string) {
        super();
        if (title) {
            this.spanLabel.textContent = title;
        }
    }

    public getMain(): HTMLElement {
        return this.spanLabel;
    }

    public setTitle(title: string) {
        this.spanLabel.textContent = title;
    }

    public getTitle(): string {
        return this.spanLabel.textContent;
    }

}