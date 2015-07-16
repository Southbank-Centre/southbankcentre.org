'use strict';

angular.module('SC-app').config(function($stateProvider) {

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