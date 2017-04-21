var express      = require('express');
var app          = express();
var mongoose     = require('mongoose');
var passport     = require('passport');
var flash        = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

mongoose.connect('mongodb://localhost/local-authentication-with-passport'); 

var db = require('./models');

app.use(morgan('dev')); 
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.set('views', './views');
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use(session({ secret: 'WDI-GENERAL-ASSEMBLY-EXPRESS' })); 
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

app.get('/', function homepage (req, res){
	res.sendFile(__dirname + '/views/index.html');
});


// api.get('api', function api_index(req, res){
// 	res.json({
// 		message: "Welcome to Pioneer Gaming!",
// 		documentation_url:"https://github.com/Bp3289/project_two",
// 		base_url: "http://pioneer.herokuapp.com",
// 		endpoints: [
// 			{method: "GET", path: "/api", description: "Describes available endpoints"}
// 		]
// 	});
// });

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening at http://localhost:3000/');
});
