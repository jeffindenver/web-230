/*
============================================
; Title: Assignment 1.5
; Author: Jeff Shepherd
; Date: 11/25/2019
; Description: Three employee records with 
; first and last names, addresses, pay rates,
; and hire dates.
;===========================================
*/

function Employee(fname, lname, address, payRate,
    hireDate) {
    this.fname = fname;
    this.lname = lname;
    this.address = address;
    this.payRate = payRate;
    this.hireDate = new Date(parseDate(hireDate));
}

function parseDate(aDate) {
    //Date should be formatted as "year month day" with zero-based month
    theDate = aDate.split(" ", 3);
    return (theDate[0] + "," + theDate[1] + "," + theDate[2]);
}

Employee.prototype.toString = function () {
    var newline = "\n";
    var output = "Name: ".concat(this.fname, " ", this.lname, newline,
        "Address: ", this.address, newline, "Pay rate: $", this.payRate.toFixed(1), newline,
        "Hire Date: ", this.hireDate.toDateString());
    return output;
}

var jShepherd = new Employee("Jeff", "Shepherd", "3000 Farnam St", 20.0, "2015 1 9");
var lJohn = new Employee("Linda", "John", "1900 Main St", 16.0, "2009 2 10");
var mHamill = new Employee("Mark", "Hamill", "200 Rodeo Dr", 100.0, "2015 10 11");

console.log(jShepherd.toString());
console.log(lJohn.toString());
console.log(mHamill.toString());