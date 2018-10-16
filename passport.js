var passport = require('passport');
var bcrypt = require('bcrypt-nodejs');
const LocalStrategy = require('passport-local').Strategy
var db = require('./models');
const config = require('./config');
const jwt = require('jsonwebtoken');

const authenticate = (username, password, done) => {
	db.students.find({
		where: {
			username: username
		}
	}).then(student => {
		if (!student || !bcrypt.compareSync(password, student.password)) {
			console.log("failed to login, username not found.");
			return done(null, false, { message: 'invalid username/or and password combination' });
		}
		const payload = {
			sub: student.id
		};

		// create a token string
		const token = jwt.sign(payload, config.jwtSecret);
		const data = {
			isAdmin: student.isAdmin,
			username: student.username,
			token: token
		};
		return done(null, data);
	})
		.catch((err) => done(null, err)) // pass the error back
}

const register = (req, email, password, done) => {
	//sequelize?
	db.students.find({
		where: {
			username: req.body.username,
		}
	})
		.then(user => {
			if (user) {
				return done(null, false, { message: 'an account with that email has already been created' });
			}
			if (password !== req.body.password) {
				return done(null, false, { message: `passwords don't match` });
			}
			db.students.create({
				username: req.body.username,
				email: req.body.email,
				password: bcrypt.hashSync(password)
			}).then(function () {
				done(null, user);
			})
		})
}

passport.use(new LocalStrategy(authenticate));
passport.use('local-register', new LocalStrategy({ passReqToCallback: true }, register));