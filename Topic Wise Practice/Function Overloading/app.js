"use strict";
//implementation by unkown type
// function sum(a: unknown,b:unknown): unknown{
//     if(typeof a === "number" && typeof b === "number"){
//         return a+b
//     }else if(typeof a === "string" && typeof b === "string") {
//         return a+b
//     }
// }
//implementation by any type
function sum(a, b) {
    return a + b;
}
// Function implementation
function getInfo(input) {
    if (typeof input === "string") {
        return `This is a string: ${input}`;
    }
    else if (typeof input === "number") {
        return `This is a number: ${input}`;
    }
    else {
        return `Invalid input`;
    }
}
function makeDate(mOrTimestamp, d, y) {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    }
    else {
        return new Date(mOrTimestamp);
    }
}
const d1 = makeDate(12345678);
// console.log(d1);
const d2 = makeDate(10, 5, 5);
function len(x) {
    return x.length;
}
// console.log(len("Hi"));      
// console.log(len([1,2,3,4,5]));
