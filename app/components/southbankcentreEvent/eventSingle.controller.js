(function() {
  'use strict';

  /**
   * @ngdoc overview
   * @name EventSingleCtrl
   * @description
   *
   * Provides view model control for the single event view
   */
  angular
    .module('southbankcentreEvent')
    .controller('EventSingleCtrl', EventSingleCtrl);

  EventSingleCtrl.$inject= ['scContentGet', '$stateParams', '$state'];

  function EventSingleCtrl(scContentGet, $stateParams, $state) {

    var vm = this;
    vm.event = {};
    vm.getEvent = getEvent;

    activate();

    function activate() {
      return getEvent().then(function() {
        if (vm.event === undefined) {
          $state.go('404');
        }
      });
    }

    function getEvent() {
      return scContentGet.item('arrangement', $stateParams.id).then(function(data) {
        vm.event = data;
        if (vm.event) {
          getEventPerformances();
        }
      });
    }

    function getEventPerformances() {
      vm.event.performances = [];
      vm.event.subEvent.forEach(function(subEvent) {
        // START: Necessary until #104179148 is fixed
        subEvent = getPath(subEvent).pathname;
        // END: Necessary until #104179148 is fixed
        scContentGet.itemByPath(subEvent).then(function(data) {
          vm.event.performances.push(data);
        });
      });
    }

    // START: Necessary until #104179148 is fixed
    function getPath(url) {
      var parser = document.createElement('a');
      parser.href = url;
      return parser;
    }
    // END: Necessary until #104179148 is fixed

  }
})();