angular.module(_CONTROLLERS_).controller('index', function($scope, $ionicModal, $ionicSideMenuDelegate, $location, oauth2Token, oauth2Caller, searchSettings) {
	console.log('### index controller in');

	// Indexes search settings
	$scope.switchIndex = function(index) {
		searchSettings.switchIndex(index);
	}

	// Types search settings
	$scope.switchType = function(type) {
		searchSettings.switchType(type);
	}

	// Goto action : close side menu then go to page
	$scope.goTo = function(page) {
		$ionicSideMenuDelegate.toggleLeft();
		$location.url('/' + page);
	};

	// Logout action
	$scope.logout = function() {
		oauth2Token.logout();
	}

	// Create and load the login modal
	$ionicModal.fromTemplateUrl('views/app/app-login.html', function(modal) {
		$scope.loginModal = modal;
	}, {
		scope: $scope,
		animation: 'slide-in-up',
		focusFirstInput: true,
		backdropClickToClose: false
	});

	// Event action used when login is required from server
	$scope.$on('event:auth-loginRequired', function(e) {
		console.log('### index controller : Received event:auth-loginRequired event.');
		openLoginModal();
	});

	// Event action used when login is confirmed from server
	$scope.$on('event:auth-loginConfirmed', function(e) {
		console.log('### index controller : Received event:auth-loginConfirmed event.');
		closeLoginModal();
	});

	// Event action used when an error is received from server
	$scope.$on('event:auth-errorReceived', function(e, error) {
		console.log('### index controller : Received event:auth-errorReceived event. (error: ' + JSON.stringify(error) + ')');

		// Server is unreachable
		if (error.status === 0) {
			$scope.message = "Serveur inaccessible"
			return;
		};

		switch (error.data.error.code) {
			// Login/Password didn't match
			case 400:
				openLoginModal("Nom ou mot de passse invalide");
				break;
			// Access token is outdated
			case 401:
				oauth2Caller.tryRefreshToken();
				break;
			default:
				openLoginModal("Une erreur inconnue s'est produite");
		}
	});

	openLoginModal = function() {
		$scope.message = '';
		$scope.loginModal.show();
	}

	openLoginModal = function(message) {
		$scope.message = message;
		$scope.loginModal.show();
	}

	closeLoginModal = function() {
		$scope.loginModal.hide();
		$scope.message = '';
	}

	// Cleanup the modal by removing it from the DOM
	$scope.$on('$destroy', function() {
		$scope.loginModal.remove();
	});

	console.log('### index controller out');
});
