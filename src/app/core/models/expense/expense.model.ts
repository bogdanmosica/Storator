import { ExpenseCategory } from "./expense-properties";

export class Expense {
  _id: string;
  name: string;
  ammount: number;
  date: Date;
  category: ExpenseCategory;
}
