/*
============================================
; Title:  shepherd-assignment6.1
; Author: Jeff Shepherd
; Date:   01/13/2020
; Modified by:
; Description: a program using object
; properties with at least 2 errors.
; This is the working code.
;===========================================
*/

"use strict";

const header = require("../shepherd-header.js");
console.log(header.display("Jeff", "Shepherd", "Assignment 6.1"));
console.log("");
/*
 * expected output:
 * John Williams
 * Date of Birth: 2/8/1932
*/

let person = {
  name: "John Williams",
  dateOfBirth: new Date(1932, 1, 8),

  get fullName() {
      return this.name;
  },

  get dob() {
      return this.dateOfBirth;
  }
};

console.log(person.fullName);
console.log("Date of Birth: " + person.dob.toLocaleDateString());
