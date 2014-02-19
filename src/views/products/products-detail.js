angular.module(_CONTROLLERS_).controller('ProductDetailController', function($scope, $routeParams, $http) {  
	console.log('### ProductDetailController in');
  //var url = 'http://robbeehome.no-ip.biz:3302/album/findAlbumByAlbumId/' + $routeParams.productId;
  var url = 'http://robbeehome.no-ip.biz:3302/album/findAlbumByAlbumId/' + $routeParams.productId;
  $http.get(url).success(function(data) {
  	//$scope.product = {"id":2,"title":"Balls to the Wall","artistId":2,"ArtworkUrl100":"http://a1.mzstatic.com/us/r30/Music/64/8f/a1/mzi.atbbqokx.100x100-75.jpg"};
  	$scope.product = data;
  });

  var url = 'http://robbeehome.no-ip.biz:3302/track/findTrackByAlbumId/' + $routeParams.productId;
  $http.get(url).success(function(data) {
  	$scope.tracks = data;
  });
  console.log('### ProductDetailController out');
});
