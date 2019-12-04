/*
============================================
; Title:  shepherd-assignment2.4.js
; Author: Professor Krasso
; Date:   3 December 2019
; Modified By: Jeff Shepherd
; Description: Several functions to demonstrate
; understanding of how to create them with
; and without parameters.
;===========================================
*/

const header = require('../shepherd-header.js');
console.log(header.display("Jeff", "Shepherd", "Assignment 2.4"));

/**
 * Params: firstName, lastName
 * Response: full name
 * Description: Returns first and last name concatenated
 */
function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

/**
 * Params: year, month, day
 * Response: date object
 * Description: Returns a date object corresponding to the args
 */
function dateWriter(year, month, day) {
  return new Date(year, month, day);
}

/**
 * Params: number, numOfFixedPositions
 * Response: number with the precision specified
 * Description: Returns number with the numOfFixedPositions
 * precision
 */
function formatNumber(number, numOfFixedPositions) {
  return number.toFixed(numOfFixedPositions);
}

/**
 * Params: number as a string
 * Response: an integer
 * Description: Returns an integer
 */
function convertToInt(number) {
  return parseInt(number);
}

/**
 * Params: number
 * Response: full name
 * Description: Returns a floating point number
 */
function convertToFloat(number) {
  return parseFloat(number);
}

/**
 * Hello my name is <your actual name goes here>!
 * Today's date is <today's date> and the current temperature is <33.6 - use the formatNumber function> degrees.
 * I am <your actual age - parsed int value> years old and my savings account goal is <your actual goal -parsed float value> dollars.
 */
let output = "";
output = output.concat("\nHello my name is ", fullName("Jeff", "Shepherd"), "!\n",
  "Today's date is ", dateWriter(2019, 12, 3).toDateString(), " and the current temperature is ",
  formatNumber(40.0, 1).toString(), " degrees.\n", "I am ", convertToInt("48").toString(),
  " years old and my savings account goal is $", convertToFloat("10000000.50").toFixed(2), " dollars.");

console.log(output);
