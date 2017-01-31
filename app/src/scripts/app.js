'use strict';

angular.module('doItApp',['ngRoute'])
.config(function($routeProvider){
	$routeProvider
		.when('/daily',{
        templateUrl: 'views/daily.html'
      })
		.when('/weekly',{
        templateUrl: 'views/weekly.html'
      })
		.when('/monthly',{
				templateUrl: 'views/monthly.html'
			})
		.when('/aboutUs',{
				templateUrl: 'views/aboutUs.html'
			})
		.when('/aboutProject',{
				templateUrl: 'views/aboutProject.html'
			})
		.otherwise({
			redirectTo:'/daily'
		});

});
