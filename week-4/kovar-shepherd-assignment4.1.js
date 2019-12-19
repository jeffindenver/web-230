/*
============================================
; Title: Discussion 4.1
; Author: Sarah Kovar
; Date: 18 December 2019
; Modified by: Jeff Shepherd
; Description: This program utilizes an array
; that contains two errors.
;===========================================
*/

// Require statement that imports the header.js file from my root directory
const header = require('../shepherd-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('Sarah', 'Kovar', 'Exercise 4.1'));
console.log("");

//declare array
const artistArray = ["Johnny Cash", "Dolly Parton", "Miranda Lambert", "P!nk", "Good Charlotte"]; //Error 1 was an "unexpected token" of a semicolon after Miranda Lambert.

//iterate over array, displaying each artist and rank. Parameters: array. Output string.
function rankArtists(array) {
  for (i = array.length - 1; i >= 0; i--) { //Error 2 is a pair of unexpected tokens of a curly braces, which I changed to parens.
    console.log(i + 1 + "\t" + array[i]);
  }
}

//display list title
console.log("My Top 5 Musical Artists");

//display list by calling rankArtists function
rankArtists(artistArray);
