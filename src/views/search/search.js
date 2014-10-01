
angular.module(_CONTROLLERS_).controller('search', function($scope, $state, oauth2Token, beeSearch, currentItem, searchSettings) {
	console.log('### search controller in');

	// Check login when app is launched
	// (search is first page displayed)
	oauth2Token.checkLogin();

	// Search action : call elasticsearch service
	$scope.search_onchange = function() {
		// Prevent from searching an empty string
		if ($scope.search) {
			console.log("Searching:" + $scope.search);
			beeSearch.query({'search': $scope.search, 'indexes': searchSettings.getIndexes(), 'types':searchSettings.getTypes()}, function(data) {
				$scope.items = data;
				if ($scope.items.length === 0) {
					$scope.noresult = true;
				} else {
					$scope.noresult = false;
				}
			});
		} else {
			// Search string is empty
			$scope.items = null;
		}
	}

	$scope.item_onclick = function(item) {
		// Store the current line to use it in the next screen
		currentItem.set(item);
		// Go to next screen
		$state.go('company', { 'companyId': item.fields["company.companyId"], 'index': item._index, 'type': item._type });
	}

	console.log('### search controller out');
});
