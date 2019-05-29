import { Expense, IExpense } from '../../models';
import * as fromExpenses from '../actions/expense.action';

export interface ExpenseState {
  entities: { [id: number]: IExpense };
  loaded: boolean;
  loading: boolean;
}

export const initialState: ExpenseState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromExpenses.ExpensesAction
): ExpenseState {

  switch (action.type) {
    case fromExpenses.ExpenseActionTypes.LoadExpenses: {
      return {
        ...state,
        loading: true,
      } as ExpenseState;
    }

    case fromExpenses.ExpenseActionTypes.LoadExpensesSuccess: {
      const theExpenses = action.payload;
      const entities = theExpenses.reduce((aEntities: { [id: number]: Expense }, aExpense: Expense) => {
        return {
          ...aEntities,
          [aExpense._id]: aExpense.toJson(),
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

    case fromExpenses.ExpenseActionTypes.LoadExpensesFail: {
      return {
        ...state,
        loading: false,
        loaded: false,
      } as ExpenseState;
    }

    case fromExpenses.ExpenseActionTypes.CreateExpenseSuccess:
    case fromExpenses.ExpenseActionTypes.LoadExpenseDetailSuccess:
    case fromExpenses.ExpenseActionTypes.UpdateExpenseSuccess: {
      const theExpense: Expense = action.payload;
      const entities = {
        ...state.entities,
        [theExpense._id]: theExpense.toJson(),
      };

      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
      };
    }

    default: {
      return {
        ...state,
      } as ExpenseState;
    }
  }
}

export const getExpensesEntities = (state: ExpenseState) => state.entities;
export const getExpensesLoading = (state: ExpenseState) => state.loading;
export const getExpensesLoaded = (state: ExpenseState) => state.loaded;
