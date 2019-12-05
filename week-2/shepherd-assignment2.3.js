/*
============================================
; Title:  shepherd-assignment2.3.js
; Author: Professor Krasso
; Date:   3 December 2019
; Modified By: Jeff Shepherd
; Description: demonstrate a 0 parameter function.
;===========================================
*/

const header = require('../shepherd-header.js');
console.log(header.display("Jeff", "Shepherd", "Assignment 2.3"));

function myName() {
  return myName.jeff;
};

myName.jeff = "Jeff Shepherd";

console.log("");
console.log("Hello " + myName.jeff + "!");
