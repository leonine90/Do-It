'use strict';

angular.module('doItApp')
.directive('addTask',function(){
  return{
    restrict:'E',
    replace: 'true',
    templateUrl: '/views/directives/add-task.html'
  };
});
