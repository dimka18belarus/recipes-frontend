describe('Product', function () {
    var $httpBackend;
    var Product;
    var productsData = [
        {name: 'Product X'},
        {name: 'Product Y'},
        {name: 'Product Z'}
    ];

    // Add a custom equality tester before each test
    beforeEach(function () {
        jasmine.addCustomEqualityTester(angular.equals);
    });

    // Load the module that contains the `Product` service before each test
    beforeEach(module('core.product'));

    // Instantiate the service and "train" `$httpBackend` before each test
    beforeEach(inject(function (_$httpBackend_, _Product_) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('products/products.json').respond(productsData);

        Product = _Product_;
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
