
angular.module(_SERVICES_).factory('Elastic', function($resource, oauth2Token, BACKEND_PROTOCOL, BACKEND_HOST, BACKEND_PORT) {
	resource = $resource(BACKEND_PROTOCOL + '://' + BACKEND_HOST + ':' + BACKEND_PORT + '/search');

	return oauth2Token.wrapActions(resource, ["query", "get", "save", "delete"]);
});
