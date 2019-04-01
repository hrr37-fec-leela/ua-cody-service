const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3006;

const db = require('../database/index.js');

app.use(bodyParser.json());

app.use(express.static('public/dist'));

app.listen(port, () => console.log(`listening on port ${port}!`))