(function() {
  'use strict';

  angular
    .module('app.widgets')
    .directive('htPeopleInfoCard', htPeopleInfoCard);

  htPeopleInfoCard.$inject = ['config'];
  /* @ngInject */
  function htPeopleInfoCard(config) {

    return {
      //link: link,
      templateUrl: 'app/widgets/ht-people-info-card.html',
      restrict: 'E',
      scope: {
        user: '='
      },
      controller: function($scope) {
        $scope.collapsed = false;
        $scope.knightMe = function(user) {
          user.rank = 'Knight';
        };
        $scope.collapse = function() {
          $scope.collapsed = !$scope.collapsed;
        };
      }
    };
  }
})();
