angular.module(_CONTROLLERS_).controller('order', function($scope, $stateParams, beeModel, currentItem) {
    console.log('### order controller in (companyId:' + $stateParams.companyId + ', index: ' + $stateParams.index + ', type: ' + $stateParams.type + ')');

    $scope.item = currentItem.get();

    console.log('### order controller out');
});
