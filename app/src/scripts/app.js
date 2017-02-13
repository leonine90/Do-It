'use strict';

angular.module('doItApp',['ui.router'])
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
		.state("home" ,{url:"/home", templateUrl:"views/templates/home.html"})
			.state("daily" ,{parent:"home", url:"/daily", templateUrl:"views/templates/daily.html"})
			.state("weekly" ,{parent:"home", url:"/weekly", templateUrl:"views/templates/weekly.html"})
			.state("monthly" ,{parent:"home", url:"/monthly", templateUrl:"views/templates/monthly.html"})
		.state("aboutUs" ,{url:'/aboutUs', templateUrl:"views/templates/aboutUs.html"})
		.state("aboutProject",{url:"/aboutProject", templateUrl:"views/templates/aboutProject.html"});
	$urlRouterProvider.otherwise("/home");
});
