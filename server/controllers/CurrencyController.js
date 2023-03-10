const { default: axios } = require('axios');

const CURRENCY = 'USD';

class CurrencyController {
  async getAll(req, res) {
    const { data } = await axios.get(process.env.API_URL);
    const currencies = [
      {
        Cur_ID: 100,
        Cur_Abbreviation: 'BYN',
        Cur_Name: 'белорусский рубль',
        Cur_OfficialRate: 1,
        Cur_Scale: 1,
        Date: new Date(Date.now()).toISOString(),
      },
      ...data,
    ];
    const usd = currencies.find((el) => el.Cur_Abbreviation === CURRENCY);
    currencies.forEach((item) => {
      item.count =
        (usd.Cur_OfficialRate / item.Cur_OfficialRate) * item.Cur_Scale;
    });
    return res.json(currencies);
  }
}

module.exports = new CurrencyController();
