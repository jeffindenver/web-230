/*
============================================
; Title:  shepherd-assignment6.3
; Author: Jeff Shepherd
; Date:   01/13/2020
; Modified by:
; Description: Create object literal for
; tracking tickets. Display all the fields
; in a single string.
;===========================================
*/

"use strict";

const header = require("../shepherd-header.js");
console.log(header.display("Jeff", "Shepherd", "Assignment 6.3"));
console.log("");

const ticket = {
  id: 101,
  name: "Help Desk Support",
  requester: "James Kirk"
}

//I used template literals because console.log(ticket) did not match the required output exactly.
console.log(`{id: ${ticket.id}, name: ${ticket.name}, requester: ${ticket.requester} }`);
