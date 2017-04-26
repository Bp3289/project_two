var express      = require('express');
var app          = express();
var mongoose     = require('mongoose');
var passport     = require('passport');
var flash        = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');



// mongoose.connect('mongodb://localhost/game-app'); 

var db = require('./models');

app.use(morgan('dev')); 
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


app.set('views', './views');
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use(session({ secret: 'WDI-GENERAL-ASSEMBLY-EXPRESS',resave: true, saveUninitialized: true })); 
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash()); 

require('./config/passport')(passport);

app.use(function (req, res, next) {
	res.locals.currentUser = req.user;
	next();
});

var routes = require('./config/routes');
app.use(routes);

// app.post('/api/games/:gameId/reviews', function reviewCreate(req, res) {
//   //go to db find one album with id from url string {_id: req.params.albumId} 
//   db.Game.findOne({_id: req.params.gameId}, function(err, game) {
//     if (err) { console.log('error game+review post route:' + err); }
// /// model for making new song
//     var review = new db.Review(req.body);
//     /// push the song into the album's songs array
//     game.reviews.push(review);
//     //save the album into the db
//     game.save(function(err, savedGame) {
//       if (err) { console.log('error', err); }
//       console.log('game with new review saved:', savedGame);
//       res.json(review);
//     });
//   });




app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening at http://localhost:3000/');
});
