var Zombie = require('zombie');
var browser = new Zombie ({ debug: true, runScripts: true });

var ZombieClient = function (config) {
    var baseURL = config.uri;
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
    var currentURL = browser.location.href;
    callback(currentURL);
};

ZombieClient.prototype.getText = function (selector) {
    return browser.text(selector);
};

ZombieClient.prototype.clearCookies = function () {
    browser.cookies.deleteAll();
};

ZombieClient.prototype.tearDown = function (callback) {
    callback();
};

module.exports.ZombieClient = ZombieClient;
