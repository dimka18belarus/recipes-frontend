angular.module('core.modal').component('ModalWindow', {
    templateUrl: 'modal/modal.template.html',
    controller: ['$uibModalInstance', 'title', 'body', 'isError',
        function ModalWindowController($uibModalInstance, title, body, isError) {
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
    ]
});