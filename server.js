//Dependencies
var express = require('express');

//Express
var port = process.env.PORT || 5000;
var app = express();

//Routes
app.use('/new', require('./routes/new.js'));
app.use('/', require('./routes/shortUrls.js'));

//Start server
app.listen(port, function() {
  console.log("listening on port: " + port);
});