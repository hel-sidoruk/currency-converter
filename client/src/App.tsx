import React, { useEffect, useState } from 'react';
import { AddCurrencyButton } from './components';
import { CurrencyInfo } from './types';

function App() {
  const [currencies, setCurrencies] = useState<CurrencyInfo[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api')
      .then((r) => r.json())
      .then((data) => setCurrencies(data));
  }, []);

  return (
    <div className="container">
      <h1>Конвертер валют</h1>
      <h3>По курсу НБ РБ</h3>
      <p>
        Официальный курс, устанавливаемый Национальным банком Республики Беларусь на{' '}
        {new Date(Date.now()).toLocaleDateString()}
      </p>
      <ul>
        {currencies.map(({ Cur_ID, Cur_Abbreviation, Cur_Name }) => (
          <li key={Cur_ID}>
            {Cur_Abbreviation} {Cur_Name}
          </li>
        ))}
      </ul>
      <AddCurrencyButton />
    </div>
  );
}

export default App;
