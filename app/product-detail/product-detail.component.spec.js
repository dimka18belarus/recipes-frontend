describe('recipeDetail', function () {

    // Load the module that contains the `recipeDetail` component before each test
    beforeEach(module('recipeDetail'));

    // Test the controller
    describe('RecipeDetailController', function () {
        var $httpBackend, ctrl;
        var xyzRecipeData = {
            name: 'recipe xyz',
            images: ['image/url1.png', 'image/url2.png']
        };

        beforeEach(inject(function ($componentController, _$httpBackend_, $routeParams) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('recipes/xyz.json').respond(xyzRecipeData);

            $routeParams.recipeId = 'xyz';

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
