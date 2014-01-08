# Bee Mobile

## Installing app
Clone this project, then lauch :

    npm install && bower install && grunt build:development

It will install npm dependencies, bower dependencies et run the first
development build. The build compile files in `src/` and copy them in `www/`.

## Building app

    phonegap remote login --username *address*@gmail.com --password *password*
    phonegap remote build android

## Adding phonegap plugins

Phonegap plugins are added in the src/config.tmpl.xml

Fora list of phonegap plugins:
https://build.phonegap.com/plugins

## Get Started

Start the developement watch process to build on-the-fly. When launched,
it will build the project (development target), launch a web-server and
start watching for changes. Modifying files should happen inside the `src`
directory, not the `src` directory.

    grunt dev

When you change any file in the `src` directory, grunt will notice and
recompile the proper files and place them into the `www` directory. The
`www` directory is then later used by phonegap to prepare the application
to be copied over to the device (or simulator).

If you want to rebuild the entire project, use the following commands:

    grunt build:development

or

    grunt build:production

The latter will use UglifyJS to minify your files, setting them up for
production.
