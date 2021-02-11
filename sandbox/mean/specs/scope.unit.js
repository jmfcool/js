describe('PrototypeController', function() 
{
	var $controller, $scope = {};
		
	beforeEach(module('nema'));	

	beforeEach(inject(function(_$controller_)
	{
		$controller = _$controller_('PrototypeController', { $scope: $scope });
	}));

	describe('$scope.object', function() 
    {	    	
		it('should be a Function', function() 
		{
			expect($scope.object instanceof Function).toEqual(true);
		});
	});
	
	describe('$scope.state', function() 
    {	    	
		it('should be an Object', function() 
		{
			expect($scope.state instanceof Object).toEqual(true);
		});
	});

    describe('$scope.data', function() 
    {	    	
		it('should be an Array', function() 
		{
			expect($scope.data instanceof Array).toEqual(true);
		});
	});
	
    describe('$scope.params', function() 
    {	    	
		it('should be an Object', function() 
		{
			expect($scope.params instanceof Object).toEqual(true);
		});
	});
	
	describe('$scope.reload', function() 
    {	    	
		it('should be a Function', function() 
		{
			expect($scope.reload instanceof Function).toEqual(true);
		});
	});
	
	describe('$scope.submit', function() 
    {	    	
		it('should be a Function', function() 
		{
			expect($scope.submit instanceof Function).toEqual(true);
		});
	});
	
	describe('$scope.remove', function() 
    {	    	
		it('should be a Function', function() 
		{
			expect($scope.remove instanceof Function).toEqual(true);
		});
	});
	
	describe('$scope.save', function() 
	{	    	
		it('should be a Function', function() 
		{
			expect($scope.save instanceof Function).toEqual(true);
		});
	});
	
	describe('$scope.update', function() 
	{	    	
		it('should be a Function', function() 
		{
			expect($scope.update instanceof Function).toEqual(true);
		});
	});
	
	describe('$scope.records', function() 
	{	    	
		it('should be a Function', function() 
		{
			expect($scope.records instanceof Function).toEqual(true);
		});
	});
	
	describe('$scope.record', function() 
	{	    	
		it('should be a Function', function() 
		{
			expect($scope.record instanceof Function).toEqual(true);
		});
	});
});