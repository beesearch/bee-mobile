angular.module(_CONTROLLERS_).controller('HomeController', function($scope) {
    $scope.text = "Hello World!";
});

angular.module(_CONTROLLERS_).controller('HomeLoginController', function($scope, oauth2Token) {
    console.log('### HomeLoginController in');
    
    $scope.signin = function() {
		oauth2Token.retrieveToken($scope.username, $scope.password);
	};

    console.log('### HomeLoginController out');
});
