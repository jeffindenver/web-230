/*============================================;
; Title: Assignment 1.1
; Author: Mike Goldberg 
; Date: 11/26/2019
; Modified By: Jeff Shepherd
; Description: This snippet contains errors 
; to be audited by other students
===========================================*/

/* 

Expected Output
Mike's current mood

*/


// variable declarations
var firstName = "Mike";

var timeOfDay = new Date().getHours();//changed to assignment operator "=" from 
//the identity operator "===". Second error could be that the hour never changes 
//and so the result will always be the same. Solution to the second error is to 
//the get the hour of the current day.

var canDrinkAlcohol = (timeOfDay >= 17); //JS uses a 24 hour clock and 5:00 AM seems 
//a bit early for a drink. I changed it to 5:00 PM or 17:00.

var result = canDrinkAlcohol ? `${firstName} is in a good mood!` : `${firstName} is so crabby`;
//Third error was that "canDrinkAlcohol" is a string literal which is distinct from the variable
//canDrinkAlcohol. Additionally, a string literal tested for truthiness will resolve to TRUE if
//the string is not empty, so the second result was unreachable. 
//("" would result in FALSE. " " would result in TRUE)

// output
console.log(result);