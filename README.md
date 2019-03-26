# Friend-Finder
This application uses Node.js as a functional server, running express to handle requests and results.

A static native data file contains JSON information for the D&D-style characters that are pre-loaded in this dating app.

When someone enters their information, their character is compared to the survey scores array contained in each character/object, and the character with the lowest score differential is returned as the result.

Then, a modal appears which displays their name and profile picture.

Afterwards, the differential data is reset so that new characters can be matched with previously added chars.

Thanks for visiting! Please check out my deployed app.

Dungeons & Dragons & Dates is deployed via Heroku at:

https://dashboard.heroku.com/apps/dungeons-and-dragons-and-dates
