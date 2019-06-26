import { createSelector } from '@ngrx/store';
import { Income } from '../../models';

import * as fromFeature from '../reducers';
import * as fromIncomes from '../reducers/income.reducer';

export const getIncomeState = createSelector(
  fromFeature.getCoreState,
  (state: fromFeature.CoreState) => state.incomes
);

const getIncomesEntitiesAsInterfaces = createSelector(getIncomeState, fromIncomes.getIncomesEntities);
export const getIncomesEntities = createSelector(
  getIncomesEntitiesAsInterfaces,
  (aIncomes) => {
    const theIncomes: { [id: number]: Income } = {};
    const theInterfaces = Object.assign({}, aIncomes);
    Object.keys(theInterfaces).map((aKey) => {
      theIncomes[aKey] = new Income(theInterfaces[aKey]);
    });

    return theIncomes;
  }
);

export const getAllIncomes = createSelector(getIncomesEntities, (entities) => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getIncomesLoaded = createSelector(getIncomeState, fromIncomes.getIncomesLoaded);
export const getIncomesLoading = createSelector(getIncomeState, fromIncomes.getIncomesLoading);
export const getIncomeById = (aIncomeId: number) => createSelector(
  getIncomesEntities,
  (entities) => entities[aIncomeId] || undefined
);
export const hasDetailByIncomeId = (aIncomeId: number) => createSelector(
  getIncomeById(aIncomeId),
  (aIncome) => aIncome ? aIncome.isDetailed() : false
);
