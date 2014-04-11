# Bee Mobile

## Installing app

Clone this project, then lauch :

    npm install && bower install && grunt build

It will install npm dependencies, bower dependencies et run the first
development build. The build compile files in `src` and copy them in `www`.

## Enabling Cordova platforms

   cordova platform add ios

## Adding Cordova plugins

   cordova plugin add org.apache.cordova.device
   cordova plugin add org.apache.cordova.dialogs
   cordova plugin add org.apache.cordova.vibration

## Get Started

Start the development watch process to build on-the-fly. When launched,
it will build the project (development target), launch a web-server and
start watching for changes. Modifying files should happen inside the `src`
directory, not the `www` directory.

    grunt dev

You can now test the project on your browser, using url: `http://localhost:8000`

When you change any file in the `src` directory, grunt will notice and
recompile the proper files and place them into the `www` directory. The
`www` directory is then later used by Cordova to prepare the application
to be copied over to the device (or simulator).

## Building app

If you want to rebuild the entire project to emulate, use the following commands:

    grunt build
    cordova build ios
    cordova emulate ios
