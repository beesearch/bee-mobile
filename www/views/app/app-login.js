angular.module(_CONTROLLERS_).controller('app-login', function($scope, oauth2Caller) {
	console.log('### app-login controller in');

	$scope.user = {
		username: window.localStorage.getItem("username"),
		password: null
	};

	$scope.remembermechecked = (window.localStorage.getItem("username") !== '');

	$scope.signin_click = function() {
		oauth2Caller.retrieveToken($scope.user.username, $scope.user.password);
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
