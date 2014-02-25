angular.module(_CONTROLLERS_).controller('app', function($scope, $ionicModal) {
	console.log('### app controller in');

	// Create and load the login modal
	$ionicModal.fromTemplateUrl('/views/app/app-login.html', function(modal) {
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
		console.log('### app controller : on user.loggedOut. call $scope.openlogin_click()');
		$scope.openlogin_click();
	});

	console.log('### app controller out');
});
