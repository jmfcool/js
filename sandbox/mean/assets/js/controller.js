(function() 
{
	'use strict';
	
    var app = angular.module('nema',['ngCookies']);

    app.config(['$httpProvider', function($httpProvider){
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }]);

    app.config(['$locationProvider', function($locationProvider){
        $locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});
    }]);

    app.factory('APIService', ['$http', function($http) 
	{			
		return {
			post: function(args) 
			{
				return $http({ method: 'POST', url: args.url, data: args.data, headers: {'Content-Type': 'application/x-www-form-urlencoded'}, cache: args.cache });	
			},
			get: function(args)
			{
				return $http({ method: 'GET', url: args.url });
			}
		};			
	}]);

    app.controller('PrototypeController', ['$scope','$http','$templateCache','$location','$cookies','$filter','APIService', function($scope, $http, $templateCache, $location, $cookies, $filter, APIService)
    {

		$scope.object = function(args) 
		{
			$cookies.put('id',args.id);
			$scope.record();
		};

        $scope.state = {};
        $scope.state.time = $filter('date')(new Date(),'hh:mm');
        $scope.state.date = $filter('date')(new Date(),'yyyy-MM-dd');
        $scope.state.datetime = $scope.state.date + ' ' + $scope.state.time;

		$scope.state.time = new Date($scope.state.time);
		$scope.state.date = new Date($scope.state.date);

		$scope.data = [];
		
        $scope.params = $location.search();
        $cookies.put('id',($scope.params.id) ? $scope.params.id : $cookies.get('id'));
        $scope.status = '';
        
        $scope.reload = function() { window.location.reload(); };
        $scope.submit = function() { if($cookies.get('id')) { $scope.update(); } else { $scope.save(); } };
        $scope.remove = function() { $cookies.remove('id'); $scope.reload(); };

        $scope.save = function(args)
        {
			APIService.post({ url: 'http://' + window.location.hostname + ':8080/insert', data: 'data=' + JSON.stringify($scope.state), cache: $templateCache })
				.success(function(response) 
				{
					$scope.status = response.data; 
				})
	            .error(function(response) 
	            {
		            $scope.status = response; 
		   		});
            $scope.reload();
        };

        $scope.update = function()
        {            
			APIService.post({ url: 'http://' + window.location.hostname + ':8080/update?id=' + $cookies.get('id'), data: 'data=' + JSON.stringify($scope.state), cache: $templateCache })
				.success(function(response) 
				{
					$scope.status = response.data; 
				})
	            .error(function(response) 
	            {
		            $scope.status = response; 
		   		});
            $scope.reload();
        };

        $scope.records = function()
        {
			APIService.get({ url: 'http://' + window.location.hostname + ':8080/fetch' })
				.success(function(data) 
				{
	                $scope.data = data;
	                
	                console.log("$scope.data");
	                console.log($scope.data);
				});
        };
        $scope.records();
        
        $scope.record = function()
        {
			APIService.get({ url: 'http://' + window.location.hostname + ':8080/find?id=' + $cookies.get('id') })
				.success(function(data) 
				{
	                if (data.length > 0) $scope.state = data[0];
	                
	                $scope.state.time = new Date($scope.state.time);
					$scope.state.date = new Date($scope.state.date);
	                
	                console.log("$scope.state");
	                console.log($scope.state);
	            });
        };
        $scope.record();
    }]);
})();

