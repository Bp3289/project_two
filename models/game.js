var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
 var Review = require('./review.js');



var GameSchema = new Schema({
   name: String,
  reviews: [Review.schema]
});


var Game = mongoose.model('Game', GameSchema);
module.exports = Game;
