angular.module(_CONTROLLERS_).controller('UserListController', function($scope, $http) {  
    console.log('### UserListControler in');
    
    // init values
    $scope.isDropdownOpen = false;
    $scope.orderProp = 'lastName';

    $scope.orderBy = function (prop) {
		console.log('prop: ' + prop);
		$scope.orderProp = prop;
		$scope.isDropdownOpen = false;
    };

    $http.get('http://zenbox-demo.herokuapp.com/zenbox-demo/rest/users/list').success(function(data) {
        $scope.users = data;
    });

    console.log('### UserListControler out');
});

angular.module(_CONTROLLERS_).controller('UserDetailController', function($scope, $routeParams, $http) {  
    console.log('### UserDetailController in');
  var url = 'http://zenbox-demo.herokuapp.com/zenbox-demo/rest/users/show/' + $routeParams.userId;
  $http.get(url).success(function(data) {
      $scope.user = data;
  });
  console.log('### UserDetailController out');
});