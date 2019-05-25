import { IncomeCategory } from "./income-properties";

export interface IncomeRequest {
  _id: string;
  name: string;
  ammount: number;
  date: Date;
  category: IncomeCategory;
}
