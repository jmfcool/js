'use strict';

describe('APIService', function() 
{
	var $httpBackend;
	
	beforeEach(module('nema'));
	
	beforeEach(inject(function($injector) 
	{
		$httpBackend = $injector.get('$httpBackend');
	}));
	
	afterEach(function() 
	{
		$httpBackend.flush();
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	describe('record inserted', function () 
	{		
		it('should be "Alpha"', inject(function(APIService) 
		{
			$httpBackend.when('POST','/insert').respond(function(method, url, data, headers)
			{
				var data = JSON.parse(data);
				expect(data.record).toEqual('Alpha');
				return [200];
			});
			
			APIService.post({ url: '/insert', data: { record: 'Alpha' } });
		}));
		
		it('should have response "Saved"', inject(function(APIService) 
		{			
			$httpBackend.when('POST','/insert').respond(function(method, url, data, headers)
			{
				return [200,{ status: 'Saved' }];
			});
		
			APIService.post({ url: '/insert', data: { record: 'Alpha' } })
				.success(function(response) 
				{ 
					expect(response.status).toEqual('Saved');
				});
		}));
	});
	
	describe('record updated', function () 
	{		
		it('should be "Bravo"', inject(function(APIService) 
		{
			$httpBackend.when('POST','/update?id=5').respond(function(method, url, data, headers)
			{
				var data = JSON.parse(data);
				expect(data.record).toEqual('Bravo');
				return [200];
			});
			
			APIService.post({ url: '/update?id=5', data: { record: 'Bravo' } });
		}));
		
		it('should have response "Updated"', inject(function(APIService) 
		{			
			$httpBackend.when('POST','/update?id=5').respond(function(method, url, data, headers)
			{
				return [200,{ status: 'Updated' }];
			});
		
			APIService.post({ url: '/update?id=5', data: { record: 'Bravo' } })
				.success(function(response) 
				{ 
					expect(response.status).toEqual('Updated');
				});
		}));
	});
	
	describe('record fetched', function () 
	{
		it('should be "Charlie"', inject(function(APIService) 
		{
			$httpBackend.when('GET','/fetch').respond(200,{ record: 'Charlie' });
			
			APIService.get({ url: '/fetch' })
				.success(function(response) 
				{
					expect(response.record).toEqual('Charlie');
				});
		}));
	});
	
	describe('record found', function () 
	{
		it('should be "Delta"', inject(function(APIService) 
		{
			$httpBackend.when('GET','/find?id=2').respond(200,{ record: 'Delta' });
			
			APIService.get({ url: '/find?id=2' })
				.success(function(response) 
				{
					expect(response.record).toEqual('Delta');
				});
		}));
	});	
});