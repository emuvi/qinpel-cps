import { QinBase } from "./qin-base";

export class QinLine extends QinBase {
    
    private _divMain: HTMLDivElement = document.createElement("div");

    public constructor(options?: QinLineOptions) {
        super();
        this.initPanel();
        if (options?.initial) {
            for (const viewer of options.initial) {
                viewer.install(this);
            }
        }
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

export type QinLineOptions = {
    initial?: QinBase[]
};

const styles = {
    applyOnPanel: (el: HTMLDivElement) => {
        el.style.display = "flex";
        el.style.flexDirection = "row";
        el.style.flexWrap = "wrap";
    }
}