import { createSelector } from '@ngrx/store';
import { IncomeCategory } from '../../models';

import * as fromFeature from '../reducers';
import * as fromIncomeCategories from '../reducers/income-categories.reducer';

export const getIncomeCategoryState = createSelector(
  fromFeature.getCoreState,
  (state: fromFeature.CoreState) => state.incomeCategories
);

const getIncomeCategoriesEntitiesAsInterfaces = createSelector(getIncomeCategoryState, fromIncomeCategories.getIncomeCategoriesEntities);
export const getIncomeCategoriesEntities = createSelector(
  getIncomeCategoriesEntitiesAsInterfaces,
  (aIncomeCategories) => {
    const theIncomeCategories: { [id: number]: IncomeCategory } = {};
    const theInterfaces = Object.assign({}, aIncomeCategories);
    Object.keys(theInterfaces).map((aKey) => {
      theIncomeCategories[aKey] = new IncomeCategory(theInterfaces[aKey]);
    });

    return theIncomeCategories;
  }
);

export const getAllIncomeCategories = createSelector(getIncomeCategoriesEntities, (entities) => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getIncomeCategoriesLoaded = createSelector(getIncomeCategoryState, fromIncomeCategories.getIncomeCategoriesLoaded);
export const getIncomeCategoriesLoading = createSelector(getIncomeCategoryState, fromIncomeCategories.getIncomeCategoriesLoading);
