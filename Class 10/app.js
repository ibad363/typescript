"use strict";
// in class 10, revision of return and log difference, arrow function, global scope and local/block scope
// let sum = (num1: number, num2: number):number =>{
//     return num1+num2
// }
// console.log(sum(10,10));
let org = "Army & Rangers";
let callPolice1 = () => {
    let policest1 = "Malir";
    console.log(policest1);
    console.log(org);
};
callPolice1();
let callPolice2 = () => {
    let policest2 = "Saddar";
    console.log(policest2);
    // console.log(/policest1); // shows error
};
callPolice2();
