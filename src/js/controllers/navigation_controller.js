
angular.module(_CONTROLLERS_).controller('NavigationController', function($scope, $location) {

	$scope.isNavbarOpen = false;

	$scope.isActive = function (viewLocation) {
		return viewLocation === $location.path();
	};

	$scope.goto = function (viewLocation) {
		$location.path(viewLocation);
		$scope.isNavbarOpen = false;
	};

});
