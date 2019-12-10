/*
============================================
; Title:  shepherd-washington-assignment3.1.js
; Author: Verlee Washington
; Date:   10 December 2019
; Modified By: Jeff Shepherd
; Description: Correction to Verlee's code.
;===========================================
*/

const header = require("../shepherd-header.js");
console.log(header.display("Jeff", "Shepherd", "Assignment 3.1"));
console.log("\n");

var text = "";
//var i -- moved the variable i into the for loop

for (let i = 0; i < 5; i++) {// changed i+ to i++ because the increment operator is "++"
  text = "The number is " + i;//added a semicolon. removed the appending
  console.log(text);//moved console.log(text) inside the loop
}


