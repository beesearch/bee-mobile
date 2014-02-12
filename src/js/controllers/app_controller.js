angular.module(_CONTROLLERS_).controller('AppController', function($scope, $ionicModal) {
	console.log('### AppController in');

	// Create and load the login modal
	$ionicModal.fromTemplateUrl('/html/partials/home/login.html', function(modal) {
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

	console.log('### AppController in');
});
