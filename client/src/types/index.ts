import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store/reducers';

export interface CurrencyInfo {
  Cur_Abbreviation: string;
  Cur_ID: number;
  Cur_Name: string;
  Cur_OfficialRate: number;
  Cur_Scale: number;
  Date: string;
  count: number;
}

export type ThunkActionType = ThunkAction<void, RootState, unknown, Action<string>>;
