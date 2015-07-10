'use strict';

angular.module('southbankcentre').config(function($stateProvider) {

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