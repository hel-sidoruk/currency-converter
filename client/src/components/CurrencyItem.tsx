import React, { useEffect, useState } from 'react';
import useActions from '../hooks/useActions';
import useTypedSelector from '../hooks/useTypedSelector';

export const CurrencyItem = ({ item, removeBtn }: { item: string; removeBtn?: boolean }) => {
  const { removeCurrency, getCurrencies, setChanging } = useActions();
  const { changing, currencies } = useTypedSelector((state) => state.currencies);
  const [value, setValue] = useState('');

  const currency = currencies.find((el) => el.Cur_Abbreviation === item);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (newValue && !newValue[newValue.length - 1].match(/(\d|\.)/)) return;
    setValue(e.target.value);
    if (!newValue.endsWith('.')) getCurrencies(item, newValue);
  };

  const onFocus = () => setChanging(item);
  const onBlur = () => setChanging(null);

  useEffect(() => {
    if (!(changing === item) && currency) setValue((+currency.count.toFixed(4)).toString());
  }, [item, changing, currency]);

  return (
    <li className="currencies__item">
      <div className="currencies__item-top">
        <span>{item}</span>
        <input
          onFocus={onFocus}
          onBlur={onBlur}
          className="input"
          type="text"
          value={value}
          onChange={onChange}
        />
      </div>
      <p className="currencies__name">{currency?.Cur_Name}</p>
      {removeBtn && (
        <button className="currencies__button" onClick={() => removeCurrency(item)}></button>
      )}
    </li>
  );
};
