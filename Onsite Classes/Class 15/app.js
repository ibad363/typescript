"use strict";
// Class 15 (6/6/24) , Optional parameters, Rest parameters, Explicit casting , Stuctural typing  (object ki type): object properties and data type, Fresh object, Stale object, Synchronous, What is api, Asynchronous Call stack Callback queue , Higher order function, Callback function syntax
//optional parameter
function add(a, b) {
    return a + (b !== null && b !== void 0 ? b : 0);
}
// console.log(add(10)); // output: 10
function add2(a, b, c) {
    return a + b + (c !== null && c !== void 0 ? c : 0);
}
// console.log(add2(10, 10)); // output: 20
// console.log(add2(10,10,10)); // output: 30
function greet(name, greeting) {
    if (greeting) {
        console.log(`${greeting}, ${name}`);
    }
    else {
        console.log(`Hello, ${name}`);
    }
}
// greet("Ibad","Good Evening") // output: Good Evening, Ibad
// greet("Ibad") // output: Hello, Ibad
let output;
// output = greet("Ibad")
// console.log(output); // // output: undefined
//rest parameter
function concatenate(separator, ...otherString) {
    return otherString.join(separator);
}
let ball = {
    diameter: 15,
};
let sphere = {
    diameter: 20,
};
let tube = {
    diameter: 25,
    length: 26
};
ball = tube; //ok
console.log(ball); // output: { diameter: 25, length: 26 }
// tube = ball
