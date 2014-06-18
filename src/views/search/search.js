
angular.module(_CONTROLLERS_).controller('search', function($scope, beeSearch, oauth2Token) {
	console.log('### search controller in');

	// Check login when app is launched
	// (search is first page displayed)
	oauth2Token.checkLogin();

	// Search action : call elasticsearch service
	$scope.search_onchange = function() {
		// Prevent from searching an empty string
		if ($scope.search) {
			console.log("Searching:" + $scope.search);
			$scope.items = beeSearch.query({'search' : $scope.search});
		} else {
			// Search string is empty
			$scope.items = null;
		}
	}

	console.log('### search controller out');
});
