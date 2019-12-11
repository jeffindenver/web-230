/*
============================================
; Title:  shepherd-assignment3.2.js
; Author: Jeff Shepherd
; Date:   9 December 2019
; Modified By:
; Description: Write pattern matching
; functions.
;===========================================
*/

"use strict";

const header = require('../shepherd-header.js');
console.log(header.display("Jeff", "Shepherd", "Assignment 3.2"));
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
  return item1 + " and " + item2 + " do not match!";
}

/**
 * Params: any two
 * Response: <item1> and <item2> match!
 * Description: Returns a string, saying that items match.
 */
function logMatch(item1, item2) {
  return item1 + " and " + item2 + " match!";
}

let items = ["Truck", "Car", "Bike", "Bike", "Four", "Three"];

for (let i = 0; i < 6; i+=2) {
  if (match(items[i], items[i+1])) {
    console.log(logMatch(items[i], items[i+1]));
  } else {
    console.log(logMismatch(items[i], items[i+1]));
  }
}
