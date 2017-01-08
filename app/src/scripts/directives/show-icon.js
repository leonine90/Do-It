'use strict';

angular.module('doItApp')
.directive('showIcon',function(){
  return{
    restrict:'E',
    replace: 'true',
    templateUrl: '/views/directives/show-icon.html',
    controller: function($scope){
      $scope.showMenu = false;
    }
  };
});
