var Zombie = require('zombie');
var browser = new Zombie ({ debug: true, runScripts: true });

var ZombieClient = function (config) {
    var baseURL = config.baseURL;
    var user = config.user;
    var password = config.password;

    this.getBaseURL = function () {
        return baseURL;
    };

    this.getUser = function () {
        return user;
    };

    this.getPassword = function () {
        return password;
    };
};

ZombieClient.prototype.navigateTo = function (url, callback) {
    browser.visit (this.getBaseURL() + url, callback);
};

ZombieClient.prototype.type = function (selector, value, callback) {
    browser.fill(selector, value);
    callback();
};

ZombieClient.prototype.click = function (selector, callback) {
    browser.pressButton(selector, callback);
};

ZombieClient.prototype.getCurrentURL = function (callback) {
    this.waitForAppearance("title", function () {
        callback(browser.location.href);
    });
};

ZombieClient.prototype.waitForAppearance = function (selector, callback) {
    var elementPresent = function (selector) {
        console.log('querying');
        console.log(browser.query(selector));
        return browser.query(selector);
    };

    browser.wait (elementPresent, callback);
};

module.exports.ZombieClient = ZombieClient;
