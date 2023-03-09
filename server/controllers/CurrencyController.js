const { default: axios } = require('axios');

class CurrencyController {
  async getAll(req, res) {
    const { data } = await axios.get(process.env.API_URL);
    return res.json(data);
  }
}

module.exports = new CurrencyController();
