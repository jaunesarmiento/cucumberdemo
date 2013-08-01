module.exports = function () {

    this.World = require("../support/world.js").World;
    var assert = require("assert");
    var BUTTONS = require("../support/buttons").BUTTONS;
    var PAGES = require("../support/page").PAGES;
    var async = require ("async");

    this.Given(/^I am on the "([^"]*)" page$/, function(page, callback) {
        this.navigateTo(PAGES[page], callback);
    });

    this.When(/^I type my login credentials:$/, function(table, callback) {
        var self = this;
        var loginCredentials = table.hashes()[0];

        async.waterfall([
            function (callback) {
                self.type("#user_email", loginCredentials.email, callback);
            },
            function(callback) {
                self.type("#user_password", loginCredentials.password, callback);
            }
        ], function (err) {
            callback();
        });
    });


    this.When(/^I press the "([^"]*)" button$/, function(button, callback) {
        this.click(BUTTONS[button], callback);
    });

    this.Then(/^I should be on the "([^"]*)" page$/, function(page, callback) {
        assert.equal (this.getCurrentURL(), this.getBaseURL() + PAGES[page]);
        callback();
    });
};
