var ObjectId = require('mongoose-simpledb').Types.Objects;

exports.schema = {
  _id: Number, 
  Url: String
};

exports.virtuals = {
  minUrl: {
    get: function() {
      return this['_id'].toString(32);
    } 
  }
}