import { ExpenseCategory } from "./expense-properties";
import { ExpenseResponse,  } from "./expense-response.interface";
import { ExpenseRequest,  } from "./expense-request.interface";

export interface IExpense {
  _id: string;
  name: string;
  ammount: number;
  date: Date;
  category: ExpenseCategory;
}

export class Expense {
  _id: string;
  name: string;
  ammount: number;
  date: Date;
  category: ExpenseCategory;


  constructor(aData?: any) {
    if (aData) {
      this.fromJson(aData);
    }
  }

  get categoryName(): string {
    return this.category.name || undefined;
  }

  fromExpenseResponseJson(aJson: ExpenseResponse) {
    this._id = aJson._id;
    this.name = aJson.name;
    this.ammount = aJson.ammount;
    this.date = aJson.date;
    this.category = aJson.category;
  }

  fromForm(aJson: any) {
  this._id = aJson._id;
  this.name = aJson.name || undefined;
  this.ammount = aJson.ammount || undefined;
  this.date = aJson.date || undefined;
  this.category = aJson.category ? new ExpenseCategory(aJson.category) : undefined;
}

  fromJson(aJson: IExpense) {
    this._id = aJson._id;
    this.name = aJson.name || undefined;
    this.ammount = aJson.ammount || undefined;
    this.date = aJson.date || undefined;
    this.category = aJson.category ? new ExpenseCategory(aJson.category) : undefined;
  }

  toJson(): IExpense {
    return {
      _id: this._id,
      name: this.name,
      ammount: this.ammount,
      date: this.date,
      category: this.category ? this.category.toJson() : undefined,
    } as IExpense;
  }
}
