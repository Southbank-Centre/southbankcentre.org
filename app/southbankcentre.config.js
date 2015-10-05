(function() {
  'use strict';

  angular
    .module('southbankcentre')
    .config(config);

    config.$inject= ['$locationProvider', '$urlRouterProvider'];

    function config($locationProvider, $urlRouterProvider) {

      // Enable HTML5 mode to remove # from URL in browsers that support history API
      $locationProvider.html5Mode(true);

      // Add hashbang (#!) to urls for legacy SEO support
      $locationProvider.hashPrefix('!');

      // If no path after hostname, add a slash, which redirects to home state
      $urlRouterProvider.when('', '/');

      // If index.html, redirect to home state
      $urlRouterProvider.when('/index.html', '/');

    }

})();