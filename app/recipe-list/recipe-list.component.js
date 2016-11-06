'use strict';

// Register `recipeList` component, along with its associated controller and template
angular.module('recipeList').component('recipeList', {
  templateUrl: 'recipe-list/recipe-list.template.html',
    controller: ['Phone',
      function PhoneListController(Phone) {
        this.recipes = Phone.query();
        this.orderProp = 'age';
      }
    ]
  });
