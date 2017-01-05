'use strict';

angular.module('doItApp',['ngRoute'])
.config(function($routeProvider){
	$routeProvider.
		when('/',{
        templateUrl: 'views/main.html'
      })
		.otherwise({
			redirectTo:'/'
		});

});
