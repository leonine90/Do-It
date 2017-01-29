'use strict';

angular.module('doItApp')
.directive('addIcon',function(){
  return{
    restrict:'E',
    replace: 'true',
    templateUrl: '/views/directives/add-icon.html',
    controller: function($scope){
      $scope.showMenu = false;
    }
  };
});
