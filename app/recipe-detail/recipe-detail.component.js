angular.module('recipeDetail').component('recipeDetail', {
    templateUrl: 'recipe-detail/recipe-detail.template.html',
    controller: ['$routeParams', 'Recipe', 'Modal',
        function RecipeDetailController($routeParams, Recipe, Modal) {
            var self = this;
            Modal.activate("Hello world");
            self.recipe = Recipe.get({recipeId: $routeParams.recipeId}, function (recipe) {
                self.setImage(recipe.images[0]);
            });

            self.setImage = function setImage(imageUrl) {
                self.mainImageUrl = imageUrl;
            };
        }
    ]
});
