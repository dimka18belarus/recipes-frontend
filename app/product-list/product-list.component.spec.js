describe('productList', function () {

    // Load the module that contains the `productList` component before each test
    beforeEach(module('productList'));

    // Test the controller
    describe('ProductListController', function () {
        var $httpBackend, ctrl;

        beforeEach(inject(function ($componentController, _$httpBackend_) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('mocks/products/products.json')
                .respond([{name: 'Product A'}, {name: 'Product B'}]);

            ctrl = $componentController('productList');
        }));

        it('should create a `products` property with 2 products fetched with `$http`', function () {
            jasmine.addCustomEqualityTester(angular.equals);

            expect(ctrl.products).toEqual([]);

            $httpBackend.flush();
            expect(ctrl.products).toEqual([{name: 'Product A'}, {name: 'Product B'}]);
        });

        it('should set a default value for the `orderProp` property', function () {
            expect(ctrl.orderProp).toBe('name');
        });

    });

});
