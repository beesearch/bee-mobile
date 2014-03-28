angular.module(_CONTROLLERS_).controller('index', function($scope, $ionicModal, oauth2Token) {
	console.log('### index controller in');

	// Create and load the login modal
	$ionicModal.fromTemplateUrl('views/app/app-login.html', function(modal) {
		$scope.loginModal = modal;
	}, {
		scope: $scope,
		animation: 'slide-in-up',
		focusFirstInput: true
	});

	$scope.$on('event:auth-loginRequired', function(e, rejection) {
		console.log('### index controller : Received event:auth-loginRequired event.');
		$scope.loginModal.show();
	});

	$scope.$on('event:auth-loginConfirmed', function() {
		console.log('### index controller : Received event:auth-loginConfirmed event.');
		$scope.loginModal.hide();
	});

	//Be sure to cleanup the modal by removing it from the DOM
	$scope.$on('$destroy', function() {
		$scope.loginModal.remove();
	});

	console.log('### index controller out');
});
