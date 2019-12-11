/*
============================================
; Title:  shepherd-assignment3.2.js
; Author: Professor Krasso
; Date:   9 December 2019
; Modified By: Jeff Shepherd
; Description: Write pattern matching
; functions.
;===========================================
*/

"use strict";

/*
  Expected output:

  FirstName LastName
  Exercise 3.3
  Today's Date

  // Expected output
  The enter key was pressed
*/
const header = require('../shepherd-header.js');
console.log(header.display("Jeff", "Shepherd", "Assignment 3.3"));
console.log("");

let eventKeyCode = 13

switch (eventKeyCode) {
  case 8:
    console.log('The backspace / delete key was pressed.')
    break;
  case 13:
    console.log('The enter key was pressed.')
    break;
  case 16:
    console.log('The shift key was pressed.')
    break;
  case 32:
    console.log('The spacebar key was pressed.')
    break;
  default:
    console.log('Unrecognized key.');
}
