/*
============================================
; Title: blohn-discussion-5.1.js
; Author: Janet Blohn
; Date: 07 January 2020
; Modified By: Jeff Shepherd
; Description: Discussion 5.1 - Keyed Collection Arrays
; Keyed Collection Array program with at least two errors
; that won't execute.
; It should display a question asking what the capital of a
; specific state is, and also a reply with the correct city.
;===========================================
*/

/* This is the expected output:
What is the capital of NE?
Lincoln is the capital of NE.

What is the capital of IA?
Des Moines is the capital of IA.

What is the capital of ND?
Bismarck is the capital of ND.

What is the capital of GA?
Atlanta is the capital of GA.

What is the capital of RI?
Providence is the capital of RI.
*/

// Import blohn-header.js file
const header = require('../shepherd-header.js');

// Print the Header
console.log(header.display("Janet", "Blohn", "Discussion 5.1"));
console.log("");

// Create Map
var capitals = new Map();

// This can also be done with a simple console.log...adding for complexity
function printCapital(value) {
  console.log(value + " is the capital of " + key + ".\n"); //JS replaced 'values' with 'value'
}

// Add cities and states
capitals.set("NE", "Lincoln");
capitals.set("IA", "Des Moines");
capitals.set("ND", "Bismarck");
capitals.set("GA", "Atlanta"); //JS replaced 'capitals,set(...) with capitals.set(...)
capitals.set("RI", "Providence");

for (var [key, value] of capitals) {
  console.log("What is the capital of " + key + "?"); // Ask what the capital is
  printCapital(value); // Go get the capital's name and reply with it
};
