'use strict';

/**
 * @ngdoc controller
 * @name SC-app.controller:CoreCtrl
 * @controller
 *
 * @description
 * Defines the state and behaviour of the $scope for the base state
 */
angular.module('SC-app')
  .controller('AppCtrl', function($scope, $location, $anchorScroll) {

    $scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
    };

    // !!! MOVE TO HEADER MODULE
    $scope.isActiveNav = function(path) {
      // match if on parent and not homepage
      if ($location.path().substr(0, path.length) === path.replace(/#/g, '') && ($location.path().substr(0, path.length) !== '/')) {

        return 'active';

      // match homepage
      } else if ($location.path() === path.replace(/#/g, '')) {

        return 'active';

      } else {

        return '';

      }
    };

    $scope.scroll = 0;
    
});
