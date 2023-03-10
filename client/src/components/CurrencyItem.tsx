import React, { useState } from 'react';
import useActions from '../hooks/useActions';
import { CurrencyInfo } from '../types';

export const CurrencyItem = ({ item }: { item: CurrencyInfo }) => {
  const { removeCurrency } = useActions();
  const [value, setValue] = useState((+item.count.toFixed(4)).toString());

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (!newValue[newValue.length - 1].match(/(\d|\.)/)) return;
    setValue(e.target.value);
  };

  return (
    <li className="currencies__item">
      <div className="currencies__item-top">
        <span>{item.Cur_Abbreviation}</span>
        <input className="input" type="text" value={value} onChange={onChange} />
      </div>
      <p className="currencies__name">{item.Cur_Name}</p>
      <button className="currencies__button" onClick={() => removeCurrency(item.Cur_ID)}></button>
    </li>
  );
};