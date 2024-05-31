"use strict";
// in class 13, Type union, Intersection types, for loop, while loop, for of loop, enums
// Array multiple types
// Array of Booleans
// let myArray : boolean[]= [true,false,true]
// Array with Union Types
// let myArray : (boolean|string|number)[]= [true,false,10,12,"ibad"]
// Nested Array with Union Types
// let myArray : (boolean|string|number)[][]= [
//     ["ibad","ibad2",10,true],
//     [10,"Ibad3"],
//     ["Ibad4"]
// ]
// Another(but organized) Nested Array with Union Types
let myArray = [
    [true, false, true],
    ["ibad", "ibad2", "ibad3"],
];
const personEmployee = {
    name: "Ibad",
    employeeID: 152
};
// console.log(personEmployee);
// union types ( | )
let value;
value = "Ibad"; // OK
// console.log(value); // Output: "Ibad"
value = 152; // OK
// console.log(value); // Output: 152
// value = true; // Error: Type 'boolean' is not assignable to type 'string | number'
// Loop (for loop)
// for (let i = 11; i <= 25; i++){
//     console.log(i);
// }
// working properly by i=i+5
// for (let i = 10; i <= 25; i=i+5){
//     console.log(i);
// }
//infinite loop (by i+5)
// for (let i = 10; i <= 25; i+5){
//     console.log(i);
// }
// // countdown (minus) 5 to 1
// for (let i = 5; i>=1 ; i--){
//     console.log(i);
// }
// while loop
// 1. outside loop variable declare (starting point)
// 2. within round bracket ending point
// 3. inside curly bracket, step to reach ending point
// difference btw for and while loop: in While loop , ending point true se unlimited iteration hoti he
// let a = 1 // starting point
// while(a<=10){
//     console.log(a);
//     a++
// }
// .length method
let persons = ["babar", "shaheen", "imad", "rizwan"];
// for (let i= 0; i < persons.length;i++){
//     // console.log(i);// output. 0,1,2,3 (means it shows index)
//     console.log(persons[i]);
// }
// for of loop
// for (let player of persons){
//     console.log(player.toUpperCase());
// }
// enums
var Direction;
(function (Direction) {
    Direction["North"] = "North";
    Direction["South"] = "South";
    Direction["East"] = "East";
    Direction["West"] = "West";
})(Direction || (Direction = {}));
const compass = Direction.West;
const compass2 = Direction.North;
// console.log(compass);
// console.log(compass2)
var TimeSlot;
(function (TimeSlot) {
    TimeSlot["Morning"] = "Morning";
    TimeSlot["Afternoon"] = "Afternoon";
    TimeSlot["Evening"] = "Evening";
    TimeSlot["Night"] = "Night";
})(TimeSlot || (TimeSlot = {}));
const compass3 = TimeSlot.Morning;
console.log(compass3);
