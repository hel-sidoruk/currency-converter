import { CurrencyInfo } from '../../types';

export enum CurrenciesActionTypes {
  GET_CURRENCIES = 'GET_CURRENCIES',
}

export interface CurrenciesState {
  currencies: CurrencyInfo[];
}

export interface CurrencyAction {
  type: CurrenciesActionTypes.GET_CURRENCIES;
  payload: { data: CurrencyInfo[] };
}

const initialState: CurrenciesState = {
  currencies: [],
};

export default function currenciesReducer(
  state: CurrenciesState = initialState,
  action: CurrencyAction
) {
  switch (action.type) {
    case CurrenciesActionTypes.GET_CURRENCIES:
      return { ...state, currencies: action.payload.data };
    default:
      return state;
  }
}
