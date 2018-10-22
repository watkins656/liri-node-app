var request = require("request");

// Grab the movieName which will always be the third node argument.
var searchTerm = process.argv[2];

// Then run a request to the OMDB API with the movie specified
// var queryUrl = `http://www.omdbapi.com/?apikey=${OMDBKey}`;
queryUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=f328bf48`

console.log(queryUrl);

request(queryUrl, function(error, response, body) {

  // If the request is successful
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    // console.log(JSON.parse(body));


console.log(JSON.parse(body).Title);    //        * Title of the movie.
console.log(JSON.parse(body).Year);            //        * Year the movie came out.
console.log(JSON.parse(body).imdbRating);            //        * IMDB Rating of the movie.
console.log(JSON.parse(body).Ratings[1].Source+' '+JSON.parse(body).Ratings[1].Value);            //        * Rotten Tomatoes Rating of the movie.
console.log(JSON.parse(body).Country);            //        * Country where the movie was produced.
console.log(JSON.parse(body).Language);            //        * Language of the movie.
console.log(JSON.parse(body).Plot);            //        * Plot of the movie.
console.log(JSON.parse(body).Actors);            //        * Actors in the movie.
            //      ```
            
            //    * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
            
            //      * If you haven't watched "Mr. Nobody," then you should: <http://www.imdb.com/title/tt0485947/>
            
            //      * It's on Netflix!
            
            //    * You'll use the request package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use `trilogy`.

  }
});
