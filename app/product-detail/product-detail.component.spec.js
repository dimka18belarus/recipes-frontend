describe('productDetail', function () {

    beforeEach(module('productDetail'));

    // Test the controller
    describe('ProductDetailController', function () {
        var $httpBackend, ctrl;
        var xyzProductData = {
            name: 'product xyz',
            images: ['image/url1.png', 'image/url2.png']
        };

        beforeEach(inject(function ($componentController, _$httpBackend_, $routeParams) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('mocks/products/xyz.json').respond(xyzProductData);

            $routeParams.productId = 'xyz';

            ctrl = $componentController('productDetail');
        }));

        it('should fetch the product details', function () {
            jasmine.addCustomEqualityTester(angular.equals);

            expect(ctrl.product).toEqual({});

            $httpBackend.flush();
            expect(ctrl.product).toEqual(xyzProductData);
        });

    });

});
