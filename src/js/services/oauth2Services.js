
angular.module(_SERVICES_).factory('oauth2Token', function($http) {
	var oauth2Token = {};

	oauth2Token.set = function(token) {
		localStorage.access_token = token;
	}

	oauth2Token.get = function() {
		return localStorage.access_token;
	}

	oauth2Token.retrieveToken = function(){
		$http({
			method: 'POST',
			url: 'http://localhost/oauth/token',
			headers: {'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW'},
			data: 'grant_type=password&username=johndoe&password=534b44a19bf18d20b71ecc4eb77c572f'
		}).success(function(data, status, headers, config) {
			console.log("data: " + JSON.stringify(data) + ", status: " + status);
			oauth2Token.set(data.access_token);
			console.log(localStorage.access_token);
		}).error(function(data, status, headers, config) {
			console.log("data: " + JSON.stringify(data) + ", status: " + status + ", config: " + JSON.stringify(config));
		});
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
			angular.extend({}, data || {}, {access_token: oauth2Token.get()}),
				success,
				error
			);
		};
	};

	return oauth2Token;
});
