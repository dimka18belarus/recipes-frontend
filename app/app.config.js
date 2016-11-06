'use strict';

angular.
  module('phonecatApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.when('/recipes', {
        template: '<recipe-list></recipe-list>'
        }).when('/recipes/:phoneId', {
        template: '<recipe-detail></recipe-detail>'
        }).otherwise('/recipes');
    }
  ]);
