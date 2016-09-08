var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var app = express();
var db;

app.use(express.static('static'));

app.get('/api/chapters', function(req, res) {
  db.collection("chapters").find().toArray(function(err, docs) {
    res.json(docs);
  });
});

app.get('/api/chapters/:id', function(req, res) {
  var id = req.params.id;
  db.collection("blocks").find({section:id}).toArray(function(err, docs) {
    res.json(docs);
  });
});

app.get('/api/code_title/:id', function(req, res) {
  var id = req.params.id;
  db.collection("blocks").find({title:id}).toArray(function(err, docs) {
    res.json(docs);
  });
});

app.get('/api/codes', function(req, res) {
  db.collection("codes").find().toArray(function(err, docs) {
    res.json(docs);
  });
});

app.get('/api/codes/:id', function(req, res) {
  var id = req.params.id.substring(0,3);
  db.collection("codes").find({chapter:id}).toArray(function(err, docs) {
    res.json(docs);
  });
});

MongoClient.connect('mongodb://localhost/icd', function(err, dbConnection) {
  db = dbConnection;
  var server = app.listen(3000, function() {
	  var port = server.address().port;
	  console.log("Started server at port", port);
  });
});
