(function() {
	var app = angular.module('incidentTool', ['ngMessages']);

	app.controller('IncidentController', function($scope,$location)
	{
		this.elements = config.form.elements;

		console.log(this.elements);
		console.log($scope);

		$scope.form = $location.$$path.substring(1);
		//$scope.form = $location.search().type;
		console.log($scope.form);

		$scope.state = {
			"incID" : "Alpha",
			"shortName" : "Bravo",
			"incOwner" : "Charlie",
			"longDescription" : "Delta",
			"impact" : "Echo",
			"actionItems" : "Foxtrot",
			"timeline" : "Golf",
			"monitor" : "Monitor",
			"priority" : "P3",
			"csStatus" : "Online Degraded State",
			"siteStatus" : "Down",
			"nextUpdate" : "India",
			"rootCause" : "Juliet",
			"remedy" : "Kilo",
			"technotes" : "Lima",
			"resolvedByRestart" : true,
			"email" : ""
		};

		if($scope.form === 'update')
		{
			for (var key in this.elements)
			{
				for (var name in $scope.state)
				{
					if(this.elements[key].name === name) this.elements[key].value = $scope.state[this.elements[key].name];
				}
			}
		}
  	})
})();

