angular.module('login')
    .controller('LoginCtrl', ['Login', 'Modal', function (Login, Modal) {

        var self = this;

        self.user = {
            userName: null,
            password: null
        };

        self.login = function () {
            Login.login(self.user, self.successLogin, self.errorLogin);
        };

        self.goDashboard = function () {
            $location.path("/");
        };

        self.successLogin = function () {
            self.goDashboard();
        };

        self.errorLogin = function (response) {
            if (response.data.message === 'Bad credentials') {
                Modal.activate('Bad credentials');
            }
            else {
                Modal.activate('Success', response.data.message);
            }
        };

    }]);