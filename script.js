"use strict";

const numbersOfFilms = +prompt("Skolko filmov vi uje posmotreli?", "");
const personalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Odin iz poslednix filmov?", ""),
      b = prompt("na skolko ocenice ego?", ""),
      c = prompt("Odin iz poslednix filmov?", ""),
      d = prompt("na skolko ocenice ego?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);