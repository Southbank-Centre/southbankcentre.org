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
   * @ngdoc constant
   * @name scContentBaseURL
   * @description
   *
   * Provides the Base URL of the Southbank Centre web content service
   */
  angular
    .module('scContent')
    .constant('scContentBaseURL', 'http://52.17.82.208');

})();;(function() {
  'use strict';

  /**
   * @ngdoc factory
   * @name scContentGet
   * @description
   *
   * Provides methods for getting content from the Southbank Centre web content service
   */
  angular
    .module('scContent')
    .factory('scContentGet', scContentGet);

  scContentGet.$inject = ['$http', '$rootScope', 'scContentBaseURL'];

  function scContentGet($http, $rootScope, scContentBaseURL) {

    var service = {
      item: item,
      items: items,
      itemByPath: itemByPath
    };
    return service;

    function item(type, id, params) {

      return $http.get(scContentBaseURL + '/api/' + type + '/' + id + '.json', {params: params})
        .then(_getComplete)
        .catch(_getFailed);

    }

    function items(type, params) {

      return $http.get(scContentBaseURL + '/api/' + type + '.json', {params: params})
        .then(_getComplete)
        .catch(_getFailed);

    }

    function itemByPath(path, params) {

      return $http.get(scContentBaseURL + '/' + path, {params: params})
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

})();