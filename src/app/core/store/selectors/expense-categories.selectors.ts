import { createSelector } from '@ngrx/store';
import { ExpenseCategory } from '../../models';

import * as fromFeature from '../reducers';
import * as fromExpenseCategories from '../reducers/expense-categories.reducer';

export const getExpenseCategoryState = createSelector(
  fromFeature.getCoreState,
  (state: fromFeature.CoreState) => state.expenseCategories
);

const getExpenseCategoriesEntitiesAsInterfaces = createSelector(getExpenseCategoryState, fromExpenseCategories.getExpenseCategoriesEntities);
export const getExpenseCategoriesEntities = createSelector(
  getExpenseCategoriesEntitiesAsInterfaces,
  (aExpenseCategories) => {
    const theExpenseCategories: { [id: number]: ExpenseCategory } = {};
    const theInterfaces = Object.assign({}, aExpenseCategories);
    Object.keys(theInterfaces).map((aKey) => {
      theExpenseCategories[aKey] = new ExpenseCategory(theInterfaces[aKey]);
    });

    return theExpenseCategories;
  }
);

export const getAllExpenseCategories = createSelector(getExpenseCategoriesEntities, (entities) => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getExpenseCategoriesLoaded = createSelector(getExpenseCategoryState, fromExpenseCategories.getExpenseCategoriesLoaded);
export const getExpenseCategoriesLoading = createSelector(getExpenseCategoryState, fromExpenseCategories.getExpenseCategoriesLoading);
