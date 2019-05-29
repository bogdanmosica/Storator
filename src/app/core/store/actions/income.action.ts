import { Action } from "@ngrx/store";
import { Income } from "../../models";

export enum IncomeActionTypes {
  CreateIncomeSuccess = "[Incomes] Create Income Success",
  LoadIncomes = "[Incomes] Load Incomes",
  LoadIncomesFail = "[Incomes] Load Incomes Fail",
  LoadIncomesSuccess = "[Incomes] Load Incomes Success",
  LoadIncomeDetail = "[Incomes] Load Income Detail",
  LoadIncomeDetailFail = "[Incomes] Load Income Detail Fail",
  LoadIncomeDetailSuccess = "[Incomes] Load Income Detail Success",
  UpdateIncome = "[Incomes] Update Income",
  UpdateIncomeFail = "[Incomes] Update Income Fail",
  UpdateIncomeSuccess = "[Incomes] Update Income Success",
}

// load Incomes
export class LoadIncomes implements Action {
  readonly type: string = IncomeActionTypes.LoadIncomes.toString();
  constructor(public payload?: any) {}
}

export class LoadIncomesFail implements Action {
  readonly type: string = IncomeActionTypes.LoadIncomesFail.toString();
  constructor(public payload: any) {}
}

export class LoadIncomesSuccess implements Action {
  readonly type: string = IncomeActionTypes.LoadIncomesSuccess.toString();
  constructor(public payload: Income[]) {}
}

// load Income detail
export class LoadIncomeDetail implements Action {
  readonly type: string = IncomeActionTypes.LoadIncomeDetail.toString();
  constructor(public payload: number) {}
}

export class LoadIncomeDetailFail implements Action {
  readonly type: string = IncomeActionTypes.LoadIncomeDetailFail.toString();
  constructor(public payload: any) {}
}

export class LoadIncomeDetailSuccess implements Action {
  readonly type: string = IncomeActionTypes.LoadIncomeDetailSuccess.toString();
  constructor(public payload: Income) {}
}

// create Income
export class CreateIncomeSuccess implements Action {
  readonly type: string = IncomeActionTypes.CreateIncomeSuccess.toString();
  constructor(public payload: Income) {}
}

// update Income
export class UpdateIncome implements Action {
  readonly type: string = IncomeActionTypes.UpdateIncome.toString();
  constructor(public payload: Income) {}
}

export class UpdateIncomeFail implements Action {
  readonly type: string = IncomeActionTypes.UpdateIncomeFail.toString();
  constructor(public payload: any) {}
}

export class UpdateIncomeSuccess implements Action {
  readonly type: string = IncomeActionTypes.UpdateIncomeSuccess.toString();
  constructor(public payload: Income) {}
}

// action types
export type IncomesAction =
  CreateIncomeSuccess
  | LoadIncomes
  | LoadIncomesFail
  | LoadIncomesSuccess
  | LoadIncomeDetail
  | LoadIncomeDetailFail
  | LoadIncomeDetailSuccess
  | UpdateIncome
  | UpdateIncomeFail
  | UpdateIncomeSuccess;
