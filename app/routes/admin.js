var Admin = {};

Admin.index = function(req, res, next) {
  res.render("admin/index.ejs");
};

module.exports = {
  init: function(app) {
    app.get("/admin", Admin.index);
  }
};
