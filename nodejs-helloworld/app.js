var express = require('express');
app = express();

var port = 8081
var requestNo = 0;

app.get('/', function (req, res) {
	requestNo++;
  res.send(`Hello World ar at port ${port} - request no = ${requestNo}\n`);
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

