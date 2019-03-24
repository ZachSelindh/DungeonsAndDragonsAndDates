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

    var characterDiff = 0;

    var charMatch = {
      name: "",
      photo: "",
      difference: Infinity
    };

    for (i = 0; i < characters.length; i++) {
      var thisChar = characters[i];
      for (i = 0; i < surveyScores.length; i++) {
        if (surveyScores[i] == thisChar.body.scores[i]) {
        } else if (surveyScores[i] > thisChar.body.scores[i]) {
          characterDiff += surveyScores[i] - thisChar.body.scores[i];
        } else if (surveyScores[i] < thisChar.body.scores[i]) {
          characterDiff += thisChar.body.scores[i] - surveyScores[i];
        }
      }
      console.log(
        "Character diff: " + thisChar.body.name + " " + characterDiff
      );
    }
  });
};
