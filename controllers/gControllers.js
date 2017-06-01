var db = require('../models');


//Get Index
function getGames (req, res, next){
	db.Game.find({}, function(err, games){
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

function reviewCreate(req, res) {
  //go to db find one game with id from url string {_id: req.params.albumId} 
  db.Game.findOne({_id: req.params.id}, function(err, game) {
    if (err) { console.log('error game+review post route:' + err); }
/// model for making new review
    var review = new db.Review(req.body);
    console.log(game);
    /// push the song into the game's review array
    game.reviews.push(review);
    //save the game into the db
    game.save(function(err, savedGame) {
      if (err) { console.log('error', err); }
      console.log('game with new review saved:', savedGame);
      res.json(review);
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

//Export all modules
module.exports = {
	getGames: getGames,
	getOneGame: getOneGame,
	postGame: postGame,
	editOneGame: editOneGame,
	reviewCreate: reviewCreate,
	deleteGame: deleteGame
};
