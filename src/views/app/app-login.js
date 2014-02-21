angular.module(_CONTROLLERS_).controller('app-login', function($scope, oauth2Token) {
	console.log('### app-login controller in');

	$scope.username = window.localStorage.getItem("username");
	$scope.remembermechecked = (window.localStorage.getItem("username") !== '');

	$scope.signin_click = function() {
		oauth2Token.retrieveToken($scope.username, $scope.password);
	};

	$scope.rememberme_change = function() {
		if ($scope.rememberme == true)
		{
			window.localStorage.setItem("username", $scope.username);	
		}
		else
		{
			window.localStorage.removeItem("username");
		};
	};

	console.log('### app-login controller out');
});
