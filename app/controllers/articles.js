<<<<<<< HEAD
=======
'use strict';

>>>>>>> 1dc671047710e67e3fdf37de8b1fb25983069126
/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Article = mongoose.model('Article'),
<<<<<<< HEAD
    _ = require('underscore');
=======
    _ = require('lodash');
>>>>>>> 1dc671047710e67e3fdf37de8b1fb25983069126


/**
 * Find article by id
 */
exports.article = function(req, res, next, id) {
    Article.load(id, function(err, article) {
        if (err) return next(err);
        if (!article) return next(new Error('Failed to load article ' + id));
        req.article = article;
        next();
    });
};

/**
<<<<<<< HEAD
 * Create a article
=======
 * Create an article
>>>>>>> 1dc671047710e67e3fdf37de8b1fb25983069126
 */
exports.create = function(req, res) {
    var article = new Article(req.body);
    article.user = req.user;

    article.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                article: article
            });
        } else {
            res.jsonp(article);
        }
    });
};

/**
<<<<<<< HEAD
 * Update a article
=======
 * Update an article
>>>>>>> 1dc671047710e67e3fdf37de8b1fb25983069126
 */
exports.update = function(req, res) {
    var article = req.article;

    article = _.extend(article, req.body);

    article.save(function(err) {
<<<<<<< HEAD
        res.jsonp(article);
=======
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                article: article
            });
        } else {
            res.jsonp(article);
        }
>>>>>>> 1dc671047710e67e3fdf37de8b1fb25983069126
    });
};

/**
 * Delete an article
 */
exports.destroy = function(req, res) {
    var article = req.article;

    article.remove(function(err) {
        if (err) {
<<<<<<< HEAD
            res.render('error', {
                status: 500
=======
            return res.send('users/signup', {
                errors: err.errors,
                article: article
>>>>>>> 1dc671047710e67e3fdf37de8b1fb25983069126
            });
        } else {
            res.jsonp(article);
        }
    });
};

/**
 * Show an article
 */
exports.show = function(req, res) {
    res.jsonp(req.article);
};

/**
 * List of Articles
 */
exports.all = function(req, res) {
    Article.find().sort('-created').populate('user', 'name username').exec(function(err, articles) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(articles);
        }
    });
};
