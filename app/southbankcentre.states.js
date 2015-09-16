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
        });

    });
})();