angular.module(_CONTROLLERS_).controller('app-index', function($scope, oauth2Token, Elastic) {
	console.log('### app-index controller in');

	$scope.text = "Home Page!";
	oauth2Token.checkLogin();

	$scope.sendrequest_click = function() {
		$scope.data = Elastic.get();
	};

	console.log('### app-index controller in');
});
