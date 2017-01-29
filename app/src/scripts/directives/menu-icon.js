'use strict';

angular.module('doItApp')
.directive('menuIcon',function(){
  return{
    restrict:'E',
    replace: 'true',
    templateUrl: '/views/directives/menu-icon.html',
    controller: function($scope){
      $scope.showMenu = false;
    }
  };
});
