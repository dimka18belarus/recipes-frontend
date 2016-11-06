'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.module('recipeDetail').component('recipeDetail', {
  templateUrl: 'recipe-detail/recipe-detail.template.html',
    controller: ['$routeParams', 'Phone',
      function RecipeDetailController($routeParams, Phone) {
        var self = this;
        self.recipe = Phone.get({phoneId: $routeParams.phoneId}, function (phone) {
          self.setImage(phone.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
      }
    ]
  });
