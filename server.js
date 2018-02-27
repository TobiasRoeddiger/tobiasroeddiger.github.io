var express = require('express');
var app = express();

//Specify a port
var port = process.env.port || 8080;

app.use(express.static('public'))

app.use((req, res) => res.sendFile('public/index.html'))


//Start up the website
app.listen(port);
console.log('Listening on port: ', port);