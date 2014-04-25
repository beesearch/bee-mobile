/*
 * config.interceptors.js
 *
 * Defines the interceptors for the application.
 *
 */
// Interceptor catching responses
angular.module(_APP_).config(function($httpProvider) {
  var responseInterceptor = function($q, oauth2Token) {
    return {

      response: function (response) {
        // do something on success
        return response;
      },

      responseError: function (response) {

          //console.log("response: " + JSON.stringify(response));

          // Broadcast the error
          oauth2Token.broadcastError(response.data.error);

          return $q.reject(response);
      }
    }
  };

  $httpProvider.interceptors.push(responseInterceptor);
});
