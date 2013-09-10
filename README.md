# Zenbox Mobile

## Installing app

    phonegap create . fr.zenfactory.zenbox Zenbox
    npm install && bower install && grunt build:development

## Building app

    phonegap remote login --username *address*@gmail.com --password *password*
    phonegap remote build android

## Adding phonegap plugins

    phonegap local plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-device.git
    phonegap local plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-dialogs.git
    phonegap local plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-vibration.git

For more informations on phonegap-cli see:
http://docs.phonegap.com/en/3.0.0/guide_cli_index.md.html

## Grunt notes

Start Grunt's watch process to build on-the-fly. See Gruntfile.js for more information. Modifying files should happen inside the src/ directory, not the build/ directory.

    grunt watch

When you change any file in the `src/` directory, grunt will notice and
recompile the proper files and place them into the `www/` directory. The
`www` directory is then later used by phonegap to prepare the
application to be copied over to the device (or simulator).

`grunt watch` will only watch for files you change and only build out
related files. For example, if you change a .less file, grunt will only
rebuild all LESS files and copy them over to `www/`. If you want to
rebuild the entire project, use the following commands:

    grunt build:development

or

    grunt build:production

The latter will use UglifyJS to minify your files, setting them up for
production. It will also use the the file in
`src/js/config/environments/production.js`. This is useful for setting
up things like API routes and/or public keys that differ
per-environment.