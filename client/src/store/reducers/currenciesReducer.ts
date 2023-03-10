import { CurrenciesActionTypes, CurrenciesState, CurrencyAction } from '../../types';

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
