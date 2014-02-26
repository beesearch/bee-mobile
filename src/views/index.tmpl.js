angular.module(_CONTROLLERS_).controller('index', function($scope, $ionicModal) {
	console.log('### index controller in');

	// Create and load the login modal
	$ionicModal.fromTemplateUrl('views/app/app-login.html', function(modal) {
		$scope.loginModal = modal;
	}, {
		scope: $scope,
		animation: 'slide-in-up'
	});

	$scope.openlogin_click = function() {
		$scope.loginModal.show();
	};

	$scope.closelogin_click = function() {
		$scope.loginModal.hide();
	};

	$scope.$on('user.loggedOut', function(e) {
		console.log('### index controller : Received user.loggedOut event.');
		$scope.openlogin_click();
	});

	console.log('### index controller out');
});
