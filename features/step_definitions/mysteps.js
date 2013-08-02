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
        var self = this;
        this.getCurrentURL(function (url) {
            assert.equal (url, self.getBaseURL() + PAGES[page]);
            callback();
        });
    });

    this.When(/^I fill up the new scholar form:$/, function(table, callback) {
        var self = this;
        var loginCredentials = table.hashes()[0];

        async.waterfall([
            function (callback) {
                self.type("#scholar_first_name", loginCredentials.FirstName, callback);
            },
            function(callback) {
                self.type("#scholar_last_name", loginCredentials.LastName, callback);
            },
            function (callback) {
                self.type("#scholar_amount", loginCredentials.Amount, callback);
            },
            function(callback) {
                self.type("#scholar_school", loginCredentials.School, callback);
            },
            function(callback) {
                self.type("#scholar_age", loginCredentials.Age, callback);
            },
            function(callback) {
                self.type("#scholar_description", loginCredentials.Description, callback);
            }
        ], function (err) {
            callback();
        });
    });

    this.Then(/^I should see a message:$/, function(string, callback) {

      string = string.replace(/\s+/g, ' ');

        this.getText('.alert', function (alertMsg) {

            assert(alertMsg.indexOf(string) > -1);
            callback();
        });
    });

    this.Then(/^I should see the following scholars$/, function(table, callback) {

        var scholars = table.hashes();

        var scholarCount = scholars.length;
        var foundCount = 0;
        var foundAll = false;

        //get all the h4 in the document
        this.queryAll('h4', function(elements) {
            //match all the h4 with the scholars
            //add to found count for every scholar matched
            async.each(elements, function (ele, callback) {

                var nodeText = elements[0]._childNodes[0].__nodeValue;

                for (var i = 0; i < scholars.length; i++) {
                    var scholar = scholars[i];
                    var scholarName = scholar.FirstName + " " + scholar.LastName;

                    if (scholarName === nodeText) {
                        foundCount = foundCount + 1;
                    }
                }

                callback();

            }, function () {
                assert.equal(foundCount, scholarCount);
                callback();
            });
        });
    });
};
