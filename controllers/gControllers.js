var db = require('../models');


//Get Index
function getGames (req, res, next){
	db.Game.find({}, function(err, games){
      //has to be lowercase
      res.json(games);
    });
    
}

//Get One
function getOneGame (req, res, next) {
	db.Game.findOne({_id: req.params.id}, function(err, game){
		res.json(game);
	});
}

//Post Game
function postGame(req, res, next) {
	var newGame = new db.Game({
		name: req.body.name
	});
	newGame.save(function(err, game) {
		if (err) {
			return console.log("save error: " + err);
		}
		console.log("saved", game);
		res.json(game);
	});
}

//PUT Game
function editOneGame (req, res, next) {
	var id = req.params.id;

	db.Game.findOne({_id: id}, function(err, game){
		if (err) re.json({message: 'find error:' + err});
		if (req.body.name) game.name = req.body.name;

		game.save(function(err){
			if (err) res.json({message: 'could not update'});
			res.json({message: 'game updated'});
		});
	});
}

//Delete Game
function deleteGame (req, res, next) {
	var gameID = req.params.id;
	db.Game.findOneAndRemove({_id: gameID}, function(err, deletedGame){
		if (err) {
			return console.log("delete error:" + err);
		}
		res.json(deletedGame);
	});
}

module.exports = {
	getGames: getGames,
	getOneGame: getOneGame,
	postGame: postGame,
	editOneGame: editOneGame,
	deleteGame: deleteGame
};
