

// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('Recipe Application', function () {

    it('should redirect `index.html` to `index.html#!/recipes', function () {
    browser.get('index.html');
        expect(browser.getLocationAbsUrl()).toBe('/recipes');
  });

  describe('View: Recipe list', function () {

    beforeEach(function() {
        browser.get('index.html#!/recipes');
    });

    it('should filter the recipe list as a user types into the search box', function () {
      var recipeList = element.all(by.repeater('recipe in $ctrl.recipes'));
      var query = element(by.model('$ctrl.query'));

      expect(recipeList.count()).toBe(20);

      query.sendKeys('nexus');
      expect(recipeList.count()).toBe(1);

      query.clear();
      query.sendKeys('motorola');
      expect(recipeList.count()).toBe(8);
    });

    it('should be possible to control recipe order via the drop-down menu', function () {
      var queryField = element(by.model('$ctrl.query'));
      var orderSelect = element(by.model('$ctrl.orderProp'));
      var nameOption = orderSelect.element(by.css('option[value="name"]'));
      var recipeNameColumn = element.all(by.repeater('recipe in $ctrl.recipes').column('recipe.name'));

      function getNames() {
        return recipeNameColumn.map(function (elem) {
          return elem.getText();
        });
      }

      queryField.sendKeys('tablet');   // Let's narrow the dataset to make the assertions shorter

      expect(getNames()).toEqual([
        'Motorola XOOM\u2122 with Wi-Fi',
        'MOTOROLA XOOM\u2122'
      ]);

      nameOption.click();

      expect(getNames()).toEqual([
        'MOTOROLA XOOM\u2122',
        'Motorola XOOM\u2122 with Wi-Fi'
      ]);
    });

    it('should render recipe specific links', function () {
      var query = element(by.model('$ctrl.query'));
      query.sendKeys('nexus');

        element.all(by.css('.recipes li a')).first().click();
        expect(browser.getLocationAbsUrl()).toBe('/recipes/nexus-s');
    });

  });

  describe('View: Recipe detail', function () {

    beforeEach(function() {
        browser.get('index.html#!/recipes/nexus-s');
    });

    it('should display the `nexus-s` page', function() {
      expect(element(by.binding('$ctrl.recipe.name')).getText()).toBe('Nexus S');
    });

    it('should display the first recipe image as the main recipe image', function () {
      var mainImage = element(by.css('img.recipe.selected'));

      expect(mainImage.getAttribute('src')).toMatch(/img\/phones\/nexus-s.0.jpg/);
    });

    it('should swap the main image when clicking on a thumbnail image', function() {
      var mainImage = element(by.css('img.recipe.selected'));
      var thumbnails = element.all(by.css('.recipe-thumbs img'));

      thumbnails.get(2).click();
      expect(mainImage.getAttribute('src')).toMatch(/img\/phones\/nexus-s.2.jpg/);

      thumbnails.get(0).click();
      expect(mainImage.getAttribute('src')).toMatch(/img\/phones\/nexus-s.0.jpg/);
    });

  });

});
