require('dotenv/config');
let chalk = require('chalk');
let wrap = require('word-wrap');
let keys = require('./keys.js')
let Spotify = require('node-spotify-api');
let spotify = new Spotify(keys.spotify);
let command = process.argv[2];
let searchTerm = '';
let nodeArgs = process.argv;
for (var i = 3; i < nodeArgs.length; i++) {
    if (i > 3 && i < nodeArgs.length) {
        searchTerm = searchTerm + "+" + nodeArgs[i];
    }
    else {
        searchTerm += nodeArgs[i];
    }
}
let fs = require('fs');
const OMDBKey = 'f328bf48'
const chalkAnimation = require('chalk-animation');


//LIRI Big Letters
console.log(chalk.black.bgWhiteBright(`.......................................................................................`));
console.log(chalk.black.bgCyan(`.LLLLL.......................IIIII...............RRRRRRRRRRRRRR.................IIIII..`));
console.log(chalk.black.bgGreen(`.LLLLL.......................IIIII...............RRRRRRRRRRRRRRR................IIIII..`));
console.log(chalk.black.bgYellow(`.LLLLL.......................IIIII...............RRRRRRRRRRRRRRR................IIIII..`));
console.log(chalk.black.bgBlue(`.LLLLL.......................IIIII...............RRRRR....RRRRRR................IIIII..`));
console.log(chalk.black.bgMagenta(`.LLLLL.......................IIIII...............RRRRR.....RRRRR................IIIII..`));
console.log(chalk.black.bgCyan(`.LLLLL.......................IIIII...............RRRRR.....RRRRR................IIIII..`));
console.log(chalk.black.bgWhite(`.LLLLL.......................IIIII...............RRRRR....RRRRRR................IIIII..`));
console.log(chalk.black.bgBlackBright(`.LLLLL.......................IIIII...............RRRRRRRRRRRRRRR................IIIII..`));
console.log(chalk.black.bgRedBright(`.LLLLL.......................IIIII...............RRRRRRRRRRRRRR.................IIIII..`));
console.log(chalk.black.bgGreenBright(`.LLLLL.......................IIIII...............RRRRRRRRRRRRR..................IIIII..`));
console.log(chalk.black.bgYellowBright(`.LLLLL.......................IIIII...............RRRRR.RRRRRRR..................IIIII..`));
console.log(chalk.black.bgBlueBright(`.LLLLL.......................IIIII...............RRRRR..RRRRRRR.................IIIII..`));
console.log(chalk.black.bgMagentaBright(`.LLLLL.......................IIIII...............RRRRR...RRRRRR.................IIIII..`));
console.log(chalk.black.bgCyanBright(`.LLLLL.......................IIIII...............RRRRR....RRRRRR................IIIII..`));
console.log(chalk.black.bgWhiteBright(`.LLLLLLLLLLLLLL..............IIIII...............RRRRR....RRRRRRR...............IIIII..`));
console.log(chalk.black.bgYellow(`.LLLLLLLLLLLLLL..............IIIII...............RRRRR.....RRRRRR...............IIIII..`));
console.log(chalk.black.bgCyan(`.LLLLLLLLLLLLLL..............IIIII...............RRRRR......RRRRRR..............IIIII..`));
console.log(chalk.black.bgGreen(`.......................................................................................`));


