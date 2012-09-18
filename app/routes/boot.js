module.exports = {
  init: function(app) {
    ["admin", "contacts"].forEach(function(name) {
      var router = require("./" + name).init(app);
    });
  }
};
