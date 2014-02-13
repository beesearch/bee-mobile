angular.module(_CONTROLLERS_).controller('HomeController', function($scope, $ionicModal, oauth2Token) {
	$scope.text = "Home Page!";
	oauth2Token.checkLogin();
});

angular.module(_CONTROLLERS_).controller('HomeLoginController', function($scope, oauth2Token) {
	console.log('### HomeLoginController in');

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

	console.log('### HomeLoginController out');
});
