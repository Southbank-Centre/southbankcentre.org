'use strict';

angular
  .module('southbankcentre')
  .run(function () {

  })
  .controller('TestCtrl', function($scope){
      var test = this;
      test = { name: 'Hello world' };
      $scope.test = test;
  });
