const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const password = require('../hidden/mongoAtlas.js');

const url = `mongodb+srv://codysmith287:${password.altasPassword}@mysandboxcluster-fipdy.mongodb.net/test?retryWrites=true`;``

const dbName = 'underarmour';

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true });

// Use connect method to connect to the Server
// client.connect(function(err) {
//   assert.equal(null, err);
//   console.log("Connected successfully to mongoDB server");

//   const db = client.db(dbName);

//   client.close();
// });

const getShoeList = (id, callback) => {
  client.connect(function(err) {
    assert.equal(null, err);

    console.log('Connected to mongoDB - running getShoeList()');

    const db = client.db(dbName);

    queryObj = {id: id};

    db.collection('shoe_display').find(queryObj).toArray((err, results) => {
      if (err) {
        throw err;
      }
      callback(null, results);
    });
  });
};

const getShoeInfo = (id, callback) => {
  client.connect(function(err) {
    assert.equal(null, err);

    console.log('Connected to mongoDB - running getShoeInfo()');

    const db = client.db(dbName);

    queryObj = {id: id};

    db.collection('shoe_info').find(queryObj).toArray((err, results) => {
      if (err) {
        throw err;
      }
      callback(null, results);
    });
  });
};

const getShoeInventory = (id, callback) => {
  client.connect(function(err) {
    assert.equal(null, err);

    console.log('Connected to mongoDB - running getShoeInventory()');

    const db = client.db(dbName);

    queryObj = {id: id};

    db.collection('shoe_inventory').find(queryObj).toArray((err, results) => {
      if (err) {
        throw err;
      }
      callback(null, results);
    });
  });
};

module.exports.getShoeList = getShoeList;
module.exports.getShoeInfo = getShoeInfo;
module.exports.getShoeInventory = getShoeInventory;


