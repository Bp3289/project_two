var mongoose = require('mongoose');
mongoose.connect( process.env.MONGODB_URI || 
                  process.env.MONGOLAB_URI || 
                  process.env.MONGOHQ_URL || 
					'mongodb://localhost/game-app');


// var apiKey = require('./apikey.js');

// var request = require('request');
// request('https://www.giantbomb.com/search/?q=/game.json', function (error, response, body) {
// 	console.log('error:', error);
// 	console.log('statusCode:', response && response.statusCode);
// 	console.log('body:', body);

// });
// 	console.log("It is" + (request) + "in Denver");

// module.exports.Game = require('./game.js');
// module.exports.User = require('./user.js');
// module.exports.endpoints_obj = require('./endpoint.js');
