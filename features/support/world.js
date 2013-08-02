// features/support/world.js

var Client = require('./zombie_client').ZombieClient;
var RestClient = require('portal-client');

var World = function (callback) {

    var config = { uri : "http://localhost:3000",
                   auth_path:"/users/sign_in",
                   user : "adrian@proudcloud.net",
                   password: "p@ssw0rd",
                 };

    var client = new Client(config);

    client.restClient = new RestClient(config, function () {
        callback(client);
    });
};

module.exports.World = World;
