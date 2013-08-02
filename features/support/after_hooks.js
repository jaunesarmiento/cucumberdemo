module.exports = function () {
  this.After(function(callback) {
    this.tearDown(callback);
  });
};

