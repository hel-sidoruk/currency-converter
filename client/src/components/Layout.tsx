import React, { useEffect } from 'react';
import { Currencies } from '.';
import useActions from '../hooks/useActions';
import { Dropdown } from './Dropdown';

export const Layout = () => {
  const { getCurrencies } = useActions();

  useEffect(() => {
    getCurrencies();
  }, []);

  return (
    <div className="container">
      <h1>Конвертер валют</h1>
      <h3>По курсу НБ РБ</h3>
      <p>
        Официальный курс, устанавливаемый Национальным банком Республики Беларусь на{' '}
        {new Date(Date.now()).toISOString()}
      </p>
      <Currencies />
      <Dropdown />
    </div>
  );
};
