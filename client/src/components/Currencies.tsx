import React from 'react';
import useTypedSelector from '../hooks/useTypedSelector';
import { CurrencyItem } from './CurrencyItem';

export const Currencies = () => {
  const { currencies, showed } = useTypedSelector((state) => state.currencies);

  return (
    <ul>
      {currencies
        .filter((el) => showed.includes(el.Cur_ID))
        .map((currency) => (
          <CurrencyItem item={currency} key={currency.Cur_ID} />
        ))}
    </ul>
  );
};
