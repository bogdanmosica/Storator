import { ExpenseCategory, IExpenseCategory } from '../../models';
import * as fromExpenseCategories from '../actions/expense-categories.action';

export interface ExpenseCategoryState {
  entities: { [id: number]: IExpenseCategory };
  loaded: boolean;
  loading: boolean;
}

export const initialState: ExpenseCategoryState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromExpenseCategories.ExpenseCategoriesAction
): ExpenseCategoryState {

  switch (action.type) {
    case fromExpenseCategories.ExpenseCategoryActionTypes.LoadExpenseCategories: {
      return {
        ...state,
        loading: true,
      } as ExpenseCategoryState;
    }

    case fromExpenseCategories.ExpenseCategoryActionTypes.LoadExpenseCategoriesSuccess: {
      const theExpenseCategories = action.payload;
      const entities = theExpenseCategories.reduce((aEntities: { [id: number]: ExpenseCategory }, aExpenseCategory: ExpenseCategory) => {
        return {
          ...aEntities,
          [aExpenseCategory.name]: aExpenseCategory.toJson(),
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

    case fromExpenseCategories.ExpenseCategoryActionTypes.LoadExpenseCategoriesFail: {
      return {
        ...state,
        loading: false,
        loaded: false,
      } as ExpenseCategoryState;
    }

    default: {
      return {
        ...state,
      } as ExpenseCategoryState;
    }
  }
}

export const getExpenseCategoriesEntities = (state: ExpenseCategoryState) => state.entities;
export const getExpenseCategoriesLoading = (state: ExpenseCategoryState) => state.loading;
export const getExpenseCategoriesLoaded = (state: ExpenseCategoryState) => state.loaded;
