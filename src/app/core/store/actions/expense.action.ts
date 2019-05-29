import { Action } from '@ngrx/store';
import { Expense } from '../../models';

export enum ExpenseActionTypes {
  CreateExpenseSuccess = '[Expenses] Create Expense Success',
  LoadExpenses = '[Expenses] Load Expenses',
  LoadExpensesFail = '[Expenses] Load Expenses Fail',
  LoadExpensesSuccess = '[Expenses] Load Expenses Success',
  LoadExpenseDetail = '[Expenses] Load Expense Detail',
  LoadExpenseDetailFail = '[Expenses] Load Expense Detail Fail',
  LoadExpenseDetailSuccess = '[Expenses] Load Expense Detail Success',
  UpdateExpense = '[Expenses] Update Expense',
  UpdateExpenseFail = '[Expenses] Update Expense Fail',
  UpdateExpenseSuccess = '[Expenses] Update Expense Success',
}

// load Expenses
export class LoadExpenses implements Action {
  readonly type: string = ExpenseActionTypes.LoadExpenses.toString().toString();
  constructor(public payload?: any) {}
}

export class LoadExpensesFail implements Action {
  readonly type: string = ExpenseActionTypes.LoadExpensesFail.toString();
  constructor(public payload: any) {}
}

export class LoadExpensesSuccess implements Action {
  readonly type: string = ExpenseActionTypes.LoadExpensesSuccess.toString();
  constructor(public payload: Expense[]) {}
}

// load Expense detail
export class LoadExpenseDetail implements Action {
  readonly type: string = ExpenseActionTypes.LoadExpenseDetail.toString();
  constructor(public payload: number) {}
}

export class LoadExpenseDetailFail implements Action {
  readonly type: string = ExpenseActionTypes.LoadExpenseDetailFail.toString();
  constructor(public payload: any) {}
}

export class LoadExpenseDetailSuccess implements Action {
  readonly type: string = ExpenseActionTypes.LoadExpenseDetailSuccess.toString();
  constructor(public payload: Expense) {}
}

// create Expense
export class CreateExpenseSuccess implements Action {
  readonly type: string = ExpenseActionTypes.CreateExpenseSuccess.toString();
  constructor(public payload: Expense) {}
}

// update Expense
export class UpdateExpense implements Action {
  readonly type: string = ExpenseActionTypes.UpdateExpense.toString();
  constructor(public payload: Expense) {}
}

export class UpdateExpenseFail implements Action {
  readonly type: string = ExpenseActionTypes.UpdateExpenseFail.toString();
  constructor(public payload: any) {}
}

export class UpdateExpenseSuccess implements Action {
  readonly type: string = ExpenseActionTypes.UpdateExpenseSuccess.toString();
  constructor(public payload: Expense) {}
}

// action types
export type ExpensesAction =
  CreateExpenseSuccess
  | LoadExpenses
  | LoadExpensesFail
  | LoadExpensesSuccess
  | LoadExpenseDetail
  | LoadExpenseDetailFail
  | LoadExpenseDetailSuccess
  | UpdateExpense
  | UpdateExpenseFail
  | UpdateExpenseSuccess;
