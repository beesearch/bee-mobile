
angular.module(_SERVICES_).factory('oauth2Token', function($rootScope) {
	var oauth2Token = {};

	oauth2Token.setAccessToken = function(token) {
		window.localStorage.setItem("access_token", token);
	}

	oauth2Token.getAccessToken = function() {
		return window.localStorage.getItem("access_token");
	}

	oauth2Token.setRefreshToken = function(token) {
		window.localStorage.setItem("refresh_token", token);
	}

	oauth2Token.getRefreshToken = function() {
		return window.localStorage.getItem("refresh_token");
	}

	oauth2Token.isLoggedIn = function() {
		// Check auth token
		if (oauth2Token.getAccessToken() == null) {
			return false;
		}
		return true;
	}

	oauth2Token.checkLogin = function() {
		// Check if logged in and fire events
		if(this.isLoggedIn()) {
			console.log('### oauth2Token.checkLogin : broadcast event:auth-loginConfirmed');
			$rootScope.$broadcast('event:auth-loginConfirmed');
		} else {
			console.log('### oauth2Token.checkLogin : broadcast event:auth-loginRequired');
			$rootScope.$broadcast('event:auth-loginRequired');
		}
	}

	oauth2Token.logout = function() {
		// log out user
		window.localStorage.removeItem("access_token");
		window.localStorage.removeItem("refresh_token");
		$rootScope.$broadcast('event:auth-loginRequired');
	}

	oauth2Token.broadcastError = function(error) {
		console.log('### oauth2Token.broadcastError : broadcast event:auth-errorReceived (error: ' + JSON.stringify(error) + ')');
		$rootScope.$broadcast('event:auth-errorReceived', error);
	}

	// wraps given actions of a resource to send auth token
	// with every request
	oauth2Token.wrapActions = function(resource, actions) {
		// copy original resource
		var wrappedResource = resource;
		// loop through actions and actually wrap them
		for (var i=0; i < actions.length; i++) {
			tokenWrapper(wrappedResource, actions[i]);
		};
		// return modified copy of resource
		return wrappedResource;
	};

	// wraps resource action to send request with auth token
	var tokenWrapper = function(resource, action) {
		// copy original action
		resource['_' + action] = resource[action];
		// create new action wrapping the original
		// and sending token
		resource[action] = function(data, success, error) {
			return resource['_' + action](
			// call action with provided data and
			// appended access_token
			angular.extend({}, data || {}, {access_token: oauth2Token.getAccessToken()}),
				success,
				error
			);
		};
	};

	return oauth2Token;
});

angular.module(_SERVICES_).factory('oauth2Caller', function($http, $rootScope, oauth2Token, BACKEND_PROTOCOL, BACKEND_HOST, BACKEND_PORT) {
	var oauth2Caller = {};

	oauth2Caller.retrieveToken = function(username, password) {
		console.log('### oauth2Caller.retrieveToken : Authenticating user ' + username);
		$http({
			method: 'POST',
			url: BACKEND_PROTOCOL + '://' + BACKEND_HOST + ':' + BACKEND_PORT + '/oauth/token',
			headers: {'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW'},
			data: 'grant_type=password&username=' + username + '&password=' + password
		}).success(function(data, status, headers, config) {
			console.log('### oauth2Caller.retrieveToken : Authentication successful!');
			oauth2Token.setAccessToken(data.access_token);
			oauth2Token.setRefreshToken(data.refresh_token);
			$rootScope.$broadcast('event:auth-loginConfirmed');
		}).error(function(data, status, headers, config) {
			console.log('### oauth2Caller.retrieveToken : Authentication failed (' + data.error.error_description + ')');
		});
	}

	oauth2Caller.tryRefreshToken = function() {
		if (oauth2Token.getRefreshToken() === null) { return; };
		console.log('### oauth2Caller.tryRefreshToken : Refreshing auth with token ' + oauth2Token.getRefreshToken());
		$http({
			method: 'POST',
			url: BACKEND_PROTOCOL + '://' + BACKEND_HOST + ':' + BACKEND_PORT + '/oauth/token',
			headers: {'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW'},
			data: 'grant_type=refresh_token&refresh_token=' + oauth2Token.getRefreshToken()
		}).success(function(data, status, headers, config) {
			console.log('### oauth2Caller.tryRefreshToken : Tokens refreshed!');
			oauth2Token.setAccessToken(data.access_token);
			oauth2Token.setRefreshToken(data.refresh_token);
			$rootScope.$broadcast('event:auth-loginConfirmed');
		}).error(function(data, status, headers, config) {
			console.log('### oauth2Caller.tryRefreshToken : Authentication failed (' + data.error.error_description + ')');
			oauth2Token.logout();
		});
	}

	return oauth2Caller;
});