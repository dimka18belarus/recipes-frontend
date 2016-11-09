angular.module('login').factory('Login', function ($http, Server) {
    var self = this;

    self.currentUser = null;

    self.init = function () {
        self.currentUser = JSON.parse(localStorage.getItem('user'));
    };

    self.getCurrentUser = function () {
        return self.currentUser;
    };

    self.login = function (user, successCallback, errorCallback) {
        return $http({
            method: 'POST',
            url: Server.getServerUrl() + '/api/signin/admin',
            headers: {'authorization': 'Basic ' + window.btoa(user.userName + ':' + user.password)}
        }).then(function (response) {
                self.currentUser = response.data;
                localStorage.setItem('user', JSON.stringify(self.currentUser));
                if (successCallback) {
                    successCallback(response);
                }
            }, function (response) {
                if (errorCallback) {
                    errorCallback(response);
                }
            }
        );
    };

    self.init();
});