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
      <h1 className="title">Конвертер валют</h1>
      <h3 className="subtitle">По курсу НБ РБ</h3>
      <p>
        Официальный курс, устанавливаемый Национальным банком Республики Беларусь на{' '}
        {new Date(Date.now()).toLocaleDateString()}
      </p>
      <div className="currencies">
        <Currencies />
        <Dropdown />
      </div>
    </div>
  );
};
