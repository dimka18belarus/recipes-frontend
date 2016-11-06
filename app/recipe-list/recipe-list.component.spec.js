'use strict';

describe('recipeList', function () {

  // Load the module that contains the `recipeList` component before each test
  beforeEach(module('recipeList'));

  // Test the controller
  describe('RecipeListController', function () {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('recipes/recipes.json')
                  .respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

      ctrl = $componentController('recipeList');
    }));

    it('should create a `recipes` property with 2 recipes fetched with `$http`', function () {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.recipes).toEqual([]);

      $httpBackend.flush();
      expect(ctrl.recipes).toEqual([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
    });

    it('should set a default value for the `orderProp` property', function() {
      expect(ctrl.orderProp).toBe('age');
    });

  });

});
