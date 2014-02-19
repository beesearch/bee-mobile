angular.module(_CONTROLLERS_).controller('HomeController', function($scope, $ionicModal, oauth2Token) {
	$scope.text = "Home Page!";
	oauth2Token.checkLogin();

	$scope.openlogin_click = function() {
		oauth2Token.checkLogin();
	};
});
