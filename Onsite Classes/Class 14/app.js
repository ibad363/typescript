"use strict";
// in class 14 (30/5/24), enum, const enum, tuples , modules
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = void 0;
//Enum
var Fuel;
(function (Fuel) {
    Fuel[Fuel["Petrol"] = 0] = "Petrol";
    Fuel[Fuel["Diesel"] = 1] = "Diesel";
})(Fuel || (Fuel = {}));
let fuel = Fuel.Diesel;
// console.log(fuel); // output: 1 (shows index no. of diesel)
var Fuel2;
(function (Fuel2) {
    Fuel2["Petrol"] = "Rs 274";
    Fuel2["Diesel"] = "Rs 300";
})(Fuel2 || (Fuel2 = {}));
let fuel2 = Fuel2.Diesel;
let fuel3 = 0 /* Fuel3.Petrol */;
// console.log(fuel3); // Output: 0
let fuel4 = "Rs 300" /* Fuel3.Diesel */;
// console.log(fuel4); // Output: Rs 300
// difference in enum and const enum is:
// enum can be accesed by both indexes and values 
// const enum can only be accesed through values. The TypeScript compiler inlines the values during compilation and does not create an object to allow access by index.
// regular enum
var Fuel4;
(function (Fuel4) {
    Fuel4[Fuel4["Petrol"] = 0] = "Petrol";
    Fuel4[Fuel4["Diesel"] = 1] = "Diesel"; // 1
})(Fuel4 || (Fuel4 = {}));
// Access by value
let fuelByValue = Fuel4.Diesel;
// console.log(fuelByValue); // Output: 1
// Access by index
let fuelByIndex = Fuel4[1];
// Access by value
let fuelByValue2 = 1 /* Fuel5.Diesel */;
// console.log(fuelByValue2); // Output: 1
// Access by index is not possible with const enums
// let fuelByIndex2: string = Fuel5[1]; // This will result in a compile-time error
//Tuples (for sequential data)
let array1 = [
    "TS", 10, true,
];
// console.log(array1);
let studentInfo;
studentInfo = [
    ["Ibad", 10, true],
    ["Rayyan", 11, true],
    // [12,"Usama",true] // it shows error because in 0 index string is allowed & index 1 number is allowed
];
//modules
function sum(num1, num2) {
    return num1 + num2;
}
exports.sum = sum;
//Export keyword export function, type aliases, interface, simple variable
// Destructure the array
// let studentInfo2 : [string,number, boolean]
// studentInfo2 = ["Ibad", 324330, true]
// let [name, rollNo, onsite] = studentInfo2
// console.log("Student name:",name,"," ,"Roll No:",rollNo,",","Onsite:", onsite );
