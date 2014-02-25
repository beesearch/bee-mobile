angular.module(_CONTROLLERS_).controller('app-index', function($scope, $ionicModal, oauth2Token) {
	console.log('### app-index controller in');

	$scope.text = "Home Page!";
	oauth2Token.checkLogin();

	$scope.openlogin_click = function() {
		console.log('### app-index controller : call oauth2Token.checkLogin()');
		oauth2Token.checkLogin();
	};

	console.log('### app-index controller in');
});
