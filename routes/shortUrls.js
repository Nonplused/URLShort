//Dependencies
var express = require('express');
var simpledb = require('mongoose-simpledb');
var config = require('konfig')();

//Setup
var router = express.Router();

router.get('/', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  var path = req.baseUrl.substring(1).match(/^\w+$/);
  simpledb.init(config.app.connectionString, function(err, db) {
    if (err) throw err;
    if (path) {
      db.Url.where({_id: path[0]}).findOne(function(err, match) {
        if (err) throw err;
        if (match) {
          res.redirect(match.Url);
        } else {
          res.send(JSON.stringify('Path not found'))
        }
      }); 
    } else {
      res.send(JSON.stringify('Invalid path'))
    }
  });
});



module.exports = router;