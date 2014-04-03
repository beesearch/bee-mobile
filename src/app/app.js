/*
 * app.js
 *
 * Main js file for the application.
 *
 */
// some globals.
var _APP_         = 'beemobile'
  , _CONTROLLERS_ = _APP_ + '.controllers'
  , _DIRECTIVES_  = _APP_ + '.directives'
  , _FILTERS_     = _APP_ + '.filters'
  , _MODULES_     = _APP_ + '.modules'
  , _SERVICES_    = _APP_ + '.services';

// top-level module
angular.module(_APP_, [
  // Your application's namespaced modules
  // so they won't conflict with other
  // modules. You shouldn't have to touch
  // these unless you want to.
  _CONTROLLERS_,
  _DIRECTIVES_,
  _FILTERS_,
  _MODULES_,
  _SERVICES_,

  // add additional modules here, installed via Bower. Don't forget to add the module
  // to your Gruntfile's bower components if you want to use it!
  'ngResource',
  'http-auth-interceptor',
  'ionic'
]);

// intial run code here
angular.module(_APP_).run(function($rootScope) {

});

// Create global modules. You shouldn't have to
// touch these.
angular.module(_CONTROLLERS_, []);
angular.module(_DIRECTIVES_, []);
angular.module(_FILTERS_, []);
angular.module(_MODULES_, []);
angular.module(_SERVICES_, []);
