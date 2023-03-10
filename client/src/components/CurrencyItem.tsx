import React, { useEffect, useState } from 'react';
import useActions from '../hooks/useActions';
import { CurrencyInfo } from '../types';

export const CurrencyItem = ({ item }: { item: CurrencyInfo }) => {
  const { removeCurrency, getCurrencies } = useActions();
  const [value, setValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (newValue && !newValue[newValue.length - 1].match(/(\d|\.)/)) return;
    setValue(e.target.value);
    if (!newValue.endsWith('.')) getCurrencies(item.Cur_Abbreviation, newValue);
  };

  useEffect(() => {
    setValue((+item.count.toFixed(4)).toString());
  }, [item]);

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
