'use strict';

angular.module('doItApp',['ui.router'])
.config(function($stateProvider){
	$stateProvider
		.state("home" ,{url:"/", templateUrl:"views/templates/home.html"})
			.state("daily" ,{url:"/daily", templateUrl:"views/templates/daily.html"})
			.state("weekly" ,{url:"/weekly", templateUrl:"views/templates/weekly.html"})
			.state("monthly" ,{url:"/monthly", templateUrl:"views/templates/monthly.html"})
		.state("aboutUs" ,{url:'/aboutUs', templateUrl:"views/templates/aboutUs.html"})
		.state("aboutProject",{url:"/aboutProject", templateUrl:"views/templates/aboutProject.html"});
});
