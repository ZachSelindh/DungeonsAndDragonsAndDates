// Import NPM's
var characters = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(characters);
  });
  app.post("/api/friends", function(req, res) {
    var newChar = req.body;
    var surveyScores = req.body.scores;
    differenceArray = [];

    for (i = 0; i < characters.length; i++) {
      var differential = 0;
      characters[i].difference = differential;
      for (x = 0; x < 10; x++) {
        differential += Math.abs(surveyScores[x] - characters[i].scores[x]);
      }
      characters[i].difference = differential;
      differenceArray.push(differential);
    }

    // For loop that iterates through difference values and finds the index of the lowest.
    var index = 0;
    var temp = 100;
    for (y = 0; y < differenceArray.length; y++) {
      if (differenceArray[y] < temp) {
        temp = differenceArray[y];
        index = y;
      }
    }
    var bestMatch = characters[index];
    res.json(bestMatch);
    characters.push(newChar);
    characters.difference = 0;
  });
};
