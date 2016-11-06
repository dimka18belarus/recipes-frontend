

angular.module('recipeApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.when('/recipes', {
        template: '<recipe-list></recipe-list>'
      }).when('/recipes/:recipeId', {
        template: '<recipe-detail></recipe-detail>'
        }).otherwise('/recipes');
    }
  ]);
