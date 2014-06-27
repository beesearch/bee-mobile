/*
 * config.routes.js
 *
 * Defines the routes for the application.
 *
 */
 angular.module(_APP_).config(function($stateProvider, $urlRouterProvider) {

    // Define routes here.
    $stateProvider
    .state('search', {
      url: '/search',
      templateUrl: 'views/search/search.html',
      controller: 'search'
    })
    .state('company', {
      url: '/company/:index/:type/:companyId',
      templateUrl: 'views/details/company.html',
      controller: 'company'
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
    
    $urlRouterProvider.otherwise('/search');
  }
);
