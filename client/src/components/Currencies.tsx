import React from 'react';
import useTypedSelector from '../hooks/useTypedSelector';
import { CurrencyItem } from './CurrencyItem';

export const Currencies = () => {
  const { initial, showed } = useTypedSelector((state) => state.currencies);

  return (
    <ul>
      {initial.map((currency) => (
        <CurrencyItem item={currency} key={currency} />
      ))}
      {showed.map((currency) => (
        <CurrencyItem item={currency} key={currency} removeBtn />
      ))}
    </ul>
  );
};
