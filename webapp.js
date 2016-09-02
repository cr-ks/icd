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
  db.collection("blocks").find({blocks: {$elemMatch: {chapter:"A00-B99"}}}).toArray(function(err, docs) {
    res.json(docs);
  });
});

MongoClient.connect('mongodb://localhost/icd', function(err, dbConnection) {
  db = dbConnection;
  var server = app.listen(8080, function() {
	  var port = server.address().port;
	  console.log("Started server at port", port);
  });
});
