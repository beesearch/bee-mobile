
angular.module(_CONTROLLERS_).controller('search', function($scope, $beeElastic) {
	console.log('### search controller in');
	
	// Search action : call elasticsearch service
	$scope.search_onchange = function() {
		// Prevent from searching an empty string
		if ($scope.search) {
			console.log("Searching:" + $scope.search);
		} else {
			// Search string is empty
			$scope.items = null;
		}
	}

	console.log('### search controller out');
});
