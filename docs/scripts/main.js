'use strict';

angular.module('doItApp',['ui.router'])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
	$stateProvider
		.state("home" ,{url:"/home", templateUrl:"views/templates/home.html"})
			.state("daily" ,{parent:"home", url:"/daily", templateUrl:"views/templates/daily.html"})
			.state("weekly" ,{parent:"home", url:"/weekly", templateUrl:"views/templates/weekly.html"})
			.state("monthly" ,{parent:"home", url:"/monthly", templateUrl:"views/templates/monthly.html"})
		.state("aboutUs" ,{url:'/aboutUs', templateUrl:"views/templates/aboutUs.html"})
		.state("aboutProject",{url:"/aboutProject", templateUrl:"views/templates/aboutProject.html"});
	$urlRouterProvider.otherwise("/home");
}]);

'use strict';

angular.module('doItApp')
.directive('addIcon',function(){
  return{
    restrict:'E',
    replace: 'true',
    templateUrl: '/views/directives/add-icon.html',
    controller: ["$scope", function($scope){
      $scope.showAddTask = false;
      $scope.hideIcon = false;
    }]
  };
});

'use strict';

angular.module('doItApp')
.directive('addTask',function(){
  return{
    restrict:'E',
    replace: 'true',
    templateUrl: '/views/directives/add-task.html'
  };
});

'use strict';

angular.module('doItApp')
.directive('mainMenu',function(){
  return{
    restrict:'E',
    replace: 'true',
    templateUrl: '/views/directives/main-menu.html',
    controller: ["$scope", function($scope){
      $scope.showMenu = false;
    }]
  };
});

'use strict';

angular.module('doItApp')
.directive('menuIcon',function(){
  return{
    restrict:'E',
    replace: 'true',
    templateUrl: '/views/directives/menu-icon.html'
  };
});

'use strict';

angular.module('doItApp')
.directive('navBar',function(){
  return{
    restrict: 'E',
    replace: 'true',
    templateUrl: '/views/directives/nav-bar.html'
  };
});
