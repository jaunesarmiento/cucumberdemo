module.exports = function () {
    var URL = require('./url').URL;
    var request = require('request');

    this.After(function(callback) {
        self = this;

        request.del (this.getBaseURL() + URL.scholars, function(err, resp, body) {
            self.tearDown(callback);
        });

    });
};

