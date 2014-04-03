
angular.module(_SERVICES_).factory('Elastic', function($resource, oauth2Token) {
	resource = $resource('http://localhost:8080/elastic');

	return oauth2Token.wrapActions(resource, ["query", "get", "save", "delete"]);
});
