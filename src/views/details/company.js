angular.module(_CONTROLLERS_).controller('company', function($scope, $stateParams, beeModel, currentItem) {
	console.log('### company controller in (companyId:' + $stateParams.companyId + ', index: ' + $stateParams.index + ', type: ' + $stateParams.type + ')');

	$scope.item = currentItem.get();

	$scope.top5ProductsChart = {
		series: [],
        title: {
            text:'Ventes par categorie'
        },
		options: {
            chart:{
                type: 'bar'
            },
            plotOptions:{
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enable: false
                    },
                    showInLegend: true
                }
            }
		},
		loading: true
	}

	$scope.customerHistorySales = {
        series: [],
        title: {
            text:'Meilleurs ventes'
        },
        options: {
            chart:{
                type: 'bar'
            },
            plotOptions:{
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enable: false
                    },
                    showInLegend: true
                }
            }
        },
        loading: true
	}

	beeModel.get({type: $stateParams.type, index: $stateParams.index, id: $stateParams.companyId}, function(data) {
		// Set customer datas in scope
		$scope.item = data.customerDatas[0];

		// Set chart values and remove loading
        $scope.top5ProductsChart.series = data.customerTop5Chart.series;
        $scope.top5ProductsChart.loading = false;

		// Set chart values and remove loading
		$scope.customerHistorySales.series = data.customerHistorySales.series;
        $scope.customerHistorySales.xAxis = data.customerHistorySales.xAxis;
        $scope.customerHistorySales.loading = false;

	}, function(error) {
		// An error occured
		console.log('error', error)
	});
	
	console.log('### company controller out');
});

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