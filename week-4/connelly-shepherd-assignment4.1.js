/*
============================================
; Title:  week 4: Discussion 4.1
; Authors: Micah Connelly
; Date:   15 December 2019
; Modified By: Jeff Shepherd
; Description: Creating a simple javascript loop with twp (2) errors
;===========================================
*/

/*
; Expected output:
; A fibonacci sequence will be output 0-21
; Storm troopers are, in fact, a bad shot
*/

"use strict";

// import
const header = require('../shepherd-header.js');//first error is an incorrect path to the header file
console.log(header.display("Micah", "Connelly", "Discussion 4.1 - Header"));
console.log("");

// variables
var f = [0, 1, 1, 2, 3, 5, 8, 13, 21];
var aStormTrooper = new StormTrooper(); //The second error is that aStormTrooper was not defined and was missing a semicolon.
//Solution to the second error is to create an object prototype for StormTroopers

/**
 * Params: none
 * Response: a StormTrooper object
 * Description: StormTroopers have poor aim
 */
function StormTrooper() {
  this.hasPoorAim = true;
}

//var poorAim = 'a bad shot';
//The third error is that poorAim is not a boolean value, although a non-empty string is 'truthy' in JavaScript.
//I added a 'hasPoorAim' property to StormTrooper that is true.

// if statement, loop through array
if (aStormTrooper.hasPoorAim) {
    console.log('This is a fibonacci sequence:');
    for (var i = 0; i < f.length; i++) {
        console.log(f[i]);
    }
    console.log('Storm troopers are, in fact, a bad shot');
} else {
    console.log('The empire did nothing wrong, rebel scum!');
}

//end program
