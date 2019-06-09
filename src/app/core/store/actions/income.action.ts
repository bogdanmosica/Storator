import { Action } from '@ngrx/store';
import { Income } from '../../models';

export enum IncomeActionTypes {
  CreateIncomeSuccess = '[Incomes] Create Income Success',
  LoadIncomes = '[Incomes] Load Incomes',
  LoadIncomesFail = '[Incomes] Load Incomes Fail',
  LoadIncomesSuccess = '[Incomes] Load Incomes Success',
  LoadIncomeDetail = '[Incomes] Load Income Detail',
  LoadIncomeDetailFail = '[Incomes] Load Income Detail Fail',
  LoadIncomeDetailSuccess = '[Incomes] Load Income Detail Success',
  UpdateIncome = '[Incomes] Update Income',
  UpdateIncomeFail = '[Incomes] Update Income Fail',
  UpdateIncomeSuccess = '[Incomes] Update Income Success',
}

// load Incomes
export class LoadIncomes implements Action {
  readonly type: string = IncomeActionTypes.LoadIncomes;
  constructor(public payload?: any) {}
}

export class LoadIncomesFail implements Action {
  readonly type: string = IncomeActionTypes.LoadIncomesFail;
  constructor(public payload: any) {}
}

export class LoadIncomesSuccess implements Action {
  readonly type: string = IncomeActionTypes.LoadIncomesSuccess;
  constructor(public payload: Income[]) {}
}

// load Income detail
export class LoadIncomeDetail implements Action {
  readonly type: string = IncomeActionTypes.LoadIncomeDetail;
  constructor(public payload: number) {}
}

export class LoadIncomeDetailFail implements Action {
  readonly type: string = IncomeActionTypes.LoadIncomeDetailFail;
  constructor(public payload: any) {}
}

export class LoadIncomeDetailSuccess implements Action {
  readonly type: string = IncomeActionTypes.LoadIncomeDetailSuccess;
  constructor(public payload: Income) {}
}

// create Income
export class CreateIncomeSuccess implements Action {
  readonly type: string = IncomeActionTypes.CreateIncomeSuccess;
  constructor(public payload: Income) {}
}

// update Income
export class UpdateIncome implements Action {
  readonly type: string = IncomeActionTypes.UpdateIncome;
  constructor(public payload: Income) {}
}

export class UpdateIncomeFail implements Action {
  readonly type: string = IncomeActionTypes.UpdateIncomeFail;
  constructor(public payload: any) {}
}

export class UpdateIncomeSuccess implements Action {
  readonly type: string = IncomeActionTypes.UpdateIncomeSuccess;
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
