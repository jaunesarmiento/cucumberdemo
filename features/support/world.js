// features/support/world.js

//var Client = require('./zombie_client').ZombieClient;
var Client = require('./selenium_client').SeleniumClient;

var World = function (callback) {

    var config = { uri : "http://localhost:3000",
                   auth_path:"/users/sign_in",
                   user : "adrian@proudcloud.net",
                   password: "p@ssw0rd",
                 };

    var client = new Client(config);

    callback(client);
};

module.exports.World = World;
