"use strict";
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let magicians = ["Magician 1", "Magician 2", "Magician 3", "Magician 4"];
// function to show names of magicians
function show_magicians(magician) {
    magician.forEach(magician => {
        console.log(`${magician}`);
    });
}
// function for add the great to all magicians
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = "The Great " + magicianArray[i];
    }
    return magicianArray;
}
console.log("\nThis is Original Array");
console.log(magicians);
//copy array
let copyArray = [...magicians];
let great = make_great(copyArray); //add the great to copy array
console.log("\nThis is modified Array");
console.log(great); // show copied & modified array
