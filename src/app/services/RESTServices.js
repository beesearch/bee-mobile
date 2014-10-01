
angular.module(_SERVICES_).factory('beeSearch', function($resource, oauth2Token, BACKEND_PROTOCOL, BACKEND_HOST, BACKEND_PORT) {
	resource = $resource(BACKEND_PROTOCOL + '://' + BACKEND_HOST + ':' + BACKEND_PORT + '/search');

	return oauth2Token.wrapActions(resource, ["query"]); // "get", "save", "remove", "delete" also possible
});

angular.module(_SERVICES_).factory('beeModel', function($resource, oauth2Token, BACKEND_PROTOCOL, BACKEND_HOST, BACKEND_PORT) {
	resource = $resource(BACKEND_PROTOCOL + '://' + BACKEND_HOST + ':' + BACKEND_PORT + '/db/abo/collection/customer/id/:id');
    //resource = $resource(BACKEND_PROTOCOL + '://' + BACKEND_HOST + ':' + BACKEND_PORT + '/db/:type/collection/:index/id/:id');

	return oauth2Token.wrapActions(resource, ["get"]);
});
