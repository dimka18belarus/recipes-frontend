angular.module('core.product').factory('Product', ['$resource',
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
