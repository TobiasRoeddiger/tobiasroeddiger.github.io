var express = require('express');
var app = express();

//Specify a port
var port = process.env.port || 8080;

//app.use(express.static('public'))

app.get('/', (req, res) => {
    return res.status(200).send('This is the root of my express application');
});

//Start up the website
app.listen(port);
console.log('Listening on port: ', port);