import { Qinpel } from "qinpel-app/types/qinpel";
const refQinpel = (window.frameElement as any).qinpel as Qinpel;

function qinpel(): Qinpel {
  return refQinpel;
}

export const QinTools = {
  qinpel,
};
