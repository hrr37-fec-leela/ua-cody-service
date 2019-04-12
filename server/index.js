const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3006;
const path = require('path');

const db = require('../database/index.js');


app.use(bodyParser.json());

app.use(express.static('public/dist'));

//============ Routes ============//

app.get(`/`, (req, res) => {
  let getPath = path.join(__dirname, '..', 'public', 'dist', 'index.html');
  res.sendFile(getPath);
});

app.get(`/:id`, (req, res) => {
  let getPath = path.join(__dirname, '..', 'public', 'dist', 'index.html');
  res.sendFile(getPath);
});

app.get('/api/shoes/:id', (req, res) => {
  let id = Number(req.params.id);
  db.getShoeList(id, (err, results) => {
    if (err) {
      console.error('failed to get shoeList');
    }
    res.status(201);
    res.send(results);
  });
});

app.get('/api/shoeInfo/:id', (req, res) => {
  let id = Number(req.params.id);
  db.getShoeInfo(id, (err, results) => {
    if (err) {
      console.error('failed to get shoeInfo');
    }
    res.status(201);
    res.send(results);
  });
});

app.get('/api/sizesInventory/:id', (req, res) => {
  let id = Number(req.params.id);
  db.getShoeInventory(id, (err, results) => {
    if (err) {
      console.error('failed to get sizesInventory');
    }
    res.status(201);
    res.send(results);
  });
});

app.listen(port, () => console.log(`listening on port ${port}!`));