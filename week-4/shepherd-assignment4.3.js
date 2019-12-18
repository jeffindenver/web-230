/*
============================================
; Title:  shepherd-assignment4.3.js
; Author: Professor Krasso
; Date:   16 December 2019
; Modified By: Jeff Shepherd
; Description: Create and use an array
;===========================================
*/

"use strict";

const header = require('../shepherd-header.js');
console.log(header.display("Jeff", "Shepherd", "Assignment 4.3"));
console.log("");

let vehicles = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"];

/**
 * Params: a string array and string value
 * Response: output to the console
 * Description: console log the elements of a string array
 */
function getValue(stringArray, stringValue) {
  for (let value of stringArray) {
    if (value === stringValue) {
      console.log("");
      console.log("-- SELECTED VALUE --");
      console.log(value);
    }
  }
}

console.log("-- DISPLAYING ARRAY ITEMS --");
for (let item of vehicles) {
  console.log(item);
}

getValue(vehicles, "Motorcycle");
getValue(vehicles, "Bus");
