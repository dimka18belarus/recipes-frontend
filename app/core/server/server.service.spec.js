describe('Server', function () {
    var Server;
    var serverUrl = 'http://localhost:9090';

    // Add a custom equality tester before each test
    beforeEach(function () {
        jasmine.addCustomEqualityTester(angular.equals);
    });

    beforeEach(module('core.server'));

    beforeEach(inject(function (_Server_) {
        Server = _Server_;
    }));

    it('should return server url equal serverUrl', function () {
        var urlFromService = Server.getServerUrl();

        expect(urlFromService).toEqual('');

        Server.setServerUrl(serverUrl);
        urlFromService = Server.getServerUrl();
        expect(urlFromService).toEqual(serverUrl);
    });

});
