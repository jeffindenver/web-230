/*
============================================
; Title:  shepherd-assignment5.4.js
; Author: Jeff Shepherd
; Date:   6 January 2020
; Modified By:
; Description: Create an array of composer
; objects, reduce properties, and iterate over
; them, printing results.
;===========================================
*/

"use strict";

const header = require('../shepherd-header.js');
console.log(header.display("Jeff", "Shepherd", "Assignment 5.4"));
console.log("");

const composers = initializeComposers();
const composersByRating = composers.map(item => reduceProperties(item, ["lastName", "rating"]));
const composersByGenre = composers.map(item => reduceProperties(item, ["lastName", "genre"]));

console.log("-- COMPOSER BY RATING --");
composersByRating.forEach(item => console.log("Rating: " + item.rating + "\n" +
  "Composer: " + item.lastName + "\n"));

console.log("-- COMPOSER BY GENRE --");
composersByGenre.forEach(item => console.log("Genre: " + item.genre + "\n" +
  "Composer: " + item.lastName + "\n"));

/**
 * Params: an Object and an arg array
 * Response: returns a new object
 * Description: sets the properties of
 * of an object. Can return an empty
 * object if none of the args match.
 */
function reduceProperties(anObject, args) {
  let newObject = {};
  for (let arg of args) {
    if(anObject.hasOwnProperty(arg)) {
      newObject[arg] = anObject[arg];
    }
  }
  return Object.freeze(newObject);
}

/**
 * Params: none
 * Response: returns an array of objects
 * Description: sets the properties of
 * several Composer objects.
 */
function initializeComposers() {
  return [
    Object.freeze({
      firstName: "Ludwig",
      lastName: "Beethoven",
      genre: "Classical",
      rating: 8
    }),

    Object.freeze({
      firstName: "Wolfgang",
      lastName: "Mozart",
      genre: "Classical",
      rating: 10
    }),

    Object.freeze({
      firstName: "Johann",
      lastName: "Bach",
      genre: "Classical",
      rating: 9
    }),

    Object.freeze({
      firstName: "Joseph",
      lastName: "Haydn",
      genre: "Classical",
      rating: 6
    }),

    Object.freeze({
      firstName: "Franz",
      lastName: "Schubert",
      genre: "Classical",
      rating: 5
    })
  ];
}
