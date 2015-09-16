(function() {
  'use strict';

  /**
   * @ngdoc overview
   * @name scContent
   * @description
   *
   * Provides connectivity with Southbank Centre content provider and index
   */
  angular
    .module('scContent', []);

})();;(function() {
  'use strict';

  /**
   * @ngdoc factory
   * @name scContentGet
   * @description
   *
   * Provides connectivity with Southbank Centre content provider and index
   */
  angular
    .module('scContent')
    .factory('scContentGet', scContentGet);

  scContentGet.$inject = ['$http', '$rootScope', 'scContentSettings'];

  function scContentGet($http, $rootScope, scContentSettings) {

    var service = {
      item: item,
      items: items,
      itemByPath: itemByPath
    };
    return service;

    function item(type, id, params) {

      return $http.get(scContentSettings.BASE_URL + '/api/' + type + '/' + id + '.json', {params: params})
        .then(_getComplete)
        .catch(_getFailed);

    }

    function items(type, params) {

      return $http.get(scContentSettings.BASE_URL + '/api/' + type + '.json', {params: params})
        .then(_getComplete)
        .catch(_getFailed);

    }

    function itemByPath(path, params) {

      return $http.get(scContentSettings.BASE_URL + '/' + path, {params: params})
        .then(_getComplete)
        .catch(_getFailed);

    }

    function _getComplete(response) {
      return response.data;
    }

    function _getFailed(error) {
      $rootScope.$broadcast('data-error', error);
    }

  }

})();;(function() {
  'use strict';

  /**
   * @ngdoc factory
   * @name scContentGet
   * @description
   *
   * Provides connectivity with Southbank Centre content provider and index
   */
  angular
    .module('scContent')
    .constant('scContentSettings', {
      BASE_URL: 'http://52.17.82.208'
    });

})();