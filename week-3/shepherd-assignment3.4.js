/*
============================================
; Title:  shepherd-assignment3.4.js
; Author: Professor Krasso
; Date:   9 December 2019
; Modified By: Jeff Shepherd
; Description: All about loops.
;===========================================
*/

"use strict";

const header = require('../shepherd-header.js');
console.log(header.display("Jeff", "Shepherd", "Assignment 3.4"));
console.log("");

/**
 * Params: any two
 * Response: true or false
 * Description: returns the equality of two items
 */
function match(item1, item2) {
  return (item1 === item2);
}

/**
 * Params: any two
 * Response: <item1> and <item2> do not match!
 * Description: Returns a string, saying items do not match.
 */
function logMismatch(item1, item2) {
  return item1 + " does not match " + item2 + "!";
}

/**
 * Params: any two
 * Response: <item1> and <item2> match!
 * Description: Returns a string, saying that items match.
 */
function logMatch(item1, item2) {
  return item1 + " does match " + item2 + "!";
}

/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 * Disclaimer: Do not remove this function as this is what you will be using to generate a random number
 */
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}

console.log("-- DO THE NUMBERS MATCH GAME --");
let x = 6;
for (let i = 0; i < 10; i++) {
  let random = randomNumber();
  if (match(x, random)) {
    console.log(logMatch(x, random));
  } else {
    console.log(logMismatch(x, random));
  }
}
