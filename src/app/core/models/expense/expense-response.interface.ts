import { ExpenseCategory } from "./expense-properties";

export interface ExpenseResponse {
  _id: string;
  name: string;
  ammount: number;
  date: Date;
  category: ExpenseCategory;
}
