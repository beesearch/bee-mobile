angular.module(_CONTROLLERS_).controller('app-login', function($scope, oauth2Token) {
	console.log('### app-login controller in');

	$scope.user = {
		username: window.localStorage.getItem("username"),
		password: null
	};

	$scope.remembermechecked = (window.localStorage.getItem("username") !== '');

	$scope.signin_click = function() {
		console.log("username: " + $scope.user.username + ", password: " + $scope.user.password);
		oauth2Token.retrieveToken($scope.user.username, $scope.user.password);
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
