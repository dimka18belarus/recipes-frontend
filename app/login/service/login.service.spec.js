describe('Login', function () {
    var $httpBackend;


    beforeEach(function () {
        jasmine.addCustomEqualityTester(angular.equals);
    });

    beforeEach(module('login'));

    // Instantiate the service and "train" `$httpBackend` before each test
    beforeEach(inject(function (_$httpBackend_, _Modal_) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('mocks/products/products.json').respond();
    }));

    // Verify that there are no outstanding expectations or requests after each test
    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should fetch the products data from `/products/products.json`', function () {
        var products = Product.query();

        expect(products).toEqual([]);

        $httpBackend.flush();
        expect(products).toEqual(productsData);
    });
});
