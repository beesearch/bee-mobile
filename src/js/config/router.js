/*
 * config/router.js
 *
 * Defines the routes for the application.
 *
 */
 angular.module(_APP_).config(function($stateProvider, $urlRouterProvider) {

    // Define routes here.
    $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'html/partials/home/index.html',
      controller: 'HomeController'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'html/partials/home/login.html',
      controller: 'HomeLoginController'
    })
    .state('users', {
      url: '/users',
      templateUrl: 'html/partials/users/list.html',
      controller: 'UserListController'
    })
    .state('user', {
      url: '/users/:userId',
      templateUrl: 'html/partials/users/detail.html',
      controller: 'UserDetailController'
    })
    .state('products', {
      url: '/products',
      templateUrl: 'html/partials/products/list.html',
      controller: 'ProductListController'
    })
    .state('product', {
      url: '/products/:productId',
      templateUrl: 'html/partials/products/detail.html',
      controller: 'ProductDetailController'
    })
    .state('contacts', {
      url: '/contacts',
      templateUrl: 'html/partials/contacts/list.html',
      controller: 'ContactListController'
    })
    .state('notifications', {
      url: '/notifications',
      templateUrl: 'html/partials/phonegap/notifications.html',
      controller: 'NotificationsController'
    })
    .state('device', {
      url: '/device',
      templateUrl: 'html/partials/phonegap/device.html',
      controller: 'DeviceController'
    });
    
    $urlRouterProvider.otherwise('/home');
  }
);
