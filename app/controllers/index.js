<<<<<<< HEAD
/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    _ = require('underscore');


exports.render = function(req, res) {
    res.render('index', {
        user: req.user ? JSON.stringify(req.user) : "null"
=======
'use strict';

exports.render = function(req, res) {
    res.render('index', {
        user: req.user ? JSON.stringify(req.user) : 'null'
>>>>>>> 1dc671047710e67e3fdf37de8b1fb25983069126
    });
};
