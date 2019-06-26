import { createSelector } from '@ngrx/store';
import { Expense } from '../../models';

import * as fromFeature from '../reducers';
import * as fromExpenses from '../reducers/expense.reducer';

export const getExpenseState = createSelector(
  fromFeature.getCoreState,
  (state: fromFeature.CoreState) => state.expenses
);

const getExpensesEntitiesAsInterfaces = createSelector(getExpenseState, fromExpenses.getExpensesEntities);
export const getExpensesEntities = createSelector(
  getExpensesEntitiesAsInterfaces,
  (aExpenses) => {
    const theExpenses: { [id: number]: Expense } = {};
    const theInterfaces = Object.assign({}, aExpenses);
    Object.keys(theInterfaces).map((aKey) => {
      theExpenses[aKey] = new Expense(theInterfaces[aKey]);
    });

    return theExpenses;
  }
);

export const getAllExpenses = createSelector(getExpensesEntities, (entities) => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getExpensesLoaded = createSelector(getExpenseState, fromExpenses.getExpensesLoaded);
export const getExpensesLoading = createSelector(getExpenseState, fromExpenses.getExpensesLoading);
export const getExpenseById = (aExpenseId: number) => createSelector(
  getExpensesEntities,
  (entities) => entities[aExpenseId] || undefined
);
export const hasDetailByExpenseId = (aExpenseId: number) => createSelector(
  getExpenseById(aExpenseId),
  (aExpense) => aExpense ? aExpense.isDetailed() : false
);
