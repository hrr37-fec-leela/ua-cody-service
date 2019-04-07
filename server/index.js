const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3006;

const db = require('../database/index.js');

app.use(bodyParser.json());

app.use(express.static('public/dist'));

//============ Routes ============//
app.get('/api/shoes', (req,res) => {
  db.getShoeList((err, results) => {
    if (err) {
      console.error('failed to get shoeList');
    }
    res.status(201);
    res.send(results);
  })
})

app.get('/api/shoeInfo', (req,res) => {
  db.getShoeInfo((err, results) => {
    if (err) {
      console.error('failed to get shoeInfo');
    }
    res.status(201);
    res.send(results);
  })
})

app.get('/api/sizesInventory', (req,res) => {
  db.getShoeInventory((err, results) => {
    if (err) {
      console.error('failed to get sizesInventory');
    }
    res.status(201);
    res.send(results);
  })
})

app.listen(port, () => console.log(`listening on port ${port}!`))