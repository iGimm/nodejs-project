var myApp = angular.module('myApp');

myApp.controller('UsersController',['$scope', '$http', '$location', '$routeParams',function($scope, $http, $location, $routeParams){
	console.log('UsersController loaded...');

	$scope.getUsers = function(){
		$http.get('/api/users').success(function(response){
			$scope.users = response;
		});
	}	

	$scope.getUser = function(){
		var id = $routeParams.id;
		$http.get('/api/users/'+id  ).success(function(response){
			$scope.user = response;
		});
	}

	$scope.addUser = function(){
		$http.post('/api/books/', $scope.user).success(function(response){
			window.location.href='#/users'
		});
	}

	$scope.updateUser = function(){
		var id = $routeParams.id;
		$http.put('/api/books/'+id, $scope.user).success(function(response){
			window.location.href='#/users'
		});
	}

	$scope.removeUser = function(id){
		$http.delete('/api/books/'+id).success(function(response){
			window.location.href='#/users'
		});
	}
}]);