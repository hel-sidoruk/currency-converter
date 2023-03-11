import { Dispatch } from 'redux';
import { ThunkActionType } from '../../types';
import { CurrenciesActionTypes, CurrencyAction } from '../../types';

export function getCurrencies(cur: string, value: string): ThunkActionType {
  return async (dispatch: Dispatch<CurrencyAction>) => {
    const result = await fetch(`https://hfgym.by/api?cur=${cur}-${value}`);
    const data = await result.json();

    dispatch({ type: CurrenciesActionTypes.GET_CURRENCIES, data });
  };
}

export function setChanging(id: string | null): ThunkActionType {
  return (dispatch: Dispatch<CurrencyAction>) => {
    dispatch({ type: CurrenciesActionTypes.SET_CHANGING, changing: id });
  };
}

export function addCurrency(id: string): ThunkActionType {
  return (dispatch: Dispatch<CurrencyAction>, getState) => {
    const { showed } = getState().currencies;
    dispatch({ type: CurrenciesActionTypes.ADD_CURRENCY, showed: [...showed, id] });
  };
}

export function removeCurrency(id: string): ThunkActionType {
  return (dispatch: Dispatch<CurrencyAction>, getState) => {
    const { showed } = getState().currencies;
    dispatch({
      type: CurrenciesActionTypes.ADD_CURRENCY,
      showed: showed.filter((el) => el !== id),
    });
  };
}
