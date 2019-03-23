    // Import NPM's
var path = require("path");

module.exports = function(app) {
    
    app.get("/frieds", function(req, res) {
        res.json(path.join(__dirname, "../data/friends.js"));
    });
}
