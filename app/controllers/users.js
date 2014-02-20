<<<<<<< HEAD
=======
'use strict';

>>>>>>> 1dc671047710e67e3fdf37de8b1fb25983069126
/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    User = mongoose.model('User');

/**
 * Auth callback
 */
<<<<<<< HEAD
exports.authCallback = function(req, res, next) {
=======
exports.authCallback = function(req, res) {
>>>>>>> 1dc671047710e67e3fdf37de8b1fb25983069126
    res.redirect('/');
};

/**
 * Show login form
 */
exports.signin = function(req, res) {
    res.render('users/signin', {
        title: 'Signin',
        message: req.flash('error')
    });
};

/**
 * Show sign up form
 */
exports.signup = function(req, res) {
    res.render('users/signup', {
        title: 'Sign up',
        user: new User()
    });
};

/**
 * Logout
 */
exports.signout = function(req, res) {
    req.logout();
    res.redirect('/');
};

/**
 * Session
 */
exports.session = function(req, res) {
    res.redirect('/');
};

/**
 * Create user
 */
<<<<<<< HEAD
exports.create = function(req, res) {
    var user = new User(req.body);
=======
exports.create = function(req, res, next) {
    var user = new User(req.body);
    var message = null;
>>>>>>> 1dc671047710e67e3fdf37de8b1fb25983069126

    user.provider = 'local';
    user.save(function(err) {
        if (err) {
<<<<<<< HEAD
            return res.render('users/signup', {
                errors: err.errors,
=======
            switch (err.code) {
                case 11000:
                case 11001:
                    message = 'Username already exists';
                    break;
                default:
                    message = 'Please fill all the required fields';
            }

            return res.render('users/signup', {
                message: message,
>>>>>>> 1dc671047710e67e3fdf37de8b1fb25983069126
                user: user
            });
        }
        req.logIn(user, function(err) {
            if (err) return next(err);
            return res.redirect('/');
        });
    });
};

/**
<<<<<<< HEAD
 *  Show profile
 */
exports.show = function(req, res) {
    var user = req.profile;

    res.render('users/show', {
        title: user.name,
        user: user
    });
};

/**
=======
>>>>>>> 1dc671047710e67e3fdf37de8b1fb25983069126
 * Send User
 */
exports.me = function(req, res) {
    res.jsonp(req.user || null);
};

/**
 * Find user by id
 */
exports.user = function(req, res, next, id) {
    User
        .findOne({
            _id: id
        })
        .exec(function(err, user) {
            if (err) return next(err);
            if (!user) return next(new Error('Failed to load User ' + id));
            req.profile = user;
            next();
        });
};