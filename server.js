//Dependencies
var express = require('express');
var restful = require('restful-promise');
var mongoose = require('mongoose');

//Express
var port = process.env.PORT || 5000;
var app = express();

//Routes

//Start server
app.listen(port, function() {
  console.log("listening on port: " + port);
});