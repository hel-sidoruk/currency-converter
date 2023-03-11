import React, { useEffect, useState } from 'react';
import useActions from '../hooks/useActions';
import useTypedSelector from '../hooks/useTypedSelector';

export const Dropdown = () => {
  const { currencies, showed, initial } = useTypedSelector((state) => state.currencies);
  const { addCurrency } = useActions();

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen((state) => !state);
  };

  useEffect(() => {
    const close = () => setIsOpen(false);
    document.body.addEventListener('click', close);
    return () => document.body.removeEventListener('click', close);
  }, []);

  return (
    <div className="dropdown">
      <button className="dropdown__button" onClick={toggleOpen}>
        Добавить валюту
      </button>
      <ul className={`dropdown__list ${isOpen ? 'dropdown__list--active' : ''}`}>
        {currencies
          .filter((el) => !initial.includes(el.Cur_Abbreviation))
          .filter((el) => !showed.includes(el.Cur_Abbreviation))
          .map(({ Cur_Name, Cur_Abbreviation }) => (
            <li
              className="dropdown__item"
              key={Cur_Abbreviation}
              onClick={() => addCurrency(Cur_Abbreviation)}
            >
              {Cur_Abbreviation} {Cur_Name}
            </li>
          ))}
      </ul>
    </div>
  );
};
