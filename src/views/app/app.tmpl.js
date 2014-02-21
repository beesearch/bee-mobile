angular.module(_CONTROLLERS_).controller('app', function($scope, $ionicModal) {
	console.log('### app controller in');

	// Create and load the login modal
	$ionicModal.fromTemplateUrl('/www/views/app/app-login.html', function(modal) {
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
		$scope.openlogin_click();
		//setTimeout( function() {$scope.openModal()}, 500);
	});

	console.log('### app controller out');
});
