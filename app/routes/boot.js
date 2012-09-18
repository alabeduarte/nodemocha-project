module.exports = {
  init: function(app) {
    ["admin"].forEach(function(name) {
      var router = require("./" + name).init(app);
    });
  }
};
