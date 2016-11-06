

// Register `recipeList` component, along with its associated controller and template
angular.module('recipeList').component('recipeList', {
  templateUrl: 'recipe-list/recipe-list.template.html',
  controller: ['Recipe',
    function RecipeListController(Recipe) {
      this.recipes = Recipe.query();
      this.orderProp = 'name';
      }
    ]
  });
