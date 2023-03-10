import { Dispatch } from 'redux';
import { ThunkActionType } from '../../types';
import { CurrenciesActionTypes, CurrencyAction } from '../reducers/currenciesReducer';

export function getCurrencies(cur: string, value: string): ThunkActionType {
  return async (dispatch: Dispatch<CurrencyAction>) => {
    const result = await fetch(`http://localhost:5000/api?cur=${cur}-${value}`);
    const data = await result.json();

    dispatch({ type: CurrenciesActionTypes.GET_CURRENCIES, data });
  };
}

export function setChanging(id: number | null): ThunkActionType {
  return (dispatch: Dispatch<CurrencyAction>) => {
    dispatch({ type: CurrenciesActionTypes.SET_CHANGING, changing: id });
  };
}

export function addCurrency(id: number): ThunkActionType {
  return (dispatch: Dispatch<CurrencyAction>, getState) => {
    const { showed } = getState().currencies;
    dispatch({ type: CurrenciesActionTypes.ADD_CURRENCY, showed: [...showed, id] });
  };
}

export function removeCurrency(id: number): ThunkActionType {
  return (dispatch: Dispatch<CurrencyAction>, getState) => {
    const { showed } = getState().currencies;
    dispatch({
      type: CurrenciesActionTypes.ADD_CURRENCY,
      showed: showed.filter((el) => el !== id),
    });
  };
}
