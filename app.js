

var express      = require('express');
var app          = express();
var mongoose     = require('mongoose');
var passport     = require('passport');
var flash        = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var bodyParser = require('body-parser');
var fs = require("fs");
var path = require('path');

mongoose.connect('mongodb://localhost/game-app');

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', __dirname);
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./config/passport')(passport);

var db = require('./models');	

var content;




fs.readFile('./models', "utf-8", function (err, data) {
   if (err) {
      throw err;
   }

   content = data.toString();

   console.log(content);
   processFile();
});

function processFile() {
	console.log(content);
}


// app.get('/', function(req, res) {
//   res.send("You're Home!");
// });


// start server
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});