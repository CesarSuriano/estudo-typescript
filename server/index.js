var express = require('express');
var app = express();

app.get('/', function (req, res) {

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  res.send([
    { 'montante': 200.5, 'vezes': 2 },
    { 'montante': 100.2, 'vezes': 5 },
    { 'montante': 50.5, 'vezes': 1 },
    { 'montante': 70.5, 'vezes': 2 },
    { 'montante': 20.5, 'vezes': 4 },
  ]);
});

app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});