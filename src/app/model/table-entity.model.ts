import {StatusEnum} from "../enums/status.enum";
import {MonthsEnum} from "../enums/months.enum";
import {PhaseEnum} from "../enums/phase.enum";

export interface TableEntityModel {
  status: StatusEnum;
  supplierName: string;
  month: MonthsEnum;
  phase: PhaseEnum;
  order: number;
  amount: number;
}
