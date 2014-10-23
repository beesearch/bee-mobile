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
  'ionic',
  'ngCordova',
  'highcharts-ng'
]);

// intial run code here
angular.module(_APP_).run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      console.log('### cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true) -> ok');
    }
    if(window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
      console.log('### StatusBar.styleDefault(); -> ok');
    }
  });
});

// Create global modules. You shouldn't have to
// touch these.
angular.module(_CONTROLLERS_, []);
angular.module(_DIRECTIVES_, []);
angular.module(_FILTERS_, []);
angular.module(_MODULES_, []);
angular.module(_SERVICES_, []);
