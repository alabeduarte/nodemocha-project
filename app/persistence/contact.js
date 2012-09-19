var mongoose = require("mongoose"),
  Schema
;

Schema = new mongoose.Schema({
  name: {type: String}
});

mongoose.model("Contact", Schema);
module.exports = {
  schema: Schema,
  model: mongoose.model("Contact")
}
