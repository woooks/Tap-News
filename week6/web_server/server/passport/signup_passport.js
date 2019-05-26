const User = require('mongoose').model('User');
const PassportLocalStrategy = require('passport-local').Strategy;

module.exports = new PassportLocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, (req, email, password, done) => {
  console.log('##signup_passport##')
	const userData = {
		email: email.trim(),
		password: password.trim()
	};
	const newUser = new User(userData);
  // do not need to check if email exist because in user.js, email is defined as unique key.
	newUser.save((err) => {
		console.log('Save new user into mongoDB');

		if(err) return done(err);

		return done(null);
	});
});
