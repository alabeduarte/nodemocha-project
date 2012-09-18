var Contacts = {};

Contacts.index = function(req, res, next) {
  res.render("admin/contacts/index.ejs");
};

Contacts.new = function(req, res, next) {
  res.render("admin/contacts/new.ejs");
};

Contacts.create = function(req, res, next) {
  res.render("admin/contacts/new.ejs");
};

module.exports = {
  init: function(app) {
    app.get("/admin/contacts", Contacts.index);
    app.get("/admin/contacts/new", Contacts.new);
    app.post("/admin/contacts/new", Contacts.create);
  }
};
