const app = angular.module('MyApp', []);

app.controller('MyCtrl', ($scope, $http) => {
	
	let person = {
		firstName: 'Jeremiah',
		lastName: 'Faria',
		image: 'https://media.licdn.com/dms/image/C5603AQEKFBYSpwTG7g/profile-displayphoto-shrink_200_200/0?e=1548892800&v=beta&t=rR5Nz78xncLjy25QXQ9DDjSdOTQdvBTn5q1BqJ79q8A'
	};

	$scope.person = person;
	$scope.user = {};

	const gravatar = $http.get('https://en.gravatar.com/6384b70630ec71d8f75cfb378da9850f.json');

	gravatar.then(response => {
		$scope.user.gravatar = response.data;
		$scope.user.gravatar.name = $scope.user.gravatar.entry[0].displayName;
		$scope.user.gravatar.photo = $scope.user.gravatar.entry[0].photos[0].value;
	});

	const github = $http.get('https://api.github.com/users/RunThroughMedia');

	github.then(response => {
		$scope.user.github = response.data;
		$scope.user.github.photo = $scope.user.github.avatar_url;
	});

});