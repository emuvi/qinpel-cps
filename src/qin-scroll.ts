import { QinPanel, QinPanelSet } from './qin-panel';

export class QinScroll extends QinPanel {
  public constructor(options?: QinPanelSet) {
    super(options);
    this.style.putAsScroll();
  }
}