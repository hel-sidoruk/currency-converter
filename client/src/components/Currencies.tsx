import React from 'react';
import useTypedSelector from '../hooks/useTypedSelector';

export const Currencies = () => {
  const { currencies } = useTypedSelector((state) => state.currencies);

  return (
    <ul>
      {currencies.map(({ Cur_ID, Cur_Abbreviation, Cur_Name }) => (
        <li key={Cur_ID}>
          {Cur_Abbreviation} {Cur_Name}
        </li>
      ))}
    </ul>
  );
};
