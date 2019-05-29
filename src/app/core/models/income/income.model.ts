import { IncomeCategory, IncomeCategory } from "./income-properties";
import { IncomeResponse,  } from "./income-response.interface";
import { IncomeRequest,  } from "./income-request.interface";

export interface IIncome {
  _id: string;
  name: string;
  ammount: number;
  date: Date;
  category: IncomeCategory;
}

export class Income {
  _id: string;
  name: string;
  ammount: number;
  date: Date;
  category: IncomeCategory;


  constructor(aData?: any) {
    if (aData) {
      this.fromJson(aData);
    }
  }

  get categoryName(): string {
    return this.category.name || undefined;
  }

  fromIncomeResponseJson(aJson: IncomeResponse) {
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
    this.category = aJson.category ? new IncomeCategory(aJson.category) : undefined;
  }

  fromJson(aJson: IIncome) {
    this._id = aJson._id;
    this.name = aJson.name || undefined;
    this.ammount = aJson.ammount || undefined;
    this.date = aJson.date || undefined;
    this.category = aJson.category ? new IncomeCategory(aJson.category) : undefined;
  }

  toJson(): IIncome {
    return {
      _id: this._id,
      name: this.name,
      ammount: this.ammount,
      date: this.date,
      category: this.category ? this.category.toJson() : undefined,
    } as IIncome;
  }
}
