(function() {
  'use strict';

  angular
    .module('app.people')
    .controller('PeopleController', PeopleController);

  PeopleController.$inject = ['$q', 'dataservice', 'logger'];
  /* @ngInject */
  function PeopleController($q, dataservice, logger) {
    var vm = this;
    vm.knightMe = knightMe;
    vm.people = {};

    getPeople();

    function getPeople() {
      dataservice.getPeople()
        .then(function(people) {
          vm.people = people;
          logger.success('Got some people');
        });
    }

    function knightMe(people) {
      people.rank = "Knight";
    }

  }
})();
