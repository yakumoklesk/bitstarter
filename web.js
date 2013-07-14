var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var data = fs.readFileSync( "index.html" );
var message = data.toString();

app.get('/', function(request, response) {
  response.send( message );
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});