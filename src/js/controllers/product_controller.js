angular.module(_CONTROLLERS_).controller('ProductListController', function($scope, $http) {  
	console.log('### ProductListControler in');

   // init values
   $scope.isDropdownOpen = false;
   $scope.productProp = 'title';

   $scope.orderBy = function (prop) {
   	console.log('prop: ' + prop);
   	$scope.productProp = prop;
   	$scope.isDropdownOpen = false;
   };

   $http.get('http://robbeehome.no-ip.biz:3302/album/listAllAlbum').success(function(data) {
    //$http.get('http://localhost:3302/album/listAllAlbum').success(function(data) {
        //$scope.products = [{"id":1,"title":"For Those About To Rock We Salute You","PreviewUrl":"http://a1362.phobos.apple.com/us/r1000/094/Music/v4/a6/01/b6/a601b601-c045-8d0b-d825-ee6ef4703bd6/mzaf_5947244751830910755.aac.m4a","ArtworkUrl30":"http://a4.mzstatic.com/us/r30/Features/v4/ba/c3/72/bac3720b-9c32-c70f-6596-c1c928807d57/dj.hnuoonld.30x30-50.jpg","ArtworkUrl60":"http://a1.mzstatic.com/us/r30/Features/v4/ba/c3/72/bac3720b-9c32-c70f-6596-c1c928807d57/dj.hnuoonld.60x60-50.jpg","ArtworkUrl100":"http://a2.mzstatic.com/us/r30/Features/v4/ba/c3/72/bac3720b-9c32-c70f-6596-c1c928807d57/dj.hnuoonld.100x100-75.jpg","artistId":1},{"id":2,"title":"Balls to the Wall","PreviewUrl":"http://a311.phobos.apple.com/us/r1000/082/Music/e7/9d/8d/mzm.afcfzgse.aac.p.m4a","ArtworkUrl30":"http://a1.mzstatic.com/us/r30/Music/64/8f/a1/mzi.atbbqokx.30x30-50.jpg","ArtworkUrl60":"http://a5.mzstatic.com/us/r30/Music/64/8f/a1/mzi.atbbqokx.60x60-50.jpg","ArtworkUrl100":"http://a1.mzstatic.com/us/r30/Music/64/8f/a1/mzi.atbbqokx.100x100-75.jpg","artistId":2},{"id":3,"title":"Restless and Wild","PreviewUrl":"http://a1714.phobos.apple.com/us/r1000/114/Music/f6/2f/3f/mzm.rtqrutfx.aac.p.m4a","ArtworkUrl30":"http://a3.mzstatic.com/us/r30/Music/9a/20/37/mzi.zshnfiau.30x30-50.jpg","ArtworkUrl60":"http://a2.mzstatic.com/us/r30/Music/9a/20/37/mzi.zshnfiau.60x60-50.jpg","ArtworkUrl100":"http://a3.mzstatic.com/us/r30/Music/9a/20/37/mzi.zshnfiau.100x100-75.jpg","artistId":2},{"id":4,"title":"Let There Be Rock","PreviewUrl":"http://a1884.phobos.apple.com/us/r1000/060/Music/v4/4e/97/49/4e974915-4bb5-7b2c-00d1-c631d8b8ab6b/mzaf_5100280201532665709.aac.m4a","ArtworkUrl30":"http://a2.mzstatic.com/us/r30/Features4/v4/7c/52/16/7c5216d8-2d7c-d307-6d4a-d7b447379ced/dj.eynsaemm.30x30-50.jpg","ArtworkUrl60":"http://a1.mzstatic.com/us/r30/Features4/v4/7c/52/16/7c5216d8-2d7c-d307-6d4a-d7b447379ced/dj.eynsaemm.60x60-50.jpg","ArtworkUrl100":"http://a5.mzstatic.com/us/r30/Features4/v4/7c/52/16/7c5216d8-2d7c-d307-6d4a-d7b447379ced/dj.eynsaemm.100x100-75.jpg","artistId":1},{"id":5,"title":"Big Ones","PreviewUrl":"http://a1944.phobos.apple.com/us/r1000/091/Music/aa/6b/8f/mzm.sofyyvxu.aac.p.m4a","ArtworkUrl30":"http://a2.mzstatic.com/us/r30/Features/94/74/0e/dj.bykwsmwv.30x30-50.jpg","ArtworkUrl60":"http://a4.mzstatic.com/us/r30/Features/94/74/0e/dj.bykwsmwv.60x60-50.jpg","ArtworkUrl100":"http://a3.mzstatic.com/us/r30/Features/94/74/0e/dj.bykwsmwv.100x100-75.jpg","artistId":3}],[{"id":6,"title":"Jagged Little Pill","PreviewUrl":"http://a157.phobos.apple.com/us/r1000/063/Music/d9/b0/22/mzm.ghjnfqdr.aac.p.m4a","ArtworkUrl30":"http://a5.mzstatic.com/us/r30/Music/y2005/m09/d07/h12/mzi.rinxxbxp.30x30-50.jpg","ArtworkUrl60":"http://a4.mzstatic.com/us/r30/Music/y2005/m09/d07/h12/mzi.rinxxbxp.60x60-50.jpg","ArtworkUrl100":"http://a3.mzstatic.com/us/r30/Music/y2005/m09/d07/h12/mzi.rinxxbxp.100x100-75.jpg","artistId":4},{"id":7,"title":"Facelift","PreviewUrl":"http://a1381.phobos.apple.com/us/r1000/071/Music/c6/fa/e8/mzm.gtwowzej.aac.p.m4a","ArtworkUrl30":"http://a2.mzstatic.com/us/r30/Music/cd/26/64/mzi.wczxccaa.30x30-50.jpg","ArtworkUrl60":"http://a1.mzstatic.com/us/r30/Music/cd/26/64/mzi.wczxccaa.60x60-50.jpg","ArtworkUrl100":"http://a1.mzstatic.com/us/r30/Music/cd/26/64/mzi.wczxccaa.100x100-75.jpg","artistId":5}];
        $scope.products = data;
    });

console.log('### ProductListControler out');
});

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