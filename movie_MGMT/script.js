let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }   
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies.push(movie);
    console.log("A new movie is added");
}

//iterate through all elements of allMovies array
//print out to console in a correct format
//print out the total number of movies in allMovies array
let printMovies = () => {
    console.log("Printing all movies....");
    var count = 0;
    while (count < allMovies.length) {
        console.log(allMovies[count].title + ", rating of " + allMovies[count].rating + ", haveWatched: " + allMovies[count].haveWatched);
        count = count + 1;
    }
    console.log("\nYou have " + count + " movies in total")
}


//print out to console, only the movies that has a rating higher than rating(argument)
//print out the total number of matches
let highRatings = (rating) => {
    console.log("printing movie that has a rating higher than " + rating);
    var count = 0;
    var sum = 0;
    while (count < allMovies.length) {
        if (allMovies[count].rating > rating) {
            console.log(allMovies[count].title + ", rating of " + allMovies[count].rating + ", haveWatched: " + allMovies[count].haveWatched);
            sum = sum + 1;
        }
        count = count + 1;
    }
    console.log("\nIn total, there are " + sum + " matches");
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    console.log("changing the status of the movie...");
    var count = 0;
    var sum = 0;
    while (count < allMovies.length) {
        if (allMovies[count].title == title) {
            sum = count;
            count = allMovies.length;
        }
        count = count + 1;
    }
    if (allMovies[sum].haveWatched == true) {
        allMovies[sum].haveWatched = false;
    } else {
        allMovies[sum].haveWatched = true;
    }
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE OR EDIT
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);


console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

highRatings(3.5);