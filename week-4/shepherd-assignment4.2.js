/*
============================================
; Title:  shepherd-assignment4.2.js
; Author: Professor Krasso
; Date:   16 December 2019
; Modified By: Jeff Shepherd
; Description: Create and use an array
;===========================================
*/

"use strict";

const header = require('../shepherd-header.js');
console.log(header.display("Jeff", "Shepherd", "Assignment 4.2"));
console.log("");

let fruits = ["Apple", "Orange", "Banana", "Mango", "Pear"];

/**
 * Params: a string array
 * Response: output to the console
 * Description: console log the elements of a string array
 */
function getFruit(items) {
  for (let item of items) {
    console.log(item);
  }
}

getFruit(fruits);
