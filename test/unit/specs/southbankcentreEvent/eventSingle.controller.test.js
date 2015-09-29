(function() {
  'use strict';

  // Mocked scContentGet factory
  angular.module('mock.scContent', [])
    .factory('scContentGet', function($q) {
        return {
          item: function(type, id, options) {
            var testData;
            if (id === 'exists') {
              testData = {
                'event':'here',
                'subEvent':[
                  'http://example.com/api/performance/123.json',
                  'http://example.com/api/performance/124.json'
                ]
              };
            }
            return $q.when(testData);
          },
          itemByPath: function() {
            return $q.when({
              'performance':'here'
            });
          }
        };
    });

  describe('Controller: EventSingleCtrl', function() {

    var $controller;
    var $timeout;
    var $state;
    var $stateParams;
    var EventSingleCtrl;
    var scContentGet;

    beforeEach(module('ui.router'));
    beforeEach(module('southbankcentreEvent'));
    beforeEach(module('mock.scContent'));
    beforeEach(module(function ($stateProvider) {
      $stateProvider.state('app', {});
      $stateProvider.state('404', {});
    }));

    beforeEach(inject(function(_$controller_, _scContentGet_, _$timeout_, _$state_, _$stateParams_, $q) {
      $controller = _$controller_;
      $timeout = _$timeout_;
      $state = _$state_;
      $stateParams = _$stateParams_;
      scContentGet = _scContentGet_;
    }));

    it('should expose an event property', function() {
      EventSingleCtrl = $controller('EventSingleCtrl', {});
      expect(EventSingleCtrl.event).toBeDefined();
    });

    it('should get the Event upon activation, loading in each performance', function() {
      $stateParams.id = "exists";
      EventSingleCtrl = $controller('EventSingleCtrl', {});
      expect(EventSingleCtrl.event).toEqual({});
      $timeout.flush();
      expect(EventSingleCtrl.event).toEqual({
        'event':'here',
        'subEvent':[
          'http://example.com/api/performance/123.json',
          'http://example.com/api/performance/124.json'
        ],
        'performances': [
          {'performance':'here'},
          {'performance':'here'}
        ]
      });
    });

    it('should display a 404 page if the event does not exist', function() {
      $stateParams.id = "does-not-exist";
      EventSingleCtrl = $controller('EventSingleCtrl', {});
      expect(EventSingleCtrl.event).toEqual({});

      $timeout.flush();

      expect(EventSingleCtrl.event).toBe(undefined);
      expect($state.current.name).toEqual('404');
    });

    describe('Method: getEvent', function() {

      it('should be exposed on the view model', function() {
        expect(EventSingleCtrl.getEvent).toBeDefined();
      });

    });

  });

})();