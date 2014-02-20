<<<<<<< HEAD
//Articles service used for articles REST endpoint
angular.module('mean.articles').factory("Articles", ['$resource', function($resource) {
=======
'use strict';

//Articles service used for articles REST endpoint
angular.module('mean.articles').factory('Articles', ['$resource', function($resource) {
>>>>>>> 1dc671047710e67e3fdf37de8b1fb25983069126
    return $resource('articles/:articleId', {
        articleId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);