angular.module(_CONTROLLERS_).controller('UserDetailController', function($scope, $routeParams, $http) {  
    console.log('### UserDetailController in');
  var url = 'http://zenbox-demo.herokuapp.com/zenbox-demo/rest/users/show/' + $routeParams.userId;
  $http.get(url).success(function(data) {
      $scope.user = data;
  });
  console.log('### UserDetailController out');
});
