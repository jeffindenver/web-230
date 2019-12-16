/*
============================================
; Title:  shepherd-assignment4.1.js
; Author: Jeff Shepherd
; Date:   16 December 2019
; Modified By:
; Description: Find the errors. The expected
; output is the total tuition due in the
; following format: "Total tuition due is $26000.00"
;===========================================
*/

"use strict";

const header = require('../shepherd-header.js');
console.log(header.display("Jeff", "Shepherd", "Assignment 4.1"));
console.log("");

/**
 * Params: string and number
 * Response: n/a
 * Description: Student object constructor
 */
function Student(name, tuition) {
  this.name = name;
  this.tuition = tuition;
}

/**
 * Params: two numbers
 * Response: sum of two numbers
 * Description: adds two numbers
 */
function sum(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

/**
 * Params: arrays of student names and tuition due
 * Response: an array of student objects
 * Description: adds students to an array and returns it
 */
function initializeStudents(studentNames, tuitionDue) {
  let studentObjArray = [];
  for (let i = 0; i < studentNames.length; i++) {
    studentObjArray.push(new Student(studentNames[i], tuitionDue[i]));
  }
  return studentObjArray;
}

/**
 * Params: an array of student objects
 * Response: total tuition due for this group of students
 * Description: calculates total tuition for all students
 */
function getTotalDue(studentObjArray) {
  let totalDue = 0.0;
  for (let student of studentObjArray) {
    sum(student.tuition);
  }
  return totalDue;
}

let studentNames = ["Dark Helmet", "Lone Star", "Princess Vespa"];
let tuitionDue = [9000.00, 12000.00, 5000.00];

let studentObjArray = initializeStudents(tuitionDue, studentNames);
let grandTotal = getTotalDue(studentObjArray);

for (let student of studentObjArray) {
  console.log("Name: " + student.name + " Amount due: $" + student.tuition.toFixed(2));
}
console.log("Total tuition due is $" + grandTotal.toFixed(2));


