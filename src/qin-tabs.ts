import { QinSkin } from "qinpel-res";
import { QinBase } from "./qin-base";
import { QinButton } from "./qin-button";
import { QinColumn } from "./qin-column";
import { QinLabel } from "./qin-label";
import { QinLine } from "./qin-line";
import { QinPanel } from "./qin-panel";

export class QinTabs extends QinColumn {
  private _qinTabs = new QinLine();
  private _qinPanel = new QinPanel();

  private _tabs: QinTabRef[] = [];

  public constructor(options?: QinTabsSet) {
    super();
    this._qinTabs.install(this);
    this._qinPanel.install(this);
    if (options?.initial) {
      for (const tab of options?.initial) {
        this.addTab(tab);
      }
    }
  }

  public get qinTabs(): QinLine {
    return this._qinTabs;
  }

  public get qinPanel(): QinPanel {
    return this._qinPanel;
  }

  public addTab(tab: QinTab) {
    const button = new QinButton({ label: new QinLabel(tab.title) });
    button.style.putAsBackground(QinSkin.styles.ColorInactive);
    button.addAction((qinEvent) => {
      if (qinEvent.isMain) {
        this.showViewer(tab.viewer);
      }
    });
    button.install(this._qinTabs);
    let first = this._tabs.length == 0;
    let tabRef = {
      title: tab.title,
      viewer: tab.viewer,
      button,
    };
    this._tabs.push(tabRef);
    if (first) {
      this.showViewer(tab.viewer);
    }
  }

  public showTab(title: string) {
    for (const tab of this._tabs) {
      if (tab.title == title) {
        this.showViewer(tab.viewer);
        break;
      }
    }
  }

  public showViewer(viewer: QinBase) {
    this._qinPanel.unInstallChildren();
    viewer.install(this._qinPanel);
    for (const tab of this._tabs) {
      if (tab.viewer == viewer) {
        tab.button.style.putAsBackground(QinSkin.styles.ColorActive);
      } else {
        tab.button.style.putAsBackground(QinSkin.styles.ColorInactive);
      }
    }
  }
}

export type QinTabsSet = {
  initial?: QinTab[];
};

export type QinTab = {
  title: string;
  viewer: QinBase;
};

type QinTabRef = {
  title: string;
  viewer: QinBase;
  button: QinButton;
};
