angular.module(_CONTROLLERS_).controller('company', function($scope, oauth2Token, limitToFilter) {
	console.log('### company controller in');

	// Check login when app is launched
	// (search is first page displayed)
	oauth2Token.checkLogin();


	console.log('### company controller out');

	$scope.ideas = [
	['ideas1', 10],
	['ideas2', 8],
	['ideas2', 6],
	['ideas2', 8],
	['ideas2', 4],
	['ideas3', 5]
	];

  $scope.limitedIdeas = limitToFilter($scope.ideas, 6);

});
