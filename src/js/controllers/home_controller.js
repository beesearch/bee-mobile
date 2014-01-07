angular.module(_CONTROLLERS_).controller('HomeController', function($scope) {
    $scope.text = "Hello World!";
});

angular.module(_CONTROLLERS_).controller('HomeLoginController', function($scope, oauth2Token) {
    console.log('### HomeLoginController in');
    
    $scope.username = localStorage.username;
    $scope.remembermechecked = (localStorage.username !== '');

    $scope.signin_click = function() {
		oauth2Token.retrieveToken($scope.username, $scope.password);
	};

	$scope.rememberme_change = function() {
		if ($scope.rememberme == true)
		{
			localStorage.username = $scope.username;	
		}
		else
		{
			localStorage.username = '';
		};
	};

    console.log('### HomeLoginController out');
});
