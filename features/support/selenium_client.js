var webdriver = require('selenium-webdriver');
var browser = new webdriver.Builder().
                  usingServer('http://localhost:4444/wd/hub').
                  withCapabilities({ browserName: 'chrome' }).
                  build();

var SeleniumClient = function (config) {

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

SeleniumClient.prototype.navigateTo = function (url, callback) {
    browser.get (this.getBaseURL() + url);
    callback();
}

SeleniumClient.prototype.type = function (selector, value, callback) {
    if (selector[0] == '#') {
        browser.findElement(webdriver.By.id(selector)).sendKeys(value)
    }else if(selector[0] == '.') {
        browser.findElement(webdriver.By.className(selector)).sendKeys(value)
    }
    //callback();
};

SeleniumClient.prototype.click = function (selector, callback) {
    browser.pressButton(selector, callback);
    //callback();
};

module.exports.SeleniumClient = SeleniumClient;
