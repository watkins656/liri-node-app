let request = require("request");



//Authorization
const spotifyKey = 'f0489a20bd9f4165a40a8b0314ee4884';

let authURL = `https://accounts.spotify.com/api/token?grant_type=${spotifyKey}`
request(authURL, function(error, response, body) {
console.log(body);
    // If the request is successful
    if (!error && response.statusCode === 200) {
  
      // Parse the body of the site and recover just the imdbRating
      // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
      console.log(JSON.parse(body)); 
    }
  });










// Grab the movieName which will always be the third node argument.
var searchTerm = process.argv[2];

// Then run a request to the OMDB API with the movie specified
// var queryUrl = `https://api.spotify.com/`;
// queryUrl = `https://api.spotify.com/search/?Authorization=${}&q=${song}`

// console.log(queryUrl);

// request(queryUrl, function(error, response, body) {

//   // If the request is successful
//   if (!error && response.statusCode === 200) {

//     // Parse the body of the site and recover just the imdbRating
//     // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
//     // console.log(JSON.parse(body));


// console.log(JSON.parse(body).Title);    //        * Title of the movie.
// console.log(JSON.parse(body).Year);            //        * Year the movie came out.
// console.log(JSON.parse(body).imdbRating);            //        * IMDB Rating of the movie.
// console.log(JSON.parse(body).Ratings[1].Source+' '+JSON.parse(body).Ratings[1].Value);            //        * Rotten Tomatoes Rating of the movie.
// console.log(JSON.parse(body).Country);            //        * Country where the movie was produced.
// console.log(JSON.parse(body).Language);            //        * Language of the movie.
// console.log(JSON.parse(body).Plot);            //        * Plot of the movie.
// console.log(JSON.parse(body).Actors);            //        * Actors in the movie.
//             //      ```
//             // 2. `node liri.js spotify-this-song '<song name here>'`
        
//         //    * This will show the following information about the song in your terminal/bash window
        
//         //      * Artist(s)

//         //      * The song's name
        
//         //      * A preview link of the song from Spotify
        
//         //      * The album that the song is from
        
//         //    * If no song is provided then your program will default to "The Sign" by Ace of Base.
        
//         //    * You will utilize the [node-spotify-api](https://www.npmjs.com/package/node-spotify-api) package in order to retrieve song information from the Spotify API.
        
//         //    * The Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a **client id** and **client secret**:
        
//         //    * Step One: Visit <https://developer.spotify.com/my-applications/#!/>
        
//         //    * Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.
        
//         //    * Step Three: Once logged in, navigate to <https://developer.spotify.com/my-applications/#!/applications/create> to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.
        
//         //    * Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the [node-spotify-api package](https://www.npmjs.com/package/node-spotify-api).
    
//   }
// });
