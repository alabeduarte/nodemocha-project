var express = require("express"),
  mongoose = require("mongoose"),
  app = express()
;

app.configure(function()  {
  /* ExpressJs Middlewares */
  // Simulate another http verbs (DELETE, PUT, etc)
  app.use(express.methodOverride());
  app.use(express.bodyParser());
});
