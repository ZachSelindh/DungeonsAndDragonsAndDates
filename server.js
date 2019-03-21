/* Node.js "Friend Finder" project for UTA Boot Camp */
    
    // Import NPM's
var express = require("express");
var bodyParser = require("body-parser");

    // Create instance of Express at PORT 3000 as default
var app = express();
var PORT = process.env.PORT || 3000;

    // BodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

    // Import route functions
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

    // Check console to ensure app is listening/connected
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });