var webdriver = require('selenium-webdriver');
var browser = new webdriver.Builder().
                  usingServer('http://localhost:4444/wd/hub').
                  withCapabilities({ browserName: 'chrome' }).
                  build();

var SeleniumClient = function (config) {

    var baseURL = config.baseURL;
    var user = config.user;
    var password = config.password;

    //var find = function(selector, callback) {
        //if (selector[0] == "#") { //if selector is id
            //selector = webdriver.By.id(selector)
        //} else if (selector[0] == "." ){ //if selector is class
            //selector = webdriver.By.className(selector)
        //}

        //webdriver.findElement(selector).then(function (element){
            //callback(null, element);
        //})
    //};

    this.getBaseURL = function () {
        return baseURL;
    };

    this.getUser = function () {
        return user;
    };

    this.getPassword = function () {
        return password;
    };

    //this.fill = function(selector, value, callback) {
        //find(selector).then(function(element){
            //element.sendKeys(value).then(function(result){
                //callback(null, result)
            //})
        //})
    //};


};

SeleniumClient.prototype.navigateTo = function (url, callback) {
    browser.get (this.getBaseURL() + url);
    callback();
};

SeleniumClient.prototype.type = function (selector, value, callback) {
    browser.fill(selector, value);
    callback();
};

SeleniumClient.prototype.click = function (selector, callback) {
    browser.pressButton(selector, callback);
};

module.exports.SeleniumClient = SeleniumClient;
