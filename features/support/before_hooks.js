module.exports = function () {
  this.Before(function(callback) {
    this.clearCookies();
    callback();
  });
};

