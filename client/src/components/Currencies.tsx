import React from 'react';
import useActions from '../hooks/useActions';
import useTypedSelector from '../hooks/useTypedSelector';

export const Currencies = () => {
  const { currencies, showed } = useTypedSelector((state) => state.currencies);
  const { removeCurrency } = useActions();

  return (
    <ul>
      {currencies
        .filter((el) => showed.includes(el.Cur_ID))
        .map(({ Cur_ID, Cur_Abbreviation, Cur_Name }) => (
          <li key={Cur_ID} onClick={() => removeCurrency(Cur_ID)}>
            {Cur_ID} {Cur_Abbreviation} {Cur_Name}
          </li>
        ))}
    </ul>
  );
};
