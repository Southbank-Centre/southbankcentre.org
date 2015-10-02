'use strict';
/**
 * eventSingle Spec
 */

describe('The single event page', function() {

  beforeEach(function() {
    browser.addMockModule('mock.scContent', function() {
      angular.module('mock.scContent', [])
        .factory('scContentGet', function($q) {
            var testEvents = {
              'single-day-single-perf-123': {
                'name': 'Event name',
                'field_event_prefix': 'Event prefix',
                'field_event_suffix': 'Event suffix',
                'startDate': '2016-02-23T00:00:00+00:00',
                'endDate': '2016-02-23T00:00:00+00:00',
                'subEvent': [
                  'http://example.com/api/performance/performance-name-123.json'
                ]
              },
              'multi-day-single-perf-123': {
                'name': 'Event name',
                'field_event_prefix': 'Event prefix',
                'field_event_suffix': 'Event suffix',
                'startDate': '2016-02-23T00:00:00+00:00',
                'endDate': '2016-02-25T00:00:00+00:00',
                'subEvent': [
                  'http://example.com/api/performance/performance-name-123.json'
                ]
              },
              'single-day-multi-perf-123': {
                'name': 'Event name',
                'field_event_prefix': 'Event prefix',
                'field_event_suffix': 'Event suffix',
                'startDate': '2016-02-23T00:00:00+00:00',
                'endDate': '2016-02-23T00:00:00+00:00',
                'subEvent': [
                  'http://example.com/api/performance/performance-name-123.json',
                  'http://example.com/api/performance/performance-name-123.json'
                ]
              },
              'multi-day-multi-perf-123': {
                'name': 'Event name',
                'field_event_prefix': 'Event prefix',
                'field_event_suffix': 'Event suffix',
                'startDate': '2016-02-23T00:00:00+00:00',
                'endDate': '2016-02-25T00:00:00+00:00',
                'subEvent': [
                  'http://example.com/api/performance/performance-name-123.json',
                  'http://example.com/api/performance/performance-name-123.json',
                  'http://example.com/api/performance/performance-name-123.json'
                ]
              }
            };

            var testPerformance = {
              'name': 'Event name',
              'startDate': '2016-02-23T19:30:11+00:00',
              'endDate': '2016-02-25T21:52:12+00:00'
            };

            return {

              item: function(type, id, options) {
                return $q.when(testEvents[id]);
              },

              itemByURL: function() {
                return $q.when(testPerformance);
              }

            };
        });
    });
  });

  it('should display a single-day event with a single performance correctly', function() {
    browser.get(browser.params.url + '#!event/single-day-single-perf-123');
    expect(element(by.css('.event-title__prefix')).getText()).toEqual('Event prefix');
    expect(element(by.css('.event-title__name')).getText()).toEqual('Event name');
    expect(element(by.css('.event-title__suffix')).getText()).toEqual('Event suffix');
    expect(element(by.css('.event-date')).getText()).toEqual('Tuesday 23 February 2016 at 7:30pm');
  });

  it('should display a multi-day event with a single performance correctly', function() {
    browser.get(browser.params.url + '#!event/multi-day-single-perf-123');
    expect(element(by.css('.event-title__prefix')).getText()).toEqual('Event prefix');
    expect(element(by.css('.event-title__name')).getText()).toEqual('Event name');
    expect(element(by.css('.event-title__suffix')).getText()).toEqual('Event suffix');
    expect(element(by.css('.event-date')).getText()).toEqual('Tuesday 23 February 2016 – Thursday 25 February 2016 at 7:30pm');
  });

  it('should display a single-day event with a multiple performances correctly', function() {
    browser.get(browser.params.url + '#!event/single-day-multi-perf-123');
    expect(element(by.css('.event-title__prefix')).getText()).toEqual('Event prefix');
    expect(element(by.css('.event-title__name')).getText()).toEqual('Event name');
    expect(element(by.css('.event-title__suffix')).getText()).toEqual('Event suffix');
    expect(element(by.css('.event-date')).getText()).toEqual('Tuesday 23 February 2016');
  });

  it('should display a multi-day event with a multiple performances correctly', function() {
    browser.get(browser.params.url + '#!event/multi-day-multi-perf-123');
    expect(element(by.css('.event-title__prefix')).getText()).toEqual('Event prefix');
    expect(element(by.css('.event-title__name')).getText()).toEqual('Event name');
    expect(element(by.css('.event-title__suffix')).getText()).toEqual('Event suffix');
    expect(element(by.css('.event-date')).getText()).toEqual('Tuesday 23 February 2016 – Thursday 25 February 2016');
  });

  it('should display the 404 page when an event is not found', function() {
    browser.get(browser.params.url + '#!event/does-not-exist-123');
    expect(element.all(by.css('.event-title__prefix')).count()).toEqual(0);
    expect(element.all(by.css('.event-title__name')).count()).toEqual(0);
    expect(element.all(by.css('.event-title__suffix')).count()).toEqual(0);
    expect(element.all(by.css('.event-date')).count()).toEqual(0);
    expect(element(by.tagName('h1')).getText()).toEqual('Page not found.');
  });

});