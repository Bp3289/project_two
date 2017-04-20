var passport = require('passport');

//Get signup
function getSignup(request, response, next) {
	response.render('signup.ejs', {message: request.flash('signupMessage')});
}
// Post /signup
function postSignup(request, response, next) {
	var signupStrategy = passport.authenticate('local-signup', {
		successRedirect: '/',
		failureRedirect: '/sigunup',
		failureFlash: true
	});
	return signupStrategy(request, response, next);
}
// Get /login
function getLogin(request, response, next) {
	response.render('login.ejs', { message: request.flash('loginMessage')});
}
// Post /login
function postLogin(request, response, next) {
	var loginStrategy = passport.authenticate('local-login', {
		successRedirect: '/',
		failureRedirect: '/login',
		failureFlash: true
	});
	return loginStrategy(request, response, next);
}
// Get /logout
function getLogout(request, response, next) {
	request.logout();
	response.redirect('/');
}

module.export = {
	getLogin: getLogin,
	postLogin: postLogin,
	getSignup: getSignup,
	postSignup: postSignup,
	getLogout: getLogout
};