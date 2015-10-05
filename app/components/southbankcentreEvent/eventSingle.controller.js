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
      return scContentGet.item('event', $stateParams.id).then(function(data) {
        vm.event = data;
        if (vm.event) {
          getEventPerformances();
        }
      });
    }

    function getEventPerformances() {
      vm.event.performances = [];
      vm.event.subEvent.forEach(function(subEvent) {
        scContentGet.itemByURL(subEvent).then(function(data) {
          vm.event.performances.push(data);
        });
      });
    }

  }
})();