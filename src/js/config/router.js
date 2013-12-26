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
        .when('/login', { templateUrl: 'html/partials/home/login.html', controller: 'HomeLoginController' })
        .when('/users', { templateUrl: 'html/partials/users/list.html', controller: 'UserListController' })
        .when('/users/:userId', {templateUrl: 'html/partials/users/detail.html', controller: 'UserDetailController'})
        .when('/products', { templateUrl: 'html/partials/products/list.html', controller: 'ProductListController' })
        .when('/contacts', { templateUrl: 'html/partials/contacts/list.html', controller: 'ContactListController' })
        .when('/notifications', {templateUrl: 'html/partials/phonegap/notifications.html', controller: 'NotificationsController'})
        .when('/device', {templateUrl: 'html/partials/phonegap/device.html', controller: 'DeviceController'})
        .otherwise({ redirectTo: '/' });
  }
]);
