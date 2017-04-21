var mongoose = require('mongoose');
mongoose.connect( process.env.MONGODB_URI || 
                  process.env.MONGOLAB_URI || 
                  process.env.MONGOHQ_URL || 
					'mongodb://localhost/game-app');

module.exports.Game = require('./game.js');
module.exports.User = require('./user.js');