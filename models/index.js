var mongoose = require('mongoose');
mongoose.connect('mongodb:localhost/game-app');

module.exports.getGame = require('./game.js');
module.exports.User = require('./user.js');