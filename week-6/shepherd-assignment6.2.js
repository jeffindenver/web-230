/*
============================================
; Title:  shepherd-assignment6.2
; Author: Jeff Shepherd
; Date:   01/13/2020
; Modified by:
; Description: Using a try, catch, and
; finally block, catch and display an error
;===========================================
*/

"use strict";

const header = require("../shepherd-header.js");
console.log(header.display("Jeff", "Shepherd", "Assignment 6.2"));
console.log("");

/**
 * Params: none
 * Response: logs the user selected month
 * Description: simulates asking a user to
 * enter a numeric month. Throws an error
 * if the number is not within 1 to 12.
 */
try {
  const index = getUserInput();
  if (index < 1 || index > 12) {
    throw "Valid months are 1 to 12."
  }
  console.log("The selected month is " + months[index]);

} catch (err) {
  console.log("Catch clause: " + err);

} finally {
  console.log("Finally clause reached ...");
}

const months = ["January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];

/**
 * Params: none
 * Response: returns an integer
 * Description: simulates user input
 */
function getUserInput() {
  return 13;
}
