var express = require("express"),
  mongoose = require("mongoose"),
  config = require("./config")
  app = express()
;

/* ExpressJs Middlewares */
// Simulate another http verbs (DELETE, PUT, etc)
app.use(express.methodOverride());
app.use(express.bodyParser());
app.use(express.logger());
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/app/views");

require("./app/routes/boot").init(app);

app.listen(config.serverPort);
console.log("=> Listening in %s on http://0.0.0.0:%s", config.env, config.serverPort);
