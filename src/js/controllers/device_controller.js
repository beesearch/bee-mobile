angular.module(_CONTROLLERS_).controller('DeviceController', function($scope, notificationService) {
    console.log('### DeviceController in');
    
    $scope.device = device;

    console.log('### DeviceController out');
});
