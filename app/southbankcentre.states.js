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
        .state('app.eventSingle', {
          url: '/event/:id',
          views: {
            '@': {
              templateUrl: 'app/components/southbankcentreEvent/eventSingle.tpl.html',
              controller: 'EventSingleCtrl',
              controllerAs: 'vm'
            }
          }
        })
        .state('404', {
          views: {
            '@': {
              templateUrl: 'app/404.tpl.html',
            }
          }
        });

    });
})();