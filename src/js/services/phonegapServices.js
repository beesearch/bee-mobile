"use strict";

var phonegapServices = angular.module('phonegapServices', []);

phonegapServices.factory('cordovaReady', function() {
  return function (fn) {

    var queue = [];

    var impl = function () {
      queue.push(Array.prototype.slice.call(arguments));
    };

    document.addEventListener('deviceready', function () {
      queue.forEach(function (args) {
        fn.apply(this, args);
      });
      impl = fn;
    }, false);

    return function () {
      return impl.apply(this, arguments);
    };
  };
});

phonegapServices.factory('geolocationService', function ($rootScope, cordovaReady) {
  return {
    getCurrentPosition: cordovaReady(function (onSuccess, onError, options) {
      navigator.geolocation.getCurrentPosition(function () {
        var that = this,
          args = arguments;

        if (onSuccess) {
          $rootScope.$apply(function () {
            onSuccess.apply(that, args);
          });
        }
      }, function () {
        var that = this,
          args = arguments;

        if (onError) {
          $rootScope.$apply(function () {
            onError.apply(that, args);
          });
        }
      },
      options);
    })
  };
});

phonegapServices.factory('accelerometerService', function ($rootScope, cordovaReady) {
  return {
    getCurrentAcceleration: cordovaReady(function (onSuccess, onError) {
      navigator.accelerometer.getCurrentAcceleration(function () {
        var that = this,
          args = arguments;

        if (onSuccess) {
          $rootScope.$apply(function () {
            onSuccess.apply(that, args);
          });
        }
      }, function () {
        var that = this,
          args = arguments;

        if (onError) {
          $rootScope.$apply(function () {
            onError.apply(that, args);
          });
        }
      });
    })
  };
});

phonegapServices.factory('notificationService', function ($rootScope, cordovaReady) {
    return {
      alert: cordovaReady(function (message, alertCallback, title, buttonName) {
        navigator.notification.alert(message, function () {
          var that = this,
            args = arguments;
          
          $rootScope.$apply(function () {
            alertCallback.apply(that, args);
          });
        }, title, buttonName);
      }),
      confirm: cordovaReady(function (message, confirmCallback, title, buttonLabels) {
        navigator.notification.confirm(message, function () {
          var that = this,
            args = arguments;
          
          $rootScope.$apply(function () {
            confirmCallback.apply(that, args);
          });
        }, title, buttonLabels);
      }),
      beep: function (times) {
        navigator.notification.beep(times);
      },
      vibrate: function (milliseconds) {
        navigator.notification.vibrate(milliseconds);
      }
    };
  });
