<<<<<<< HEAD
=======
'use strict';

>>>>>>> 1dc671047710e67e3fdf37de8b1fb25983069126
/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
<<<<<<< HEAD
    crypto = require('crypto'),
    _ = require('underscore'),
    authTypes = ['github', 'twitter', 'facebook', 'google'];

=======
    crypto = require('crypto');
>>>>>>> 1dc671047710e67e3fdf37de8b1fb25983069126

/**
 * User Schema
 */
var UserSchema = new Schema({
    name: String,
    email: String,
    username: {
        type: String,
        unique: true
    },
<<<<<<< HEAD
    provider: String,
    hashed_password: String,
=======
    hashed_password: String,
    provider: String,
>>>>>>> 1dc671047710e67e3fdf37de8b1fb25983069126
    salt: String,
    facebook: {},
    twitter: {},
    github: {},
<<<<<<< HEAD
    google: {}
=======
    google: {},
    linkedin: {}
>>>>>>> 1dc671047710e67e3fdf37de8b1fb25983069126
});

/**
 * Virtuals
 */
UserSchema.virtual('password').set(function(password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password);
}).get(function() {
    return this._password;
});

/**
 * Validations
 */
var validatePresenceOf = function(value) {
    return value && value.length;
};

// the below 4 validations only apply if you are signing up traditionally
UserSchema.path('name').validate(function(name) {
    // if you are authenticating by any of the oauth strategies, don't validate
<<<<<<< HEAD
    if (authTypes.indexOf(this.provider) !== -1) return true;
    return name.length;
=======
    if (!this.provider) return true;
    return (typeof name === 'string' && name.length > 0);
>>>>>>> 1dc671047710e67e3fdf37de8b1fb25983069126
}, 'Name cannot be blank');

UserSchema.path('email').validate(function(email) {
    // if you are authenticating by any of the oauth strategies, don't validate
<<<<<<< HEAD
    if (authTypes.indexOf(this.provider) !== -1) return true;
    return email.length;
=======
    if (!this.provider) return true;
    return (typeof email === 'string' && email.length > 0);
>>>>>>> 1dc671047710e67e3fdf37de8b1fb25983069126
}, 'Email cannot be blank');

UserSchema.path('username').validate(function(username) {
    // if you are authenticating by any of the oauth strategies, don't validate
<<<<<<< HEAD
    if (authTypes.indexOf(this.provider) !== -1) return true;
    return username.length;
=======
    if (!this.provider) return true;
    return (typeof username === 'string' && username.length > 0);
>>>>>>> 1dc671047710e67e3fdf37de8b1fb25983069126
}, 'Username cannot be blank');

UserSchema.path('hashed_password').validate(function(hashed_password) {
    // if you are authenticating by any of the oauth strategies, don't validate
<<<<<<< HEAD
    if (authTypes.indexOf(this.provider) !== -1) return true;
    return hashed_password.length;
=======
    if (!this.provider) return true;
    return (typeof hashed_password === 'string' && hashed_password.length > 0);
>>>>>>> 1dc671047710e67e3fdf37de8b1fb25983069126
}, 'Password cannot be blank');


/**
 * Pre-save hook
 */
UserSchema.pre('save', function(next) {
    if (!this.isNew) return next();

<<<<<<< HEAD
    if (!validatePresenceOf(this.password) && authTypes.indexOf(this.provider) === -1)
=======
    if (!validatePresenceOf(this.password) && !this.provider)
>>>>>>> 1dc671047710e67e3fdf37de8b1fb25983069126
        next(new Error('Invalid password'));
    else
        next();
});

/**
 * Methods
 */
UserSchema.methods = {
    /**
     * Authenticate - check if the passwords are the same
     *
     * @param {String} plainText
     * @return {Boolean}
     * @api public
     */
    authenticate: function(plainText) {
        return this.encryptPassword(plainText) === this.hashed_password;
    },

    /**
     * Make salt
     *
     * @return {String}
     * @api public
     */
    makeSalt: function() {
<<<<<<< HEAD
        return Math.round((new Date().valueOf() * Math.random())) + '';
=======
        return crypto.randomBytes(16).toString('base64');
>>>>>>> 1dc671047710e67e3fdf37de8b1fb25983069126
    },

    /**
     * Encrypt password
     *
     * @param {String} password
     * @return {String}
     * @api public
     */
    encryptPassword: function(password) {
<<<<<<< HEAD
        if (!password) return '';
        return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
=======
        if (!password || !this.salt) return '';
        var salt = new Buffer(this.salt, 'base64');
        return crypto.pbkdf2Sync(password, salt, 10000, 64).toString('base64');
>>>>>>> 1dc671047710e67e3fdf37de8b1fb25983069126
    }
};

mongoose.model('User', UserSchema);