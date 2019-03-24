// Import NPM's
var characters = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(characters);
  });
  app.post("/api/friends", function(req, res) {
    console.log("req.body", req.body);
    var newChar = req.body;
    var surveyScores = req.body.scores;
    characters.push(newChar);
  });
};
