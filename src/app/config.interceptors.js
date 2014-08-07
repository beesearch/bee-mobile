/*
 * config.interceptors.js
 *
 * Defines the interceptors for the application.
 *
 */
// Interceptor catching responses
angular.module(_APP_).config(function($httpProvider) {
  var responseInterceptor = function($q, $rootScope) {
    return {

      response: function (response) {
        // do something on success
        return response;
      },

      responseError: function (rejection) {
        // Broadcast the rejection
        console.log('### responseInterceptor : broadcast event:auth-errorReceived (error: ' + JSON.stringify(rejection) + ')');
        $rootScope.$broadcast('event:auth-errorReceived', rejection);

        return $q.reject(rejection);
      }
    }
  };

  $httpProvider.interceptors.push(responseInterceptor);
});
