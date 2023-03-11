import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store/reducers';

export type ThunkActionType = ThunkAction<void, RootState, unknown, Action<string>>;

export interface CurrencyInfo {
  Cur_Abbreviation: string;
  Cur_ID: number;
  Cur_Name: string;
  count: number;
}

export enum CurrenciesActionTypes {
  GET_CURRENCIES = 'GET_CURRENCIES',
  ADD_CURRENCY = 'ADD_CURRENCY',
  REMOVE_CURRENCY = 'REMOVE_CURRENCY',
  SET_CHANGING = 'SET_CHANGING',
}

export interface CurrenciesState {
  currencies: CurrencyInfo[];
  initial: string[];
  showed: string[];
  changing: string | null;
}

interface GetCurrenciesAction {
  type: CurrenciesActionTypes.GET_CURRENCIES;
  data: CurrencyInfo[];
}

interface AddCurrencyAction {
  type: CurrenciesActionTypes.ADD_CURRENCY | CurrenciesActionTypes.REMOVE_CURRENCY;
  showed: string[];
}

interface SetChangingAction {
  type: CurrenciesActionTypes.SET_CHANGING;
  changing: string | null;
}

export type CurrencyAction = GetCurrenciesAction | AddCurrencyAction | SetChangingAction;
