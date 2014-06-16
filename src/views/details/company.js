angular.module(_CONTROLLERS_).controller('company', function($scope, $ES_TopFiveProduct, oauth2Token, limitToFilter) {
	console.log('### company controller in');

	$scope.topFivePieChart = {
		options: {
			chart: {
				type: 'pie'
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
		
		/*var result = $ES_TopFiveProduct.query({'search' : $scope.search});
		result.$promise.then(function() {
			console.log(JSON.stringify(result));
			$scope.topFivePieChart.series[0].data = [];
			for (var i = 0; i < result.length; i++) {
				var obj = result[i];
				console.log({'name': obj.term, 'y': obj.count});

				$scope.topFivePieChart.series[0].data.push(obj.count);
				console.log(JSON.stringify($scope.topFivePieChart.series));
			};

			console.log(JSON.stringify($scope.topFivePieChart.series));
			$scope.topFivePieChart.loading = false;
		});*/

	} else {
		// Search string is empty
		console.log("/!\\ Empty search");
		$scope.ideas = null;
	}
	
	console.log('### company controller out');
});