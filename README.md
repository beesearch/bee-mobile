# Zenbox Mobile

## Install the app
phonegap create . fr.zenfactory.zenbox Zenbox
npm install && bower install && grunt build:development

## Building the app
phonegap remote login --username _adress_@gmail.com --password _password_
phonegap remote build android

## Adding phonegap plugins
phonegap local plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-device.git
phonegap local plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-dialogs.git
phonegap local plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-vibration.git


For more informations on phonegap-cli see:
http://docs.phonegap.com/en/3.0.0/guide_cli_index.md.html
