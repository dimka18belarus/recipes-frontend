var modalService = angular.module('core.modal').service('Modal', ['$uibModal', function ($uibModal) {

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

modalService.$inject = ['$uibModal'];


angular.module('core.modal').controller('ModalInstanceController', ModalInstanceController);
function ModalInstanceController($uibModalInstance, title, body, isError) {
    this.title = title;
    this.body = body;
    this.isError = isError;

    this.ok = function () {
        $uibModalInstance.close('close');
    };

    this.cancel = function () {
        $uibModalInstance.close('dismiss');
    };

}

ModalInstanceController.$inject = ['$uibModalInstance', 'title', 'body', 'isError'];