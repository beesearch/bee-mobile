angular.module(_CONTROLLERS_).controller('UserListController', function($scope, $http) {  
    console.log('### UserListControler in');
    $http.get('http://zenbox-demo.herokuapp.com/zenbox-demo/rest/users/list').success(function(data) {
        $scope.users = data;
    });
    $scope.orderProp = 'lastName';
    console.log('### UserListControler out');
});
