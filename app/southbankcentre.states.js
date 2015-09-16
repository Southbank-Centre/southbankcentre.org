(function() {
  'use strict';

  angular.module('southbankcentre').config(function($locationProvider, $stateProvider) {

      $locationProvider.html5Mode(true);

      $stateProvider
        .state('app', {
          url: '',
          views: {}
        })
        .state('app.home', {
          url: '/',
          views: {
            '@': {}
          }
        })
        .state('app.arrangementStdItem', {
          url: '/arrangement-standard/:id',
          views: {
            '@': {
              templateUrl: 'bower_components/angularjs-modules/scArrangement/0.0.0/release/arrangementItem.tpl.html',
              controller: 'ScArrangementItemCtrl',
              controllerAs: 'vm'
            }
          }
        })
        .state('app.arrangementCustomItem', {
          url: '/arrangement-custom/:id',
          views: {
            '@': {
              templateUrl: 'app/components/southbankcentreArrangement/arrangementItem.tpl.html',
              controller: 'ScArrangementItemCtrl',
              controllerAs: 'vm'
            }
          }
        });

    });
})();