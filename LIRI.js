require('dotenv/config');
let keys = require('./keys.js')
let Spotify = require('node-spotify-api');
let spotify = new Spotify(keys.spotify);
let command = process.argv[2];
let searchTerm = process.argv[3];
let fs = require('fs');
const OMDBKey = 'f328bf48'
const chalkAnimation = require('chalk-animation');
 
chalkAnimation.rainbow('Lorem ipsum dolor sit amet');



console.log(command);
console.log(searchTerm);








// 9. Make it so liri.js can take in one of the following commands:
LIRI(command, searchTerm);
function LIRI(command, term) {
    switch (command) {

        case `concert-this`: concertThis(term)
            function concertThis(artist) {
                // 1. `node liri.js concert-this <artist/band name here>`


                let request = require("request");

                // Grab the movieName which will always be the third node argument.
                let term = process.argv[2];

                // Then run a request to the OMDB API with the movie specified
                let queryUrl = `https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`;

                console.log(queryUrl);

                request(queryUrl, function (error, response, body) {

                    // If the request is successful
                    if (!error && response.statusCode === 200) {

                        // Parse the body of the site and recover just the imdbRating
                        // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
                        console.log(JSON.parse(body));


                        console.log(JSON.parse(body)[0].venue.name);            // Name of the venue
                        console.log(JSON.parse(body)[0].venue.city);             // Venue location
                        console.log(JSON.parse(body)[0].datetime);       // Date of the Event 
                        //TODO:(use moment to format this as "MM/DD/YYYY")



                    }
                });
            };
            break;
        case `spotify-this-song`: spotifyThisSong(term);
            function spotifyThisSong(song) {

                // 2. `node liri.js spotify-this-song '<song name here>'`
                spotify.search({ type: 'track', query: song, limit: 1 }, function (err, data) {
                    if (err) {
                        return console.log('Error occurred: ' + err);
                    }
                    console.log(data.tracks.items[0].artists[0].name); // Artist(s)
                    console.log(data.tracks.items[0].name);            // The song's name
                    console.log(data.tracks.items[0].preview_url);     // A preview link of the song from Spotify
                    console.log(data.tracks.items[0].album.name);      // The album that the song is from
                });
                //    * If no song is provided then your program will default to "The Sign" by Ace of Base.
            }
            break;
        case `movie-this`: movieThis(term);
            function movieThis(movie) {

                let request = require("request");

                // Grab the movieName which will always be the third node argument.
                let searchTerm = process.argv[2];

                // Then run a request to the OMDB API with the movie specified
                let queryUrl = `http://www.omdbapi.com/?apikey=${OMDBKey}&t=${movie}`;
                // queryUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=f328bf48`

                console.log(queryUrl);

                request(queryUrl, function (error, response, body) {

                    // If the request is successful
                    if (!error && response.statusCode === 200) {

                        // Parse the body of the site and recover just the imdbRating
                        // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
                        // console.log(JSON.parse(body));


                        console.log(JSON.parse(body).Title);    //        * Title of the movie.
                        console.log(JSON.parse(body).Year);            //        * Year the movie came out.
                        console.log(JSON.parse(body).imdbRating);            //        * IMDB Rating of the movie.
                        console.log(JSON.parse(body).Ratings[1].Source + ' ' + JSON.parse(body).Ratings[1].Value);            //        * Rotten Tomatoes Rating of the movie.
                        console.log(JSON.parse(body).Country);            //        * Country where the movie was produced.
                        console.log(JSON.parse(body).Language);            //        * Language of the movie.
                        console.log(JSON.parse(body).Plot);            //        * Plot of the movie.
                        console.log(JSON.parse(body).Actors);            //        * Actors in the movie.
                        //      ```

                        //TODO: Ask if there is a database that checks if the term is a movie or not.  
                        //    * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

                        //      * If you haven't watched "Mr. Nobody," then you should: <http://www.imdb.com/title/tt0485947/>

                        //      * It's on Netflix!

                        //    * You'll use the request package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use `trilogy`.

                    }
                });

            }
            break;
        case `do-what-it-says`:
            // 4. `node liri.js do-what-it-says`
            fs.readFile("random.txt", "utf8", function (error, data) {

                // If the code experiences any errors it will log the error to the console.
                if (error) {
                    return console.log(error);
                }
                //    * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
                let dataArr = data.split(",");
                let newCommand = dataArr[0];
                let newSearchTerm = dataArr[1];
                LIRI(newCommand, newSearchTerm);
                

                //      * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

                //      * Edit the text in random.txt to test out the feature for movie-this and my-tweets
            });

            break;
        default:
    }
}



        // ### BONUS

        // * In addition to logging the data to your terminal/bash window, output the data to a .txt file called `log.txt`.

// * Make sure you append each command you run to the `log.txt` file. 

// * Do not overwrite your file each time you run a command.

// ### Reminder: Submission on BCS

// * Please submit the link to the Github Repository!

// - - -

// ### Minimum Requirements

// Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Adding a README.md as well as adding this homework to your portfolio are required as well and more information can be found below.

// - - -

// ### Create a README.md

// Add a `README.md` to your repository describing the project. Here are some resources for creating your `README.md`. Here are some resources to help you along the way:

// * [About READMEs](https://help.github.com/articles/about-readmes/)

// * [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

// - - -

// ### Add To Your Portfolio

// After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.

// - - -

// ### One More Thing

// If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.

// **Good Luck!**




// ## Submission Guide

// Make sure you use the normal GitHub. Because this is a CLI App, there will be no need to deploy it to Heroku. This time, though, you need to include screenshots, a gif, and/or a video showing us that you got the app working with no bugs. You can include these screenshots or a link to a video in a `README.md` file.

// * Include screenshots (or a video) of typical user flows through your application (for the customer and if relevant the manager/supervisor). This includes views of the prompts and the responses after their selection (for the different selection options).

// * Include any other screenshots you deem necessary to help someone who has never been introduced to your application understand the purpose and function of it. This is how you will communicate to potential employers/other developers in the future what you built and why, and to show how it works. 

// * Because screenshots (and well-written READMEs) are extremely important in the context of GitHub, this will be part of the grading.

// If you haven't written a markdown file yet, [click here for a rundown](https://guides.github.com/features/mastering-markdown/), or just take a look at the raw file of these instructions.

// ### Submission on BCS

// * Please submit the link to the Github Repository!

