/*
 * config/router.js
 *
 * Defines the routes for the application.
 *
 */
angular.module(_APP_).config([
  '$routeProvider',
  function($routeProvider) {

    // Define routes here.
    $routeProvider
        .when('/', { templateUrl: 'html/partials/home/index.html', controller: 'HomeController' })
        .when('/users', { templateUrl: 'html/partials/users/list.html', controller: 'UserListController' })
        .when('/users/:userId', {templateUrl: 'html/partials/users/detail.html', controller: 'UserDetailController'})
        .otherwise({ redirectTo: '/' });
  }
]);

