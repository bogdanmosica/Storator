import { Action } from '@ngrx/store';
import { ExpenseCategory } from '../../models';

export enum ExpenseCategoryActionTypes {
  LoadExpenseCategories = '[ExpenseCategories] Load ExpenseCategories',
  LoadExpenseCategoriesFail = '[ExpenseCategories] Load ExpenseCategories Fail',
  LoadExpenseCategoriesSuccess = '[ExpenseCategories] Load ExpenseCategories Success',
}

// load ExpenseCategories
export class LoadExpenseCategories implements Action {
  readonly type: string = ExpenseCategoryActionTypes.LoadExpenseCategories;
  constructor(public payload?: any) {}
}

export class LoadExpenseCategoriesFail implements Action {
  readonly type: string = ExpenseCategoryActionTypes.LoadExpenseCategoriesFail;
  constructor(public payload: any) {}
}

export class LoadExpenseCategoriesSuccess implements Action {
  readonly type: string = ExpenseCategoryActionTypes.LoadExpenseCategoriesSuccess;
  constructor(public payload: ExpenseCategory[]) {}
}

// action types
export type ExpenseCategoriesAction =LoadExpenseCategories
  | LoadExpenseCategoriesFail
  | LoadExpenseCategoriesSuccess;
