angular.module('recipeApp').config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.when('/recipes', {
            template: '<recipe-list></recipe-list>'
        }).when('/recipes/:recipeId', {
            template: '<recipe-detail></recipe-detail>'
        }).when('/products', {
            template: '<product-list></product-list>'
        }).when('/products/:productId', {
            template: '<product-detail></product-detail>'
        }).otherwise('/recipes');
    }
]);
