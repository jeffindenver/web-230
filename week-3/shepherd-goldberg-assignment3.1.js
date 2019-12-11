/*
============================================
; Title:  shepherd-goldberg-assignment3.1.js
; Author: Mike Goldberg
; Date:   10 December 2019
; Modified By: Jeff Shepherd
; Description: Correction to Mike's code.
;===========================================
*/

"use strict";

const header = require("../shepherd-header.js");
console.log(header.display("Jeff", "Shepherd", "Assignment 3.1"));
console.log("\n");

/*
    expected output:
    " Yo, Ho, Yo, Ho, it's the pirates life for me!"
*/

// variable declaration
var yo = " Yo";
var ho = " Ho";

// Alternate printing the words Yo & Ho 2 times, then sing the song on the 5th rotation

function piratesTheme() {
    var song = [];
    for (let i = 0; i < 5; i++){ //JS. Added the missing "+" to the increment operator
        if (isOdd(i)) {
            song.push(ho);
        } else if (isEven(i) && i === 4){
            song.push(" it's the pirate's Life for me!");
        } else {
            song.push(yo);
        }
    }

    console.log(song.join(","))
}

//takes a number and divides it by 2. If the remainder is not 0, the number is odd
function isOdd(number) {
  return number % 2 !== 0;
}

//takes a number and divides it by 2. If the remainder is 0, the number is even
function isEven(number) {
  return number % 2 === 0;
}

// output
piratesTheme(); //JS. Added missing semicolon

//  end program
