var express = require('express');
var app = express();

app.get('/', function (req, res) {
  //res.send(req.params);
  console.log(req.params);
});