//Dependencies
var express = require('express');
var config = require('konfig')();

//Express
var port = config.app.port;
var app = express();

//Routes
app.use('/new', require('./routes/new.js'));
app.use('/*', require('./routes/shortUrls.js'));

//Start server
app.listen(port, function() {
  console.log("listening on port: " + port);
});