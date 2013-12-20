
angular.module(_SERVICES_).factory('Contact', function($resource, tokenHandler) {
	var resource = $resource('http://localhost:80/contacts/:id', {
		id:'@id'
	});

	resource = tokenHandler.wrapActions(resource, ["query", "get", "save", "delete"]);

	return resource;
});
