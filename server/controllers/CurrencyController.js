const { BYN, getCurrencies } = require('../utils');

class CurrencyController {
  async getAll(req, res) {
    const cur = req.query.cur.split('-')[0];
    const curValue = +req.query.cur.split('-')[1];

    const data = await getCurrencies();
    const currencies = [BYN, ...data];

    const currency = currencies.find((el) => el.Cur_Abbreviation === cur);
    currencies.forEach((item) => {
      item.count =
        (currency.Cur_OfficialRate /
          currency.Cur_Scale /
          item.Cur_OfficialRate) *
        item.Cur_Scale *
        curValue;
    });
    return res.json(currencies);
  }
}

module.exports = new CurrencyController();
