/*
============================================
; Title:  shepherd-assignment6.4
; Author: Jeff Shepherd
; Date:   01/13/2020
; Modified by:
; Description: Create nested object literals
; and display the results
;===========================================
*/

"use strict";

const header = require("../shepherd-header.js");
console.log(header.display("Jeff", "Shepherd", "Assignment 6.4"));
console.log("");

const ticket = {
  id: 101,
  name: "Help Desk Support",
  dateCreated: new Date(),
  priority: "normal",
  person: {
    firstName: "James",
    lastName: "Kirk",
    jobTitle: "Captain"
  }
}

console.log(`Ticket ${ticket.id} was created on ${ticket.dateCreated.toLocaleDateString()} and assigned to employee ${ticket.person.firstName} ${ticket.person.lastName} (${ticket.person.jobTitle}).`);
