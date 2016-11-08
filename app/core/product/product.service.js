angular.module('core.product').service('Product', ['$resource',
    function ($resource) {
        return $resource('mocks/products/:productId.json', {}, {
            query: {
                method: 'GET',
                params: {productId: 'products'},
                isArray: true
            }
        });
    }
]);
