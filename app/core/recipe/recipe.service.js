angular.module('core.recipe').service('Recipe', ['$resource',
    function ($resource) {
        return $resource('mocks/recipes/:recipeId.json', {}, {
            query: {
                method: 'GET',
                params: {recipeId: 'recipes'},
                isArray: true
            }
        });
    }
]);
