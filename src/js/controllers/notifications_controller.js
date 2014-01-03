angular.module(_CONTROLLERS_).controller('NotificationsController', function($scope, notificationService) {
    console.log('### NotificationController in');
    notificationService.alert('message', function () {alert('callback!')}, 'title', 'button name!');
    console.log('### NotificationController out');
});
