// Requiring necessary npm packages
var express = require("express");
var db = require("./models");
var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 3000;
var app = express();
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgersController.js");
app.use(routes);

// Syncs database and logs a message to user upon success
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
});



// var bodyParser = require("body-parser");//vid only
// var methodOverride = require("method-override");//vid only

/*FOR USER SESSIONS/CREDENTIALS
We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
*/