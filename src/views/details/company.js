angular.module(_CONTROLLERS_).controller('company', function($scope, $stateParams, beeModel, currentItem) {
	console.log('### company controller in (companyId:' + $stateParams.companyId + ', index: ' + $stateParams.index + ', type: ' + $stateParams.type + ')');

	$scope.item = currentItem.get();

	$scope.top5ProductsChart = {
		series: [],
		options: { 
			chart: { 
				title: 'Top 5 produits',
				type: 'pie'	
			}
		},
		loading: true
	}

	$scope.top5SalesChart = {
		series: [],
		options: { 
			chart: { 
				title: 'Top sales',
				type: 'pie'	
			}
		},
		loading: true
	}

	// Make monochrome colors and set them as default for all pies
	Highcharts.getOptions().plotOptions.pie.colors = (function () {
	    var colors = [],
	        base = Highcharts.getOptions().colors[0],
	        i

	    for (i = 0; i < 10; i++) {
	        // Start out with a darkened base color (negative brighten), and end
	        // up with a much brighter color
	        colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
	    }
	    return colors;
	}());

	beeModel.get({type: $stateParams.type, index: $stateParams.index, id: $stateParams.companyId}, function(data) {
		// Set customer datas in scope
		$scope.item = data.companyDatas;

		// Set chart values and remove loading
		$scope.top5ProductsChart.title = data.companyTop5Chart.title;
		//$scope.top5ProductsChart.options.chart.type = data.companyTop5Chart.type;
		for (var i = 0; i < data.companyTop5Chart.series.length; i++) {
			var chart = data.companyTop5Chart.series[i];
			$scope.top5ProductsChart.series.push(chart);
		};
		$scope.top5ProductsChart.loading = false;

		// Set chart values and remove loading
		$scope.top5SalesChart.title = data.companyTop5Sales.title;
		//$scope.top5SalesChart.options.chart.type = data.companyTop5Sales.type;
		for (var i = 0; i < data.companyTop5Sales.series.length; i++) {
			var chart = data.companyTop5Sales.series[i];
			$scope.top5SalesChart.series.push(chart);
		};
		$scope.top5SalesChart.loading = false;
	}, function(error) {
		// An error occured
		console.log('error', error)
	});

	console.log('### company controller out');
});