import { Qinpel } from "qinpel-app/types/qinpel";
const refQinpel = (window.frameElement as any).qinpel as Qinpel;

export const QinTool = {
  qinpel: refQinpel,
};
