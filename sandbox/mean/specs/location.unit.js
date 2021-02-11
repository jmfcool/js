describe('PrototypeController', function() 
{
	var $location, $controller, $scope = {};

	beforeEach(module('nema'));
		
	beforeEach(inject(function(_$controller_,_$location_) 
	{
		$controller = _$controller_('PrototypeController', { $scope: $scope });
		$location = _$location_;
    }));

	describe('$location.path', function() 
	{
		it('should be an active path', function() 
		{
			expect($location.path()).toEqual('/');
		});
	});
});