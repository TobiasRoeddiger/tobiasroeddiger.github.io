var express = require('express');
var path = require('path');
var app = express();

var port = process.env.port || 1337;

// Define the port to run on
app.set('port', port);

app.use(express.static(path.join(__dirname, 'public')));

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});


