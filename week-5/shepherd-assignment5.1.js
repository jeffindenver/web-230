/*
============================================
; Title:  shepherd-assignment5.1.js
; Author: Jeff Shepherd
; Date:   6 January 2020
; Modified By:
; Description: Use an object collection with
; at least 2 errors
;===========================================
*/

/*
Expected output:
--List of Names--
Chewbacca
Obi-Wan Kenobi
Admiral Akbar
Wedge Antilles

--List of key / value pairs--
Key: Chewbacca    	Value: true
Key: Obi-Wan Kenobi    	Value: true
Key: Admiral Akbar    	Value: true
Key: Wedge Antilles    	Value: false

------------- Report -------------
Chewbacca is enrolled in classes.
Obi-Wan Kenobi is enrolled in classes.
Admiral Akbar is enrolled in classes.
Wedge Antilles is too cool for school.
*/

"use strict";

const header = require('../shepherd-header.js');
console.log(header.display("Jeff", "Shepherd", "Assignment 5.1"));
console.log("");

start();

/**
 * Params: none
 * Response: executes a list of instructions
 * Description: driver of the program
 */
function start() {
  let names = ["Chewbacca", "Obi-Wan Kenobi", "Admiral Akbar", "Wedge Antilles"];
  let students = initializeStudents(names);
  let enrollmentStatus = [true, true, true, false];
  let enrollmentMap = createMap(students, enrollmentStatus);

  print(names, "--List of Names--");
  print(enrollmentMap, "--List of key / value pairs--");
  report(enrollmentMap);
}


/**
 * Params: string
 * Response: an array of student objects
 * Description: Student Constructor
 */
function Student(name) {
  this.name = name;
}

/**
 * Params: an array of string
 * Response: an array of student objects
 * Description: creates an array of Students
 */
function initializeStudents(anArray) {
  let students = [];
  anArray.forEach(element => {
    students.push(new Student(element));
  });
  return students;
}

/**
 * Params: two arrays, keys and values
 * Response: a map
 * Description: returns a map containing names (key)
 * and their true/false enrollment status (value)
 */
function createMap(keys, values) {
  let aWeakMap = new WeakMap();
  for (let i = 0; i < keys.length; i++) {
    aWeakMap.set(keys[i], values[i]);
  }
  return aWeakMap;
}

/**
 * Params: an iterable or array-like object,
 * and a string 'headline'
 * Response: console output
 * Description: displays a headline and the elements
 * of an array or other iterable in the console.
 */
function print(anIterable, headline) {
  console.log(headline);
  if (anIterable instanceof WeakMap) {
    const entries = anIterable.entries();
    for (const item of entries) {
      console.log("Key: " + item[0].name +
      "    \tValue: " + item[1]);
    }
  } else {
    for (const item of anIterable) {
      console.log(item.toString());
    }
  }
  console.log("");
}

/**
 * Params: a map
 * Response: console output
 * Description: logs a report of student
 * enrollment status.
 */
function report(aMap) {
  console.log("------------- Report -------------");
  aMap.forEach(console.log(logEnrollmentStatus));
}

/**
 * Params: value, key
 * Response: a string
 * Description: returns different string messages
 * depending on value of "value" arg.
 */
function logEnrollmentStatus(value, key) {
  let message = "";
  if (value === true) {
    message = key + " is enrolled in classes.";
  } else {
    message = key + " is too cool for school.";
  }
  return message;
}
