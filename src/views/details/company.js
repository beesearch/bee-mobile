angular.module(_CONTROLLERS_).controller('company', function($scope, $stateParams, beeModel) {
	console.log('### company controller in (companyId:' + $stateParams.companyId + ')');

	$scope.company = beeModel.get({type: 'customer', index: 'qn', id: $stateParams.companyId});
	console.log($scope.company);

	/*$scope.topFivePieChart = {
		options: {
			chart: {
				type: 'pie'
			}
		},
		series: [{
            data: [10]
        }],
		title: {
			text: 'Top 5 produits'
		},
		loading: false
	}

	$scope.topFiveBarChart = {
		options: {
			chart: {
				type: 'bar'
			}
		},
		series: [{
            data: [10, 15, 12, 8, 7]
        }],
		title: {
			text: 'Top 5 produits'
		},
		loading: false
	}

	$scope.search = 'Alexandre';

	if ($scope.search) {
		console.log("Searching:" + $scope.search);
		
		var result = $ES_TopFiveProduct.query({'search' : $scope.search});
		result.$promise.then(function() {
			console.log(JSON.stringify(result));
			// Empty existing series array
			while($scope.topFivePieChart.series.length > 0) {
			    $scope.topFivePieChart.series.pop();
			}
			// Push new series values
			$scope.topFivePieChart.series.push(result.series);
			// Display chart !
			$scope.topFivePieChart.loading = false;
		});
	} else {
		// Search string is empty
		console.log("/!\\ Empty search");
		$scope.ideas = null;
	}*/
	
	console.log('### company controller out');
});