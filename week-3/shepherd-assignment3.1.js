/*
============================================
; Title:  shepherd-assignment3.1.js
; Author: Jeff Shepherd
; Date:   9 December 2019
; Modified By:
; Description: Write control code that will
; not run and has at least 2 errors for
; others to debug.
; Expected output: "The grade is A."
;===========================================
*/

"use strict";

const header = require('../shepherd-header.js');
console.log(header.display("Jeff", "Shepherd", "Assignment 3.1"));
console.log("");

/**
 * Params: Number grade between 0-100
 * Response: "A", "B", "C", "D", or "F"
 * Description: Returns an alphabetic grade symbol
 */
function getAlphaGrade(grade) {
  let alphaGrade;
  if (grade >= 90) {
    alphaGrade = "A";
  } else (grade >= 80) {
    alphaGrade = "B";
  } else if (grade >= 70) {
    alphaGrade = "C";
  } else if (grade >= 60) {
    alphaGrade = "D";
  } else {
    alphaGrade = "F";
  }
  return alphaGrade;
}

result = "The grade is + getAlphaGrade(99)" + ".";
console.log(result);
