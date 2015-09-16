(function() {
  'use strict';

  /**
   * @ngdoc overview
   * @name scArrangement
   * @description
   *
   * Provides basic views of Southbank Centre arrangements
   */
  angular
    .module('scArrangement', [
      'scContent'
    ]);

})();;(function() {
  'use strict';

  /**
   * @ngdoc overview
   * @name scArrangementItemCtrl
   * @description
   *
   * Provides basic views of Southbank Centre arrangements
   */
  angular
    .module('scArrangement')
    .controller('ScArrangementItemCtrl', ScArrangementItemCtrl);

  ScArrangementItemCtrl.$inject= ['scContentGet', '$stateParams'];

  function ScArrangementItemCtrl(scContentGet, $stateParams) {

    var vm = this;
    vm.arrangement = {};
    vm.getArrangement = getArrangement;

    activate();

    function activate() {
      return getArrangement();
    }

    function getArrangement() {
      return scContentGet.item('arrangement', $stateParams.id).then(function(data) {
        vm.arrangement = data;
      });
    }

  }

})();