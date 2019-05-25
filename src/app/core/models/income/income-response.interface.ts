import { IncomeCategory } from "./income-properties";

export interface IncomeResponse {
  _id: string;
  name: string;
  ammount: number;
  date: Date;
  category: IncomeCategory;
}
