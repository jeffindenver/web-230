/*
============================================
; Title:  shepherd-assignment6.2
; Author: Jeff Shepherd
; Date:   01/13/2020
; Modified by:
; Description: a program using object
; properties with at least 2 errors.
; This is the working code.
;===========================================
*/

/*
 * expected output:
 * John Williams
 * Date of Birth: 2/8/1932
*/

let person = {
    name: "John Williams",
    dob: new Date(1932, 1, 8),

    get name() {
        return this.name;
    },

    get dob() {
        return this.dob;
    }
};

console.log(person.name);
console.log("Date of Birth: " + person.dob);
