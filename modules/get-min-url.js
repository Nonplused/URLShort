var simpledb = require('mongoose-simpledb');

module.exports = function(target, resFunc) {
  if (/https?:\/\/\w+\.\w+\.*/.test(target)) {
    simpledb.init('mongodb://localhost/Urls', function(err, db) {
      if (err) throw err;
      db.Url.where({Url: target}).findOne(function(err, match) {
        if (err) throw err;
        if(match === null) {
          var newUrl = new db.Url({
              Url: target
            }); 
            newUrl.save(function(err, doc) {
              if (err) throw err;
              resFunc(null, doc.minUrl);
            });
        } else {
          resFunc(null, match.minUrl);
        }
      });
    });
  } else {
    resFunc('Invalid Url');
  }
}

