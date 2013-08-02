var webdriver = require('selenium-webdriver');
var browser = new webdriver.Builder().
                  usingServer('http://localhost:4444/wd/hub').
                  withCapabilities({ browserName: 'chrome' }).
                  build();

    browser.manage().timeouts().implicitlyWait(10000);
    browser.manage().deleteAllCookies();

var SeleniumClient = function (config) {

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

SeleniumClient.prototype.navigateTo = function (url, callback) {
    browser.get (this.getBaseURL() + url).then(function(){
        callback();
    })
}

SeleniumClient.prototype.type = function (selector, value, callback) {
    if (selector[0] == '#') {
        browser.findElement(webdriver.By.id(selector.slice(1))).then(function(element){
            setText(element, value, callback)
        })
    }else if(selector[0] == '.') {
        browser.findElement(webdriver.By.className(selector.slice(1))).then(function(element){
            setText(element, value, callback)
        })
    }

    function setText(element, text, callback) {
        element.sendKeys(text).then(function(){
            callback()
        })
    }
};

SeleniumClient.prototype.click = function (selector, callback) {
    browser.findElement(webdriver.By.name(selector)).then(function(element){
      element.click().then(function(){ callback(); })
    })
};
SeleniumClient.prototype.getCurrentURL = function (callback) {

    browser.getCurrentUrl().then(function(url){
        callback(url)
    })

};

SeleniumClient.prototype.getText = function (selector, callback) {

    browser.findElement(webdriver.By.className(selector.slice(1))).then(function(element){
        element.getText().then(function(text){
            callback(text.slice(2))
        })
    })

};

SeleniumClient.prototype.clearCookies = function (callback) {
    return callback;
};

SeleniumClient.prototype.tearDown = function (callback) {
    browser.manage().deleteAllCookies().then(function(){
        callback();
    })
};




module.exports.SeleniumClient = SeleniumClient;
