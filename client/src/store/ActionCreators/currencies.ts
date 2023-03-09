import { Dispatch } from 'redux';
import { ThunkActionType } from '../../types';
import { CurrenciesActionTypes, CurrencyAction } from '../reducers/currenciesReducer';

export function getCurrencies(): ThunkActionType {
  return async (dispatch: Dispatch<CurrencyAction>) => {
    const result = await fetch('http://localhost:5000/api');
    const data = await result.json();

    dispatch({ type: CurrenciesActionTypes.GET_CURRENCIES, payload: { data } });
  };
}
