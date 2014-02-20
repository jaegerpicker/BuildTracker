<<<<<<< HEAD
var path = require('path'),
rootPath = path.normalize(__dirname + '/../..');
=======
'use strict';

var path = require('path');
var rootPath = path.normalize(__dirname + '/../..');
>>>>>>> 1dc671047710e67e3fdf37de8b1fb25983069126

module.exports = {
	root: rootPath,
	port: process.env.PORT || 3000,
<<<<<<< HEAD
    db: process.env.MONGOHQ_URL    
}
=======
	db: process.env.MONGOHQ_URL,
	templateEngine: 'swig',

	// The secret should be set to a non-guessable string that
	// is used to compute a session hash
	sessionSecret: 'MEAN',
	// The name of the MongoDB collection to store sessions in
	sessionCollection: 'sessions'
};
>>>>>>> 1dc671047710e67e3fdf37de8b1fb25983069126
