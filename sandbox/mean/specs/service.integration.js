describe('PrototypeController', function() 
{
	var $controller, $cookies, $httpBackend, $scope = {};

	beforeEach(module('ngMock'));
	beforeEach(module('nema'));
	
	beforeEach(inject(function(_$controller_,_$cookies_)
	{
		$controller = _$controller_('PrototypeController', { $scope: $scope });
		$cookies = _$cookies_;
	}));

	beforeEach(inject(function(_$httpBackend_)
	{
		$httpBackend = _$httpBackend_;
		
		$httpBackend.when('/fetch').respond('alpha');
	}));

	xdescribe('$scope.record', function() 
	{	    	
		it('should get alpha from /fetch', function()
		{
			//$httpBackend.expectGET('http://localhost:8080/fetch').respond(function(method,url,data,headers) { return [200,'response body',{},'alpha']; });
			/*		
			var api = 'http:\/\/localhost:8080/fetch';
			var response = [{ "stuffId": 1 }, { "stuffId": 2 }];
			$scope.records();
			$httpBackend.expectGET(api).respond(200, response);
			$httpBackend.flush();
			expect($scope.stuff.length).toBe(2);
			*/
			//$httpBackend.expectRoute(method, url);
			console.log('$scope.data');
			console.log($scope.data);
			$httpBackend.flush();
			expect($scope.data).toBe('alpha');
		});
	});

	xdescribe('$scope.save', function() 
	{	    	
		it('should save a record', function() 
		{		
			var method = 'POST';
            var url = 'http://' + window.location.hostname + ':8080/insert';	
			var controller = $controller('PrototypeController', { $scope: $scope });
			$httpBackend.expectRoute(method, url);
		});
	});
});