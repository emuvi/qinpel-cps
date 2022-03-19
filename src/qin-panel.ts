import { QinBase } from "./qin-base";

export class QinPanel extends QinBase {
    
    private _divMain: HTMLDivElement = document.createElement("div");

    public constructor() {
        super();
    }

    public getMain(): HTMLDivElement {
        return this._divMain;
    }

    public get divMain(): HTMLDivElement  {
		return this._divMain;
	}

}