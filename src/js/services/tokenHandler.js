
angular.module(_SERVICES_).factory('tokenHandler', function() {
  var tokenHandler = {};
  var token = "none";

  tokenHandler.set = function(newToken) {
    token = newToken;
  }

  tokenHandler.get = function() {
    return token;
  }

});
