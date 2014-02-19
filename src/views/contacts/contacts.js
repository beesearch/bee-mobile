angular.module(_CONTROLLERS_).controller('ContactListController', function($scope, Contact) {  
    console.log('### ContactListController in');
    
    // init values
    $scope.isDropdownOpen = false;
    $scope.orderProp = 'lastName';

    $scope.orderBy = function (prop) {
		console.log('prop: ' + prop);
		$scope.orderProp = prop;
		$scope.isDropdownOpen = false;
    };

    /*$http.get('http://localhost:80/users/list').success(function(data) {
        $scope.users = data;
    });*/

    var contact = Contact.get({id: 1}, function() {
         $scope.users = contact;
    });

    console.log('### ContactListController out');
});
