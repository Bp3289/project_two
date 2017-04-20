var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var User = mongoose.Schema({
	local : {
		email       : String,
		password    : String,
	}
});

User.methods.encrypt = function(password){
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

User.methods.vaildPassword = function(password){
	return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', User);

module.exports = User;