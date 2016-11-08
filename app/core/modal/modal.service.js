angular.module('core.modal').service('Modal', ['$uibModal', function ($uibModal) {

    var self = this;

    self.activate = function (title, body, successCallback, errorCallback) {

        self.successCallback = successCallback;
        self.errorCallback = errorCallback;

        var modal = $uibModal.open({
            animation: true,
            templateUrl: 'core/modal/modal.template.html',
            controller: 'ModalWindowController',
            controllerAs: 'ModalWindow',
            windowClass: 'center-modal',
            resolve: {
                title: function () {
                    return title
                },
                body: function () {
                    return body;
                },
                isError: function () {
                    if (errorCallback) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        });

        modal.result.then(function (result) {
            switch (result) {
                case 'close':
                    if (self.successCallback) {
                        self.successCallback();
                    }
                    break;

                case 'dismiss': {
                    if (self.errorCallback) {
                        self.errorCallback();
                    }
                    break;
                }

                default:
                    break;
            }
        });
    };
}
]);