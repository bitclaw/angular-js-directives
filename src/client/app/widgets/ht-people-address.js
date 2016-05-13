(function() {
  'use strict';

  angular
    .module('app.widgets')
    .directive('htPeopleAddress', htPeopleAddress);

  htPeopleAddress.$inject = ['config'];
  /* @ngInject */
  function htPeopleAddress(config) {

    return {
      templateUrl: 'app/widgets/ht-people-address.html',
      restrict: 'E',
      controller: function($scope) {
        $scope.collapsed = false;
        $scope.collapsedAddress = function() {
          $scope.collapsed = true;
        };
        $scope.expandAddress = function() {
          $scope.collapsed = false;
        };
      }
    };
  }

})();
