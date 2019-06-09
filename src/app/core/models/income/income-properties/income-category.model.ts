import { IncomeCategoryResponse } from "../income-properties/income-category-response.interface";
import { IncomeCategoryRequest } from "../income-properties/income-category-request.interface";

export interface IIncomeCategory {
  name: string;
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
}

export interface IncomeCategoryForm {
  name: string;
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
}

export class IncomeCategory {
  name: string;
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;

  constructor(aData?: IIncomeCategory) {
    if (aData) {
      this.fromJson(aData);
    }
  }

  fromIncomeCategoryResponseJson(aJson: IncomeCategoryResponse) {
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

  fromJson(aJson: IIncomeCategory) {
    this.name = aJson.name;
    this.backgroundColor = aJson.backgroundColor;
    this.borderColor = aJson.borderColor;
    this.borderWidth = aJson.borderWidth;
  }

  toJson(): IIncomeCategory {
    return {
      name: this.name,
      backgroundColor: this.backgroundColor,
      borderColor: this.borderColor,
      borderWidth: this.borderWidth,
    } as IIncomeCategory;
  }
}
