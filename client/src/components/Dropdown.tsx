import React, { useState } from 'react';
import useActions from '../hooks/useActions';
import useTypedSelector from '../hooks/useTypedSelector';

export const Dropdown = () => {
  const { currencies, showed } = useTypedSelector((state) => state.currencies);
  const { addCurrency } = useActions();

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen((state) => !state);
  const add = (id: number) => {
    addCurrency(id);
    toggleOpen();
  };

  return (
    <div className="dropdown">
      <button onClick={toggleOpen}>Добавить валюту</button>
      <ul className={`dropdown__list ${isOpen ? 'dropdown__list--active' : ''}`}>
        {currencies
          .filter((el) => !showed.includes(el.Cur_ID))
          .map(({ Cur_Name, Cur_ID, Cur_Abbreviation }) => (
            <li className="dropdown__item" key={Cur_ID} onClick={() => add(Cur_ID)}>
              {Cur_Abbreviation} {Cur_Name}
            </li>
          ))}
      </ul>
    </div>
  );
};
