'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.module('recipeDetail').component('recipeDetail', {
  templateUrl: 'recipe-detail/recipe-detail.template.html',
  controller: ['$routeParams', 'Recipe',
    function RecipeDetailController($routeParams, Recipe) {
        var self = this;
      self.recipe = Recipe.get({phoneId: $routeParams.phoneId}, function (phone) {
          self.setImage(phone.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
      }
    ]
  });
