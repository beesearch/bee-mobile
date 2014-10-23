angular.module(_CONTROLLERS_).controller('notifications', function($scope, notificationService) {
	console.log('### notifications controller in');
	
	$scope.alertNotify = function() {
		notificationService.alert("Sample Alert",function() {console.log("Alert success")},"My Alert","Close");
	};

	$scope.confirmNotify = function() {
		notificationService.confirm("My Confirmation",function(){console.log("Confirm Success")},"Are you sure?",["Ok","Cancel"]);
	};

	$scope.promptNotify = function() {
		notificationService.prompt('Please enter your name', onPrompt,'Registration',['Ok','Exit'],'Jane Doe');
	};

	// process the promptation dialog result
    function onPrompt(results) {
        alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
    }

	$scope.vibrateNotify = function() {
		notificationService.vibrate(3000);
	};

	$scope.beepNotify = function() {
		notificationService.beep(2);
	};

	console.log('### notifications controller out');
});
