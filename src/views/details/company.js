angular.module(_CONTROLLERS_).controller('company', function($scope, $beeTagCloud, oauth2Token, limitToFilter) {
	console.log('### company controller in');

	// Check login when app is launched
	// (search is first page displayed)
	oauth2Token.checkLogin();

	$scope.search = 'Alexandre';

	if ($scope.search) {
		console.log("Searching:" + $scope.search);
		$scope.ideas = $beeTagCloud.query({'search' : $scope.search});
		$scope.limitedIdeas = limitToFilter($scope.ideas, 2);
		console.log($scope.ideas);
	} else {
		// Search string is empty
		console.log("/!\\ Empty search");
		$scope.ideas = null;
	}

	

	// $scope.ideas = [
	// ['ideas1', 10],
	// ['ideas2', 8],
	// ['ideas2', 6],
	// ['ideas2', 8],
	// ['ideas2', 4],
	// ['ideas3', 5]
	// ];
  	//$scope.limitedIdeas = limitToFilter($scope.ideas, 2);
  	
	console.log('### company controller out');
});