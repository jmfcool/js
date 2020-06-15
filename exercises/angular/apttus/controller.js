const app = angular.module('myApp', ['angularUtils.directives.dirPagination']);

app.controller('myCtrl', function($scope, $http) {
 	$http.get("https://api.github.com/repositories?since=0").then(function(response) {
		
		$scope.data = response.data;
		$scope.repos = [];

		for(let item in $scope.data) {
			$scope.repos.push($scope.data[item]);
		}

	});

	console.log($scope);

	// column to sort
	$scope.column = 'id';

	// sort ordering (Ascending or Descending). Set true for desending
	$scope.reverse = false; 

	// called on header click
	$scope.sortColumn = function(col) {
		$scope.column = col;
		if($scope.reverse) {
			$scope.reverse = false;
			$scope.reverseclass = 'arrow-up';
		}
		else {
			$scope.reverse = true;
			$scope.reverseclass = 'arrow-down';
		}
	};

	// remove and change class
	$scope.sortClass = function(col) {
		if($scope.column == col) {
			if($scope.reverse) {
				return 'arrow-down'; 
			}
			else {
				return 'arrow-up';
			}
		}
		else {
			return '';
		}
	}

	// set pagination
		$scope.currentPage = 1;
		$scope.pageSize = 20;

});