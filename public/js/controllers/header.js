<<<<<<< HEAD
=======
'use strict';

>>>>>>> 1dc671047710e67e3fdf37de8b1fb25983069126
angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [{
<<<<<<< HEAD
        "title": "Articles",
        "link": "articles"
    }, {
        "title": "Create New Article",
        "link": "articles/create"
=======
        'title': 'Articles',
        'link': 'articles'
    }, {
        'title': 'Create New Article',
        'link': 'articles/create'
>>>>>>> 1dc671047710e67e3fdf37de8b1fb25983069126
    }];
    
    $scope.isCollapsed = false;
}]);