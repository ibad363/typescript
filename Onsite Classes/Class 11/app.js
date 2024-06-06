"use strict";
// in class 11, array, array methods and object
let fruits = ["apple", "banana", "mango", "pineapple"];
// fruits.pop() // remove from end
// fruits.shift() // remove from start
// fruits.push("Orange") //add in end
// // fruits.unshift("Papita") //add in start
// slice starts inclusive and end exclusive (means, slice first parameter include karta he jese 1 he to 1st index include lekin second/last parameter include nh karta jese 3 he to 2nd index tak include kare ga 3rd index include nh kare ga)
let extract = fruits.slice(1, 3); //extracts from original array
// console.log(extract);
// fruits.splice(1,1,"Cheeku") //add element by index number and also delete element if you want
// console.log(fruits);
let student = {
    name: "Ibad",
    rollno: 324330,
    Timing: "7 to 10"
};
// console.log(student);
// console.log(student.name);
let student2 = [
    { name: "Ibad",
        rollno: 21541616,
        Timing: "7 to 10"
    },
    {
        name: "Rayyan",
        rollNo: 4103315,
        Timing: "7 to 10"
    }
];
// conditional ternary if else (short method)practice
// syntax: condition ? true code : false code
// ? = it means if condition is true
// : = it means if condition false
let number = 6;
// number>5 ? console.log(`The ${number} is greater Than given Number`) : console.log("Not Greater than");
// another writing style
number > 5
    ?
        console.log(`The ${number} is greater Than given Number`)
    :
        console.log("Not Greater than");
