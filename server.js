<<<<<<< HEAD
=======
'use strict';

>>>>>>> 1dc671047710e67e3fdf37de8b1fb25983069126
/**
 * Module dependencies.
 */
var express = require('express'),
    fs = require('fs'),
    passport = require('passport'),
<<<<<<< HEAD
    logger = require('mean-logger'),
    newrelic = require('newrelic');
=======
    logger = require('mean-logger');
>>>>>>> 1dc671047710e67e3fdf37de8b1fb25983069126

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

<<<<<<< HEAD
//Load configurations
//if test env, load example file
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    config = require('./config/config'),
    auth = require('./config/middlewares/authorization'),
    mongoose = require('mongoose');

//Bootstrap db connection
var db = mongoose.connect(config.db);

//Bootstrap models
=======
// Load configurations
// Set the node enviornment variable if not set before
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Initializing system variables 
var config = require('./config/config'),
    mongoose = require('mongoose');

// Bootstrap db connection
var db = mongoose.connect(config.db);

// Bootstrap models
>>>>>>> 1dc671047710e67e3fdf37de8b1fb25983069126
var models_path = __dirname + '/app/models';
var walk = function(path) {
    fs.readdirSync(path).forEach(function(file) {
        var newPath = path + '/' + file;
        var stat = fs.statSync(newPath);
        if (stat.isFile()) {
            if (/(.*)\.(js$|coffee$)/.test(file)) {
                require(newPath);
            }
        } else if (stat.isDirectory()) {
            walk(newPath);
        }
    });
};
walk(models_path);

<<<<<<< HEAD
//bootstrap passport config
=======
// Bootstrap passport config
>>>>>>> 1dc671047710e67e3fdf37de8b1fb25983069126
require('./config/passport')(passport);

var app = express();

<<<<<<< HEAD
//express settings
require('./config/express')(app, passport, db);

//Bootstrap routes
require('./config/routes')(app, passport, auth);

//Start the app by listening on <port>
=======
// Express settings
require('./config/express')(app, passport, db);

// Bootstrap routes
var routes_path = __dirname + '/app/routes';
var walk = function(path) {
    fs.readdirSync(path).forEach(function(file) {
        var newPath = path + '/' + file;
        var stat = fs.statSync(newPath);
        if (stat.isFile()) {
            if (/(.*)\.(js$|coffee$)/.test(file)) {
                require(newPath)(app, passport);
            }
        // We skip the app/routes/middlewares directory as it is meant to be
        // used and shared by routes as further middlewares and is not a 
        // route by itself
        } else if (stat.isDirectory() && file !== 'middlewares') {
            walk(newPath);
        }
    });
};
walk(routes_path);


// Start the app by listening on <port>
>>>>>>> 1dc671047710e67e3fdf37de8b1fb25983069126
var port = process.env.PORT || config.port;
app.listen(port);
console.log('Express app started on port ' + port);

<<<<<<< HEAD
//Initializing logger
logger.init(app, passport, mongoose);

//expose app
=======
// Initializing logger
logger.init(app, passport, mongoose);

// Expose app
>>>>>>> 1dc671047710e67e3fdf37de8b1fb25983069126
exports = module.exports = app;
