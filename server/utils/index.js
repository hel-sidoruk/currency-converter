const { default: axios } = require('axios');

const BYN = {
  Cur_ID: 100,
  Cur_Abbreviation: 'BYN',
  Cur_Name: 'белорусский рубль',
  Cur_OfficialRate: 1,
  Cur_Scale: 1,
  Date: new Date(Date.now()).toISOString(),
};

function fetchCurrencies() {
  let currencies = null;
  return async function fn() {
    if (currencies) return currencies;
    const { data } = await axios.get(process.env.API_URL);
    currencies = data;
    return currencies;
  };
}

const getCurrencies = fetchCurrencies();

module.exports = { BYN, getCurrencies };
