angular.module('core.server').service('Server', function () {
    var self = this;

    self.serverUrl = '';

    self.getServerUrl = function () {
        return self.serverUrl;
    };

    self.setServerUrl = function (serverUrl) {
        self.serverUrl = serverUrl;
    }
});