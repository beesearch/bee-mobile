
angular.module(_SERVICES_).factory('Contact', function($resource, oauth2Token) {
	var resource = $resource('http://localhost:80/contacts/:id', {
		id:'@id'
	});

	resource = oauth2Token.wrapActions(resource, ["query", "get", "save", "delete"]);

	return resource;
});
