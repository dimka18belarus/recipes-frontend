'use strict';

angular.module('core.recipe').factory('Recipe', ['$resource',
    function($resource) {
      return $resource('recipes/:phoneId.json', {}, {
        query: {
          method: 'GET',
          params: {phoneId: 'phones'},
          isArray: true
        }
      });
    }
  ]);
