//Dependencies

var express = require("express");
var bodyParser = require("body-parser");

//Portserver will be listening on

var PORT = process.env.PORT || 8080;
var app = express();

//Serve static content for app from "public" directory in the app directory

app.use(express.static(__dirname + '/public'));

//Parse application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: false }));

//Parse application/json

app.use(bodyParser.json());

//Set Handlebars.

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes/give server access to routes

var routes = require("./controllers/burgersController.js");

app.use(routes);

//Listen function

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});