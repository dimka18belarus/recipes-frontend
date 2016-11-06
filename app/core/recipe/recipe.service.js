angular.module('core.recipe').factory('Recipe', ['$resource',
    function($resource) {
        return $resource('recipes/:recipeId.json', {}, {
        query: {
          method: 'GET',
            params: {recipeId: 'recipes'},
          isArray: true
        }
      });
    }
  ]);
