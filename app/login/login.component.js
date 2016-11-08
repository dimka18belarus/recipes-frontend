angular.module('login')
    .controller('LoginCtrl', ['Login', 'modalService', function (Login, modalService) {

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
                modalService.activate('שגיאה', 'שם משתמש או סיסמא שגויים');
            }
            else {
                modalService.activate('שגיאה', response.data.message);
            }
        };

    }]);