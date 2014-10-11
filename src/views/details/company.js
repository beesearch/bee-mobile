angular.module(_CONTROLLERS_).controller('company', function($scope, $state, $stateParams, beeModel, currentItem) {
	console.log('### company controller in (companyId:' + $stateParams.companyId + ', index: ' + $stateParams.index + ', type: ' + $stateParams.type + ')');

	$scope.item = currentItem.get();

	$scope.top5ProductsChart = {
		series: [],
        chart:{
            type: 'line'
        },
        title: {
            text:'Ventes par categorie'
        },
		options: {
            chart:{
                type: 'pie'
            },
            plotOptions:{
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels:  false,
                    showInLegend: false
                }
            }
		},
		loading: true
	}

	$scope.customerCateroyOrderChart = {
        series: [],
        title: {
            text:'Vente par categories'
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

    $scope.customerHistoryOrderChart = {
        series: [],
        title: {
            text:'Historique des ventes'
        },
        loading: true
    }

	beeModel.get({type: $stateParams.type, index: $stateParams.index, id: $stateParams.companyId}, function(data) {
		// Set customer datas in scope
		$scope.item = data.customerDatas[0];

        $scope.top5ProductsChart.series = data.customerTop5Chart.series;
        $scope.top5ProductsChart.loading = false;

		$scope.customerCateroyOrderChart.series = data.customerCateroyOrderChart.series;
        $scope.customerCateroyOrderChart.xAxis = data.customerCateroyOrderChart.xAxis;
        $scope.customerCateroyOrderChart.loading = false;

        $scope.customerHistoryOrderChart.series = data.customerHistoryOrderChart.series;
        $scope.customerHistoryOrderChart.xAxis = data.customerHistoryOrderChart.xAxis;
        $scope.customerHistoryOrderChart.loading = false;


    }, function(error) {
		// An error occured
		console.log('error', error)
	});

    $scope.item_onclick = function(item) {
        // Store the current line to use it in the next screen
        currentItem.set(item);
        // Go to next screen
        $state.go('order');
    }

	console.log('### company controller out');
});

// Make monochrome colors and set them as default for all pies
/*Highcharts.getOptions().plotOptions.pie.colors = (function () {
    var colors = [],
        base = Highcharts.getOptions().colors[0],
        i

    for (i = 0; i < 10; i++) {
        // Start out with a darkened base color (negative brighten), and end
        // up with a much brighter color
        colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
    }
    return colors;
}());*/