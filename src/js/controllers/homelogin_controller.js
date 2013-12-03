angular.module(_CONTROLLERS_).controller('HomeLoginController', function($scope, oauth2Token) {
    console.log('### HomeLoginController in');
    
    $scope.signin = function() {
		oauth2Token.retrieveToken();
	};

    console.log('### HomeLoginController out');
});
