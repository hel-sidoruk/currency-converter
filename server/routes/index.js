const Router = require('express').Router;
const router = new Router();

router.get('/', (req, res) => res.json('Hello'));

module.exports = router;
