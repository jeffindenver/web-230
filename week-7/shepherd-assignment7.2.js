/*
============================================
; Title:  shepherd-assignment7.2
; Author: Jeff Shepherd
; Date:   01/21/2020
; Modified by:
; Description: a program using object
; properties with at least 2 errors.
; This is the working code.
;===========================================
*/

"use strict";

const header = require("../shepherd-header.js");
console.log(header.display("Jeff", "Shepherd", "Assignment 7.2"));
console.log("");

const employees = initializeEmployees();
employees.forEach(item => console.log(
  `${item.id} ${item.firstName} ${item.lastName} ${item.title}`));

/**
 * Params: number, string, string, string
 * Response: returns an Employee object
 * Description: Employee constructor.
 */
function Employee(id, firstName, lastName, title) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
}

/**
 * Params: none
 * Response: returns an array of Employee objects
 * Description: Employee data
 */
function initializeEmployees() {
    const ids = [1, 2, 3, 4 , 5];
    const firstNames = ["Alan", "Bertha", "Carl", "Denise", "Edward"];
    const lastNames = ["Benson", "Cartwright", "Decker", "Franklin", "Harrison"];
    const titles = ["President", "Vice President", "CFO", "CTO", "Operations Director"];

    const employees =[];
    for (let i = 0; i < 5; i++) {
      employees.push(Object.freeze(new Employee(ids[i], firstNames[i], lastNames[i], titles[i])));
    }
    return employees;
}
