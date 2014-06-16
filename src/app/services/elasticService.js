
angular.module(_SERVICES_).factory('$ES_Search', function($resource, oauth2Token, BACKEND_PROTOCOL, BACKEND_HOST, BACKEND_PORT) {
	resource = $resource(BACKEND_PROTOCOL + '://' + BACKEND_HOST + ':' + BACKEND_PORT + '/elastic');

	return oauth2Token.wrapActions(resource, ["query"]); //, "get", "save", "delete"]);
});


angular.module(_SERVICES_).factory('$ES_TopFiveProduct', function($resource, oauth2Token, BACKEND_PROTOCOL, BACKEND_HOST, BACKEND_PORT) {
	resource = $resource(BACKEND_PROTOCOL + '://' + BACKEND_HOST + ':' + BACKEND_PORT + '/elastic/topFiveProduct');

	return oauth2Token.wrapActions(resource, ["query"]); //, "get", "save", "delete"]);
});
