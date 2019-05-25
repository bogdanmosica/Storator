import { IncomeCategory } from "./income-properties";

export class Income {
  _id: string;
  name: string;
  ammount: number;
  date: Date;
  category: IncomeCategory;
}
