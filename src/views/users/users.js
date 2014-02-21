angular.module(_CONTROLLERS_).controller('users', function($scope, $http) {  
    console.log('### users controller in');
    
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

    console.log('### users controller out');
});
