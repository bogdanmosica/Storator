import { Action } from '@ngrx/store';
import { IncomeCategory } from '../../models';

export enum IncomeCategoryActionTypes {
  LoadIncomeCategories = '[IncomeCategories] Load IncomeCategories',
  LoadIncomeCategoriesFail = '[IncomeCategories] Load IncomeCategories Fail',
  LoadIncomeCategoriesSuccess = '[IncomeCategories] Load IncomeCategories Success',
}

// load IncomeCategories
export class LoadIncomeCategories implements Action {
  readonly type: string = IncomeCategoryActionTypes.LoadIncomeCategories;
  constructor(public payload?: any) {}
}

export class LoadIncomeCategoriesFail implements Action {
  readonly type: string = IncomeCategoryActionTypes.LoadIncomeCategoriesFail;
  constructor(public payload: any) {}
}

export class LoadIncomeCategoriesSuccess implements Action {
  readonly type: string = IncomeCategoryActionTypes.LoadIncomeCategoriesSuccess;
  constructor(public payload: IncomeCategory[]) {}
}

// action types
export type IncomeCategoriesAction =
  LoadIncomeCategories
  | LoadIncomeCategoriesFail
  | LoadIncomeCategoriesSuccess;
