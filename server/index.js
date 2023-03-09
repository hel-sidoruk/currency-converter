require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.port || 5000;
const cors = require('cors');
const router = require('./routes/index');

app.use(cors());
app.use(express.json());
app.use('/api', router);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
