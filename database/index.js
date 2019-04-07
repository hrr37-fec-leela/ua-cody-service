const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';

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

const getShoeList = (callback) => {
  client.connect(function(err) {
    assert.equal(null, err);

    console.log("Connected to mongoDB - running getShoeList()");

    const db = client.db(dbName);

    queryObj = {productId: '3020612'};

    db.collection('shoe_display').find(queryObj).toArray((err, results) => {
      if (err) throw err;
      callback(null, results)
    })
  });
}

const getShoeInfo = (callback) => {
  client.connect(function(err) {
    assert.equal(null, err);

    console.log("Connected to mongoDB - running getShoeInfo()");

    const db = client.db(dbName);

    queryObj = {productId: '3020612'};

    db.collection('shoe_info').find(queryObj).toArray((err, results) => {
      if (err) throw err;
      callback(null, results)
    })
  });
}

const getShoeInventory = (callback) => {
  client.connect(function(err) {
    assert.equal(null, err);

    console.log("Connected to mongoDB - running getShoeInventory()");

    const db = client.db(dbName);

    queryObj = {productId: '3020612'};

    db.collection('shoe_inventory').find(queryObj).toArray((err, results) => {
      if (err) throw err;
      callback(null, results)
    })
  });
}

module.exports.getShoeList = getShoeList;
module.exports.getShoeInfo = getShoeInfo;
module.exports.getShoeInventory = getShoeInventory;


