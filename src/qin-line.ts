import { QinBase } from "./qin-base";

export class QinLine extends QinBase {
    
    private _divMain: HTMLDivElement = document.createElement("div");

    public constructor() {
        super();
        this.initPanel();
    }

    private initPanel() {
        styles.applyOnPanel(this._divMain);
    }

    public getMain(): HTMLDivElement {
        return this._divMain;
    }

    /**
     * Getter divMain
     * @return {HTMLDivElement }
     */
	public get divMain(): HTMLDivElement  {
		return this._divMain;
	}

}

const styles = {
    applyOnPanel: (el: HTMLDivElement) => {
        el.style.display = "flex";
        el.style.flexDirection = "row";
        el.style.flexWrap = "wrap";
    }
}