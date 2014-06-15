angular.module(_CONTROLLERS_).controller('company', function($scope, $beeTagCloud, oauth2Token, limitToFilter) {
	console.log('### company controller in');

	// Check login when app is launched
	// (search is first page displayed)
	oauth2Token.checkLogin();

	$scope.search = 'Alexandre';

	if ($scope.search) {
		console.log("Searching:" + $scope.search);
		
		var result = $ES_TopFiveProduct.query({'search' : $scope.search});
		result.$promise.then(function() {
			$scope.ideas = [];
			$.each(result, function(i, obj) {
    			$scope.ideas.push([obj.term, obj.count]);
			});
			$scope.limitedIdeas = limitToFilter($scope.ideas, 5);		
		});

	} else {
		// Search string is empty
		console.log("/!\\ Empty search");
		$scope.ideas = null;
	}
	
	console.log('### company controller out');
});