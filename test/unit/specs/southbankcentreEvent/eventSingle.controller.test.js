(function() {
  'use strict';

  // Mocked scContentGet factory
  angular.module('mock.scContent', [])
    .factory('scContentGet', function($q) {
        return {
          item: function() {
            return $q.when({
              'event':'here',
              'subEvent':[
                'http://example.com/api/performance/123.json',
                'http://example.com/api/performance/124.json'
              ]
            });
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
    var $stateParams;
    var $timeout;
    var EventSingleCtrl;
    var scContentGet;

    beforeEach(module('ui.router'));
    beforeEach(module('southbankcentreEvent'));
    beforeEach(module('mock.scContent'));

    beforeEach(inject(function(_$controller_, _scContentGet_, _$stateParams_, _$timeout_, $q) {
      $controller = _$controller_;
      $stateParams = _$stateParams_;
      $timeout = _$timeout_;
      scContentGet = _scContentGet_;

      EventSingleCtrl = $controller('EventSingleCtrl', {});
    }));

    it('should expose an event property', function() {
      expect(EventSingleCtrl.event).toBeDefined();
    });

    it('should get the Event upon activation, loading in each performance', function() {
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

    describe('Method: getEvent', function() {

      it('should be exposed on the view model', function() {
        expect(EventSingleCtrl.getEvent).toBeDefined();
      });

    });

  });

})();