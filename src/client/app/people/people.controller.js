(function() {
  'use strict';

  angular
    .module('app.people')
    .controller('PeopleController', PeopleController);

  PeopleController.$inject = ['$q', 'dataservice', 'logger'];
  /* @ngInject */
  function PeopleController($q, dataservice, logger) {
    var vm = this;
    vm.people = {};
    
    vm.user2 = {
      name: 'Han Solo',
      address: {
        street: 'PO Box 123',
        city: 'Mos Eisley',
        planet: 'Tattoine'
      },
      friends: [
        'Han',
        'Leia',
        'Chewbacca'
      ]
    };

    getPeople();

    function getPeople() {
      dataservice.getPeople()
        .then(function(people) {
          vm.people = people;
          logger.success('Got some people');
        });
    }
  }
})();
