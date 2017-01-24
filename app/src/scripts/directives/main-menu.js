'use strict';

angular.module('doItApp')
.directive('mainMenu',function(){
  return{
    restrict:'E',
    replace: 'true',
    templateUrl: '/views/directives/main-menu.html'
  };
});
