import { Income, IIncome } from '../../models';
import * as fromIncomes from '../actions/income.action';

export interface IncomeState {
  entities: { [id: number]: IIncome };
  loaded: boolean;
  loading: boolean;
}

export const initialState: IncomeState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromIncomes.IncomesAction
): IncomeState {

  switch (action.type) {
    case fromIncomes.IncomeActionTypes.LoadIncomes: {
      return {
        ...state,
        loading: true,
      } as IncomeState;
    }

    case fromIncomes.IncomeActionTypes.LoadIncomesSuccess: {
      const theIncomes = action.payload;
      const entities = theIncomes.reduce((aEntities: { [id: number]: Income }, aIncome: Income) => {
        return {
          ...aEntities,
          [aIncome._id]: aIncome.toJson(),
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

    case fromIncomes.IncomeActionTypes.LoadIncomesFail: {
      return {
        ...state,
        loading: false,
        loaded: false,
      } as IncomeState;
    }

    case fromIncomes.IncomeActionTypes.CreateIncomeSuccess:
    case fromIncomes.IncomeActionTypes.LoadIncomeDetailSuccess:
    case fromIncomes.IncomeActionTypes.UpdateIncomeSuccess: {
      const theIncome: Income = action.payload;
      const entities = {
        ...state.entities,
        [theIncome._id]: theIncome.toJson(),
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
      } as IncomeState;
    }
  }
}

export const getIncomesEntities = (state: IncomeState) => state.entities;
export const getIncomesLoading = (state: IncomeState) => state.loading;
export const getIncomesLoaded = (state: IncomeState) => state.loaded;
