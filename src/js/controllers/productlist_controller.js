angular.module(_CONTROLLERS_).controller('ProductListController', function($scope, $http) {  
    console.log('### ProductListControler in');

    $http.get('http://robbeehome.no-ip.biz:3302/album/listAllAlbum').success(function(data) {
        $scope.products = data;
    });

    console.log('### ProductListControler out');
});
