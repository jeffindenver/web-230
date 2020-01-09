/*
============================================
; Title: Discussion 5.1 Advanced Arrays
; Author: Kimberly Pierce
; Date:   7 January 2020
; Modified By: Jeff Shepherd
; Description: Keyed Collection Arrays with Errors
;===========================================
*/


var myMap = new Map();//create new map
//JS added the "new" keyword

//set key value pairs
myMap.set ('bigDog', 'Swidgen');

myMap.set ('littleDog', 'Molly'); //JS separated the pair with a comma

myMap.set ('blackCat', 'Wee');

myMap.set ('otherCat', 'Miss Kitty');

//call value of one pair
console.log(myMap.get('bigDog'));
