var express = require('express');
var router = express.Router();
// Parses information from POST
var bodyParser = require('body-parser');
// Used to manipulate POST methods
var methodOverride = require('method-override');
var passport = require("passport");
var usersController = require('../controllers/users');
var staticsController = require('../controllers/statics');
var gameController = require('../controllers/gControllers');
var request = require('request');
/////////////////////
function authenticatedUser(req, res, next) {
	if (req.isAuthenticated()) return next();

	res.redirect('/');
}
//Routes for login
router.route("/secret")
.get(authenticatedUser, usersController.secret);

router.route('/')
  .get(staticsController.home);

router.route('/signup')
  .get(usersController.getSignup)
  .post(usersController.postSignup);

router.route('/login')
  .get(usersController.getLogin)
  .post(usersController.postLogin);

router.route("/logout")
  .get(usersController.getLogout);


//Routes for games
router.route('/api/games')
.get(gameController.getGames)
.post(gameController.postGame);

router.route('/api/games/:id')
.get(gameController.getOneGame)
.put(gameController.editOneGame)
.delete(gameController.deleteGame);

router.route('/api/games/:id/reviews')
.post(gameController.reviewCreate);

module.exports = router;