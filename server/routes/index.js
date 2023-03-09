const CurrencyController = require('../controllers/CurrencyController');

const Router = require('express').Router;
const router = new Router();

router.get('/', CurrencyController.getAll);

module.exports = router;
