import { IncomeCategory, IIncomeCategory } from '../../models';
import * as fromIncomeCategories from '../actions/income-categories.action';

export interface IncomeCategoryState {
  entities: { [id: number]: IIncomeCategory };
  loaded: boolean;
  loading: boolean;
}

export const initialState: IncomeCategoryState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromIncomeCategories.IncomeCategoriesAction
): IncomeCategoryState {

  switch (action.type) {
    case fromIncomeCategories.IncomeCategoryActionTypes.LoadIncomeCategories: {
      return {
        ...state,
        loading: true,
      } as IncomeCategoryState;
    }

    case fromIncomeCategories.IncomeCategoryActionTypes.LoadIncomeCategoriesSuccess: {
      const theIncomeCategories = action.payload;
      const entities = theIncomeCategories.reduce((aEntities: { [id: number]: IncomeCategory }, aIncomeCategory: IncomeCategory) => {
        return {
          ...aEntities,
          [aIncomeCategory.name]: aIncomeCategory.toJson(),
        };
      }, {
        ...state.entities,
      });

      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
      };
    }

    case fromIncomeCategories.IncomeCategoryActionTypes.LoadIncomeCategoriesFail: {
      return {
        ...state,
        loading: false,
        loaded: false,
      } as IncomeCategoryState;
    }

    default: {
      return {
        ...state,
      } as IncomeCategoryState;
    }
  }
}

export const getIncomeCategoriesEntities = (state: IncomeCategoryState) => state.entities;
export const getIncomeCategoriesLoading = (state: IncomeCategoryState) => state.loading;
export const getIncomeCategoriesLoaded = (state: IncomeCategoryState) => state.loaded;
