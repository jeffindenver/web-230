/*
============================================
; Title:  Explanation5.4.js
; Author: Jeff Shepherd
; Date:   12 January 2020
; Modified By:
; Description: Explanation of the map
; function and solving assignment 5.4
;===========================================
*/

"use strict";

let composers = initializeComposers();

//same as the statement that follows but without so many comments
var lastNames = composers.map(function (composer) {
  return composer.lastName;
});

/**
 * Params: none
 * Response: an array of string
 * Description: line by line explanation
 * of the map function.
 */
var lastNames2 = composers.map(
  /*
    the map function loops through the array on which it was called,
    which in this case is composers. Then it returns a brand new array when finished,
    which in this case is 'lastNames'.*/

  function (composer)
  /*We tell the map function what to do by passing it a
   function. Here we pass an anonymous / nameless function. The function we pass
   to it should return a single element, which can be a primitive value like
   string, number, boolean, and undefined. We could also pass a single Object
   like a Composer.
   */
  {
    return composer.lastName;
    /*This is the body of the anonymous function, where
       we put our instructions. Here we tell javascript to return a single string
       stored as the composer's last name.
        */
  });

var lastNamesAndGenreObjectArray = composers.map(function (composer) {
  let targetObject = {} //The curly braces make this an object literal. In this case it is empty.
  targetObject.lastName = composer.lastName;
  /*adds a new property to 'targetObject' and
     assigns it the value of composer.lastName*/
  targetObject.genre = composer.genre;
  /*adds a new property to 'targetObject' and
     assigns it the value of composer.genre*/
  return targetObject;
  /*return the targetObject, which the map function will insert into
     the array that it will eventually return*/
});

console.log(lastNames2);
console.log("");
//with arrow notation
lastNamesAndGenreObjectArray.forEach(composer => console.log(
  "Genre: " + composer.genre + "\n" +
  "Composer: " + composer.lastName + "\n"));

//without arrow notation
lastNamesAndGenreObjectArray.forEach(function(composer) {
  console.log("Genre: " + composer.genre + "\n" +
  "Composer: " + composer.lastName + "\n");
});

/**
 * Params: none
 * Response: returns an array of objects
 * Description: sets the properties of
 * several Composer objects.
 */
function initializeComposers() {
  return [{
      firstName: "Ludwig",
      lastName: "Beethoven",
      genre: "Classical",
      rating: 8
    },

    {
      firstName: "Wolfgang",
      lastName: "Mozart",
      genre: "Classical",
      rating: 10
    },

    {
      firstName: "Johann",
      lastName: "Bach",
      genre: "Classical",
      rating: 9
    },

    {
      firstName: "Joseph",
      lastName: "Haydn",
      genre: "Classical",
      rating: 6
    },

    {
      firstName: "Franz",
      lastName: "Schubert",
      genre: "Classical",
      rating: 5
    }
  ];
}
