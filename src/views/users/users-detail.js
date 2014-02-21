angular.module(_CONTROLLERS_).controller('users-detail', function($scope, $routeParams, $http) {  
  console.log('### users-detail controller in');
  
  var url = 'http://zenbox-demo.herokuapp.com/zenbox-demo/rest/users/show/' + $routeParams.userId;
  $http.get(url).success(function(data) {
      $scope.user = data;
  });
  
  console.log('### users-detail controller out');
});
