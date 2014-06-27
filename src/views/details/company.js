angular.module(_CONTROLLERS_).controller('company', function($scope, $stateParams, beeModel, currentItem) {
	console.log('### company controller in (companyId:' + $stateParams.companyId + ', index: ' + $stateParams.index + ', type: ' + $stateParams.type + ')');

	$scope.item = currentItem.get();

	$scope.top5ProductsChart = {
		series: [],
		options: { chart: { type: 'bar'	} },
		loading: true
	}

	beeModel.get({type: $stateParams.type, index: $stateParams.index, id: $stateParams.companyId}, function(data) {
		// Set customer datas in scope
		$scope.item = data.companyDatas;

		// Set chart values and remove loading
		$scope.top5ProductsChart.title = data.companyTop5Chart.title;
		$scope.top5ProductsChart.options.chart.type = data.companyTop5Chart.type;
		for (var i = 0; i < data.companyTop5Chart.series.length; i++) {
			var chart = data.companyTop5Chart.series[i];
			$scope.top5ProductsChart.series.push(chart);
		};
		$scope.top5ProductsChart.loading = false;
	}, function(error) {
		// An error occured
		console.log('error', error)
	});

	console.log('### company controller out');
});