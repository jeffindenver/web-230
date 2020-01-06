/*
============================================
; Title:  shepherd-assignment5.2.js
; Author: Jeff Shepherd
; Date:   6 January 2020
; Modified By:
; Description: create array of string
; and iterate over it using forEach()
;===========================================
*/

"use strict";

const header = require('../shepherd-header.js');
console.log(header.display("Jeff", "Shepherd", "Assignment 5.2"));
console.log("");

const favoriteFoods = ["Oysters", "Shrimp", "Steak", "Tacos", "Sushi"];
favoriteFoods.forEach(item => console.log(item));
