var express = require("express");
var server = express();
var http = require('http').Server(server);

server.use(express.static(__dirname + '/public'));

server.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

var port = process.env.port || 1337;
	http.listen(port, function () {
});
