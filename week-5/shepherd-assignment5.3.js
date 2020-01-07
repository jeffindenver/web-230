/*
============================================
; Title:  shepherd-assignment5.3.js
; Author: Jeff Shepherd
; Date:   6 January 2020
; Modified By:
; Description: Create an array of composer
; objects and iterate over them, printing
; results.
;===========================================
*/

"use strict";

const header = require('../shepherd-header.js');
console.log(header.display("Jeff", "Shepherd", "Assignment 5.3"));
console.log("");

let composers = [
  {
    firstName: "Ludwig",
    lastName: "Beethoven",
    genre: "Classical",
    rating: 8
  },

  {
    firstName: "Wolfgang",
    lastName: "Mozart",
    genre: "Classical",
    rating: 10
  },

  {
    firstName: "Johann",
    lastName: "Bach",
    genre: "Classical",
    rating: 9
  },

  {
    firstName: "Joseph",
    lastName: "Haydn",
    genre: "Classical",
    rating: 6
  },

  {
    firstName: "Franz",
    lastName: "Schubert",
    genre: "Classical",
    rating: 5
  }
]

console.log("-- COMPOSERS --");
composers.forEach(item => printComposer(item));

/**
 * Params: Composer object
 * Response: output
 * Description: formats the properties of
 * a composer object and outputs to console.
 */
function printComposer(item) {
  console.log("Last Name: " + item.lastName +
    ", Genre: " + item.genre +
    ", Rating: " + item.rating.toString());
}
