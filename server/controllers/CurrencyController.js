const { default: axios } = require('axios');

class CurrencyController {
  async getAll(req, res) {
    const cur = req.query.cur.split('-')[0];
    const curValue = +req.query.cur.split('-')[1];

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
    const currency = currencies.find((el) => el.Cur_Abbreviation === cur);
    currencies.forEach((item) => {
      item.count =
        (currency.Cur_OfficialRate / item.Cur_OfficialRate) *
        item.Cur_Scale *
        curValue;
    });
    return res.json(currencies);
  }
}

module.exports = new CurrencyController();
