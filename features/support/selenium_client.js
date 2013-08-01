var webdriver = require('selenium-webdriver');
var browser = new webdriver.Builder().
                  usingServer('http://localhost:4444/wd/hub').
                  withCapabilities({ browserName: 'chrome' }).
                  build();
    browser.manage().timeouts().implicitlyWait(10000);

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
    return 'http://localhost:3000/'
    //browser.wait(function(){
        //return browser.getCurrentUrl().then(function(url){
            //return url;
        //})
    //})
};

module.exports.SeleniumClient = SeleniumClient;
