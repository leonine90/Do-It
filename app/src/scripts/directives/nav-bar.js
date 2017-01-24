'use strict';

angular.module('doItApp')
.directive('navBar',function(){
  return{
    restrict: 'E',
    replace: 'true',
    templateUrl: '/views/directives/nav-bar.html'
  };
});
