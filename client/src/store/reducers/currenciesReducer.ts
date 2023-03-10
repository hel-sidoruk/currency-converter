import { CurrencyInfo } from '../../types';

export enum CurrenciesActionTypes {
  GET_CURRENCIES = 'GET_CURRENCIES',
  ADD_CURRENCY = 'ADD_CURRENCY',
  REMOVE_CURRENCY = 'REMOVE_CURRENCY',
  SET_CHANGING = 'SET_CHANGING',
}

export interface CurrenciesState {
  currencies: CurrencyInfo[];
  showed: number[];
  changing: number | null;
}

interface GetCurrenciesAction {
  type: CurrenciesActionTypes.GET_CURRENCIES;
  data: CurrencyInfo[];
}

interface AddCurrencyAction {
  type: CurrenciesActionTypes.ADD_CURRENCY | CurrenciesActionTypes.REMOVE_CURRENCY;
  showed: number[];
}

interface SetChangingAction {
  type: CurrenciesActionTypes.SET_CHANGING;
  changing: number | null;
}

export type CurrencyAction = GetCurrenciesAction | AddCurrencyAction | SetChangingAction;

const initialState: CurrenciesState = {
  currencies: [],
  showed: [431, 451, 456, 449, 452, 100],
  changing: null,
};

export default function currenciesReducer(
  state: CurrenciesState = initialState,
  action: CurrencyAction
) {
  switch (action.type) {
    case CurrenciesActionTypes.GET_CURRENCIES:
      return { ...state, currencies: action.data };
    case CurrenciesActionTypes.ADD_CURRENCY:
    case CurrenciesActionTypes.REMOVE_CURRENCY:
      return { ...state, showed: action.showed };
    case CurrenciesActionTypes.SET_CHANGING:
      return { ...state, changing: action.changing };
    default:
      return state;
  }
}