// 9. Make it so liri.js can take in one of the following commands:
LIRI(command, searchTerm);
function LIRI(command, term) {
    let data = '';
    switch (command) {

        case `concert-this`: concertThis(term)
            function concertThis(artist) {
                // 1. `node liri.js concert-this <artist/band name here>`


                let request = require("request");

                // Grab the movieName which will always be the third node argument.
                let term = process.argv[2];

                // Then run a request to the OMDB API with the movie specified
                let queryUrl = `https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`;
                request(queryUrl, function (error, response, body) {

                    // If the request is successful
                    if (!error && response.statusCode === 200) {
                        data += JSON.stringify(response, null, 2);

                        // Parse the body of the site and recover just the imdbRating
                        // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
                        // console.log(JSON.parse(body));



                        console.log(chalk.yellow(`.......................................................................................`));
                        console.log(chalk.yellow(`.......................................................................................`));
                        console.log(wrap(`||     VENUE:                                             ${JSON.parse(body)[0].venue.name}`, { width: 83 }));            // Name of the venue
                        console.log(chalk.yellow(`.......................................................................................`));
                        console.log(wrap(`||     CITY:                                              ${JSON.parse(body)[0].venue.city}`, { width: 83 }));             // Venue location
                        console.log(chalk.yellow(`.......................................................................................`));
                        console.log(wrap(`||     DATE and TIME:                                     ${JSON.parse(body)[0].datetime}`, { width: 83 }));       // Date of the Event 
                        console.log(chalk.yellow(`.......................................................................................`));
                        console.log(chalk.yellow(`.......................................................................................`));
                        //TODO:(use moment to format this as "MM/DD/YYYY")


                        log(data);
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
                    console.log("----------------------------------------------------");
                    console.log("----------------------------------------------------");
                    console.log(wrap(`||     ARTIST:                                                    ${data.tracks.items[0].artists[0].name}`, { width: 83 })); // Artist(s)
                    console.log("----------------------------------------------------");
                    console.log(wrap(`||     SONG:                                                      ${data.tracks.items[0].name}`, { width: 83 }));            // The song's name
                    console.log("----------------------------------------------------");
                    console.log(wrap(`||     PREVIEW:                                                   ${data.tracks.items[0].preview_url}`, { width: 83 }));     // A preview link of the song from Spotify
                    console.log("----------------------------------------------------");
                    console.log(wrap(`||     ALBUM:                                                     ${data.tracks.items[0].album.name}`, { width: 83 }));      // The album that the song is from
                    console.log("----------------------------------------------------");
                    console.log("----------------------------------------------------");
                    data += JSON.stringify(data);

                    log(data);
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


                request(queryUrl, function (error, response, body) {

                    // If the request is successful
                    if (!error && response.statusCode === 200) {
                        data += JSON.stringify(response, null, 2);


                        // Parse the body of the site and recover just the imdbRating
                        // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
                        // console.log(JSON.parse(body));

                        console.log(chalk.yellow(`.......................................................................................`));
                        console.log(chalk.yellow(`.......................................................................................`));
                        console.log(wrap(`MOVIE:                                                        ${JSON.parse(body).Title}`, { width: 83 }));    //        * Title of the movie.
                        console.log(chalk.yellow(`.......................................................................................`));
                        console.log(wrap(`RELEASE YEAR:                                                 ${JSON.parse(body).Year}`, { width: 83 }));            //        * Year the movie came out.
                        console.log(chalk.yellow(`.......................................................................................`));
                        console.log(wrap(`IMDB:                                                         ${JSON.parse(body).imdbRating}`, { width: 83 }));            //        * IMDB Rating of the movie.
                        console.log(chalk.yellow(`.......................................................................................`));
                        console.log(wrap(`ROTTEN TOMATOES:                                              ${JSON.parse(body).Ratings[1].Source + ' ' + JSON.parse(body).Ratings[1].Value}`, { width: 83 }));            //        * Rotten Tomatoes Rating of the movie.
                        console.log(chalk.yellow(`.......................................................................................`));
                        console.log(wrap(`COUNTRY:                                                      ${JSON.parse(body).Country}`, { width: 83 }));            //        * Country where the movie was produced.
                        console.log(chalk.yellow(`.......................................................................................`));
                        console.log(wrap(`LANGUAGE:                                            ${JSON.parse(body).Language}`, { width: 83 }));            //        * Language of the movie.
                        console.log(chalk.yellow(`.......................................................................................`));
                        console.log(wrap(`PLOT:                                                         ${JSON.parse(body).Plot}`, { width: 83 }));            //        * Plot of the movie.
                        console.log(chalk.yellow(`.......................................................................................`));
                        console.log(wrap(`ACTORS:                                                       ${JSON.parse(body).Actors}`, { width: 83 }));            //        * Actors in the movie.
                        console.log(chalk.yellow(`.......................................................................................`));
                        console.log(chalk.yellow(`.......................................................................................`));

                        //      ```

                        //TODO: Ask if there is a database that checks if the term is a movie or not.  
                        //    * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

                        //      * If you haven't watched "Mr. Nobody," then you should: <http://www.imdb.com/title/tt0485947/>

                        //      * It's on Netflix!

                        //    * You'll use the request package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use `trilogy`.

                        log(data);
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
        case `log`:
            fs.readFile("log.txt", "utf8", function (error, data) {

                // If the code experiences any errors it will log the error to the console.
                if (error) {
                    return console.log(error);
                }
                //    * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
                console.log(data);

                //      * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

                //      * Edit the text in random.txt to test out the feature for movie-this and my-tweets
            });
            break;

        default:
    }

    function log(data) {
        fs.appendFile("log.txt", data, function (err) {

            // If an error was experienced we will log it.
            if (err) {
                console.log(err);
            }

            // If no error is experienced, we'll log the phrase "Content Added" to our node console.
            else {
                console.log("Content Added!");
            }

        });
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

