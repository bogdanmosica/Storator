import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import * as fromIncomes from './income.reducer';
import * as fromIncomeCategories from './income-categories.reducer';
import * as fromExpenses from './expense.reducer';
import * as fromExpenseCategories from './expense-categories.reducer';
import * as fromLoading from './loading.reducer';

export interface State {
  core: CoreState;
}

export interface CoreState {
  incomes: fromIncomes.IncomeState;
  expenses: fromExpenses.ExpenseState;
  incomeCategories: fromIncomeCategories.IncomeCategoryState;
  expenseCategories: fromExpenseCategories.ExpenseCategoryState;
  loading: fromLoading.LoadingState;
}

export const reducers: ActionReducerMap<CoreState> = {
  incomes: fromIncomes.reducer,
  expenses: fromExpenses.reducer,
  incomeCategories: fromIncomeCategories.reducer,
  expenseCategories: fromExpenseCategories.reducer,
  loading: fromLoading.reducer,
};

export const getCoreState = createFeatureSelector<CoreState>('core');

export { IncomeState } from './income.reducer';
export { ExpenseState } from './expense.reducer';
export { IncomeCategoryState } from './income-categories.reducer';
export { ExpenseCategoryState } from './expense-categories.reducer';
export { LoadingState } from './loading.reducer';
