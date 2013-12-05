
var oauth2Services = angular.module('oauth2Services', []);

oauth2Services.factory('oauth2Token', function($http) {

	return {
        retrieveToken: function(){
        	$http({
        		method: 'POST',
				url: 'http://localhost/oauth/token',
				headers: {'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW'},
				data: 'grant_type=password&username=johndoe&password=534b44a19bf18d20b71ecc4eb77c572f'
			}).success(function(data, status, headers, config) {
					console.log("data: " + data + ", status: " + status + ", headers: " + headers+ ", config: " + config);
			}).error(function(data, status, headers, config) {
					console.log("data: " + data + ", status: " + status + ", headers: " + headers+ ", config: " + config);
			});
        }  
    }
});
