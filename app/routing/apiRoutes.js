// Import NPM's
var characters = require("../data/friends");

module.exports = function(app) {
  // Renders the JSON data from friends.js
  app.get("/api/friends", function(req, res) {
    res.json(characters);
  });
  app.post("/api/friends", function(req, res) {
    var newChar = req.body;
    var surveyScores = req.body.scores;

    // For loop that iterates through characters' survey scores and adds the differences to an array.
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
    var temp = Infinity;
    for (y = 0; y < differenceArray.length; y++) {
      if (differenceArray[y] < temp) {
        temp = differenceArray[y];
        index = y;
      }
    }
    var bestMatch = characters[index];

    // Sends the best match to survey.html using Ajax.
    res.json(bestMatch);
    characters.push(newChar);

    // Resets the characters' difference values to 0 for a new character entry.
    for (i = 0; i < characters.length; i++) {
      characters[i].difference = 0;
    }
  });
};
