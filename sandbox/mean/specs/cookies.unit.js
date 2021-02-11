describe('PrototypeController', function() 
{	
	var $controller, $cookies, $scope = {};

	beforeEach(module('nema'));
	
	beforeEach(inject(function(_$controller_,_$cookies_) 
	{
		$controller = _$controller_('PrototypeController', { $scope: $scope });
		$cookies = _$cookies_;
    }));

	describe('$cookies.id', function() 
    {
		it('should be undefined', function() 
		{		
			expect($cookies.get('id')).toEqual(undefined);
		});
	});
	
	describe('$cookies.get', function() 
    {
		it('should have set $cookies.id alpha', function() 
		{
			$cookies.put('id','alpha');
			expect($cookies.get('id')).toEqual('alpha');
		});
	});
	
	describe('$cookies.put', function() 
    {
		it('should have changed $cookies.id value from alpha to bravo', function() 
		{
			$cookies.put('id','alpha');
			$cookies.put('id','bravo');
			expect($cookies.get('id')).toEqual('bravo');
		});
	});
	
	describe('$cookies.remove', function() 
    {
		it('should have removed the $cookies.id', function() 
		{
			$cookies.put('id','alpha');
			$cookies.remove('id');
			expect($cookies.get('id')).toEqual(undefined);
		});
	});
});