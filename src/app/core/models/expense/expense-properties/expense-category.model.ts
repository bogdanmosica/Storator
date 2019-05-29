import { ExpenseCategoryResponse } from "expense-category-response.interface";
import { ExpenseCategoryRequest } from "expense-category-request.interface";

export interface IExpenseCategory {
  name: string;
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
}

export interface ExpenseCategoryForm {
  name: string;
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
}

export class ExpenseCategory {
  name: string;
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;

  constructor(aData?: IExpenseCategory) {
    if (aData) {
      this.fromJson(aData);
    }
  }

  fromExpenseCategoryResponseJson(aJson: ExpenseCategoryResponse) {
    this.name = aJson.name;
    this.backgroundColor = aJson.backgroundColor;
    this.borderColor = aJson.borderColor;
    this.borderWidth = aJson.borderWidth;
  }

  fromForm(aJson: any) {
    this.name = aJson.name;
    this.backgroundColor = aJson.backgroundColor;
    this.borderColor = aJson.borderColor;
    this.borderWidth = aJson.borderWidth;
  }

  fromJson(aJson: IExpenseCategory) {
    this.name = aJson.name;
    this.backgroundColor = aJson.backgroundColor;
    this.borderColor = aJson.borderColor;
    this.borderWidth = aJson.borderWidth;
  }

  toJson(): IExpenseCategory {
    return {
      name: this.name,
      backgroundColor: this.backgroundColor,
      borderColor: this.borderColor,
      borderWidth: this.borderWidth,
    } as IExpenseCategory;
  }
}
