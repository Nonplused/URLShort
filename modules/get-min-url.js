var simpledb = require('mongoose-simpledb');

module.exports = function(target, resFunc) {
  simpledb.init('mongodb://localhost/Urls', function(err, db) {
    if (err) throw err;
    db.Url.where({Url: target}).findOne(function(err, match) {
      if (err) throw err;
      if(match === null) {
        var newUrl = new db.Url({
          Url: target
        }); 
        newUrl.save(function(err, doc) {
          if (err) throw err;;
          resFunc(doc.minUrl);
        });
      } else {
        resFunc(match.minUrl);
      }
    });
  });
}