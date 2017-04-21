var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
  // Author = require('./author');

// var CharacterSchema = new Schema({
//   name: String
// });


var GameSchema = new Schema({
   name: String
});


var Game = mongoose.model('Game', GameSchema);
module.exports = Game;
