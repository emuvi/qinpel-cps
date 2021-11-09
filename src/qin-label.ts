import { QinBase } from "./qin-base";

export class QinLabel extends QinBase {

    private _spanMain: HTMLSpanElement = document.createElement("span");

    public constructor(title?: string) {
        super();
        if (title) {
            this._spanMain.textContent = title;
        }
    }

    public getMain(): HTMLSpanElement {
        return this._spanMain;
    }

    public setTitle(title: string) {
        this._spanMain.textContent = title;
    }

    public getTitle(): string {
        return this._spanMain.textContent;
    }

    /**
     * Getter spanMain
     * @return {HTMLSpanElement }
     */
	public get spanMain(): HTMLSpanElement  {
		return this._spanMain;
	}

}