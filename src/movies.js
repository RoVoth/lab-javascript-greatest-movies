// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require('./data');

//const movies = require('./data');

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let allDirectors = moviesArray.map((eachElemt) => {
    return eachElemt.director;
  });
  return allDirectors;
}
console.log(getAllDirectors(moviesArray));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let dramaMoviesSteven = movies.filter((movie) => {
    if (movie.director === `Steven Spielberg` && movie.genre.includes(`Drama`));
    return dramaMoviesSteven.length
  });
}
console.log(howManyMovies(moviesArray));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let score = moviesArray.reduce((acc, movie) => {
    return acc + movie.score;
  }, 0);

  let scoreAvgTotal = (score / moviesArray.length).toFixed(2);
  return scoreAvgTotal;
}
console.log(scoresAverage(moviesArray));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let filtDrama = moviesArray.filter((movie) => {
      return movie.genre.includes(`Drama`);
    })
    return scoresAverage(filtDrama)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let moviesAr = JSON.parse(JSON.stringify(moviesArray));

  return moviesAr.sort((elem1, elem2) => {
    if (elem1.year > elem2.year) {
      return 1;
    } else if (elem2.year > elem1.year) {
      return -1;
    } else {
      if (elem1.title > elem2.title) {
        return 1;
      } else if (elem2.title > elem1.title) {
        return -1;
      }
      return 0;
    }
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
 let moviesAr = JSON.parse(JSON.stringify(moviesArray));
 
 moviesAr.sort (elem1, elem2) => {
  if(elem1.title > elem2.title) {
    return 1;
  } else if (elem1.title < elem2.title) {
    return -1;
  } else {
    return 0;
  }
 }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
