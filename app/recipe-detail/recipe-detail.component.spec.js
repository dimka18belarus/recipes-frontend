'use strict';

describe('recipeDetail', function () {

  // Load the module that contains the `phoneDetail` component before each test
  beforeEach(module('recipeDetail'));

  // Test the controller
  describe('RecipeDetailController', function () {
    var $httpBackend, ctrl;
    var xyzRecipeData = {
      name: 'recipe xyz',
      images: ['image/url1.png', 'image/url2.png']
    };

    beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('phones/xyz.json').respond(xyzRecipeData);

      $routeParams.phoneId = 'xyz';

      ctrl = $componentController('recipeDetail');
    }));

    it('should fetch the recipe details', function () {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.recipe).toEqual({});

      $httpBackend.flush();
      expect(ctrl.recipe).toEqual(xyzRecipeData);
    });

  });

});