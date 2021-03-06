var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var genreSchema = new Schema(
  {
    name: { type: String, maxLength: 100}
  }
);

// Virtual for bookinstance's URL
genreSchema
.virtual('url')
.get(function () {
  return '/catalog/genre/' + this._id;
});

//Export model
module.exports = mongoose.model('Genre', genreSchema);