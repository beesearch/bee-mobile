
angular.module(_SERVICES_).factory('$beeElastic', function($resource, oauth2Token, BACKEND_PROTOCOL, BACKEND_HOST, BACKEND_PORT) {
	resource = $resource(BACKEND_PROTOCOL + '://' + BACKEND_HOST + ':' + BACKEND_PORT + '/elastic');

	return oauth2Token.wrapActions(resource, ["query"]); //, "get", "save", "delete"]);
});


angular.module(_SERVICES_).factory('$beeTagCloud', function($resource, oauth2Token, BACKEND_PROTOCOL, BACKEND_HOST, BACKEND_PORT) {
	resource = $resource(BACKEND_PROTOCOL + '://' + BACKEND_HOST + ':' + BACKEND_PORT + '/elastic/beeTagCloud');

	return oauth2Token.wrapActions(resource, ["query"]); //, "get", "save", "delete"]);
});