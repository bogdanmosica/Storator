import { ExpenseCategory } from "./expense-properties";

export class ExpenseRequest {
  _id: string;
  name: string;
  ammount: number;
  date: Date;
  category: ExpenseCategory;
}
