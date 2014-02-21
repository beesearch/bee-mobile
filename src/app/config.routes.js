/*
 * config.routes.js
 *
 * Defines the routes for the application.
 *
 */
 angular.module(_APP_).config(function($stateProvider, $urlRouterProvider) {

    // Define routes here.
    $stateProvider
    .state('app-index', {
      url: '/app-index',
      templateUrl: 'views/app/app-index.html',
      controller: 'app-index'
    })
    .state('app-login', {
      url: '/app-login',
      templateUrl: 'views/home/app-login.html',
      controller: 'app-login'
    })
    .state('search', {
      url: '/search',
      templateUrl: 'views/search/search.html',
      controller: 'search'
    })
    .state('users', {
      url: '/users',
      templateUrl: 'views/users/list.html',
      controller: 'users'
    })
    .state('users-detail', {
      url: '/users/:userId',
      templateUrl: 'views/users/users-detail.html',
      controller: 'users-detail'
    })
    .state('products', {
      url: '/products',
      templateUrl: 'views/products/products.html',
      controller: 'products'
    })
    .state('products-detail', {
      url: '/products/:productId',
      templateUrl: 'views/products/products-detail.html',
      controller: 'products-detail'
    })
    .state('contacts', {
      url: '/contacts',
      templateUrl: 'views/contacts/contacts.html',
      controller: 'contacts'
    })
    .state('notifications', {
      url: '/notifications',
      templateUrl: 'views/phonegap/notifications.html',
      controller: 'notifications'
    })
    .state('device', {
      url: '/device',
      templateUrl: 'views/phonegap/device.html',
      controller: 'device'
    });
    
    $urlRouterProvider.otherwise('/app-index');
  }
);
