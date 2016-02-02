//Dependencies
var express = require('express');
var minUrl = require('../modules/get-min-url.js')

//Setup
var router = express.Router();

router.get('/*', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  var target = req.path.substring(1);
  minUrl(target, function(err, urlRoute) {
    if (err) res.send(JSON.stringify(err));
    res.send(JSON.stringify({minUrl: req.hostname + '/' + urlRoute, orgUrl: target}));
  });
});

module.exports = router;