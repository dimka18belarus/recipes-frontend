'use strict';

describe('Recipe', function () {
  var $httpBackend;
  var Recipe;
  var recipesData = [
    {name: 'Phone X'},
    {name: 'Phone Y'},
    {name: 'Phone Z'}
  ];

  // Add a custom equality tester before each test
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  // Load the module that contains the `Recipe` service before each test
  beforeEach(module('core.recipe'));

  // Instantiate the service and "train" `$httpBackend` before each test
  beforeEach(inject(function (_$httpBackend_, _Recipe_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('recipes/recipes.json').respond(recipesData);

    Recipe = _Recipe_;
  }));

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch the recipes data from `/recipes/recipes.json`', function () {
    var recipes = Recipe.query();

    expect(recipes).toEqual([]);

    $httpBackend.flush();
    expect(recipes).toEqual(recipesData);
  });

});
