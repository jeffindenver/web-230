/*
============================================
; Title:  shepherd-assignment4.4.js
; Author: Jeff Shepherd
; Date:   16 December 2019
; Modified By:
; Description: Use a predicate to filter
; an array
;===========================================
*/

"use strict";

const header = require('../shepherd-header.js');
console.log(header.display("Jeff", "Shepherd", "Assignment 4.4"));
console.log("");

/**
 * Params: two string values
 * Response: boolean
 * Description: returns true or false
 * Should it be named hasMatch? I also skipped
 * the if statement mentioned in instructions
 */
let getState = function (value1, value2) {
  return value1 === value2;
}

/**
 * Params: a string array and string value
 * Response: output to the console
 * Description: console.log the elements of a string array
 */
function logArray(anArray, headline) {
  console.log(headline);
  for(let item of anArray) {
    console.log(item);
  }
  console.log("");
}

/**
 * Params: an array of string, string value
 * Response: returns an array that was filtered
 * Description: returns a new array of matching items.
 */
function filterForState(anArray, value) {
  return anArray.filter(item => getState(item, value));
}

let americanStates = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"];
let filteredStates = filterForState(americanStates, "Iowa");

logArray(americanStates, "-- ORIGINAL ARRAY --");
logArray(americanStates.sort(), "-- SORTED ARRAY --");
logArray(filteredStates, "-- SELECTED VALUE --");
