# Bee Mobile

## Installing app

Clone this project, then lauch :

    npm install && bower install

It will install npm dependencies and bower dependencies.

## Enabling Cordova platforms

    cordova platform add ios

## Adding Cordova plugins

    cordova plugin add org.apache.cordova.device
    cordova plugin add org.apache.cordova.statusbar
    cordova plugin add https://github.com/driftyco/ionic-plugins-keyboard.git

## Configuring environment

The backend protocol (http or https), DNS and port should be configured in `src/app/config.constants.js` file.

    angular.module(_APP_)
      .constant('BACKEND_PROTOCOL','http')
      .constant('BACKEND_HOST','localhost')
      .constant('BACKEND_PORT','8080');

## Running app in the browser

    ionic serve

Default browser will load the app, and refreshed on any code change ;)

## Building app

If you want to rebuild the entire project to emulate, use the following commands:

    cordova build ios
    cordova emulate ios

## Building app to iOS

For iOS you need to add this two lines in the plist file to hide the status bar

    Status bar is initially hidden = YES
    View controller-based status bar appearance = NO
