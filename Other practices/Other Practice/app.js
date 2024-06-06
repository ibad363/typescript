"use strict";
//function with default parameter
function greet(message = "Hello Dear") {
    return message;
}
let result = greet("hello bhai");
// console.log(result)
function greet2(message = "Hello Bro") {
    return message;
}
let result2 = greet2();
// console.log(result2); //output hello bro
// arrow function
// syntax of arrow function : let functionName = (parameters) => { code }
let greet3 = (message = "Hello Dear") => { return message; };
// console.log(greet3()); // Hello Dear
// console.log(greet3("Hello Ibad")); // Hello Ibad
// let greet4 = () : string => {
//     console.log("Hello World"); // shows error because type string ki waja se string return karwana zaroori he
//     return "World" // now okay
// }
// console.log(greet4());
let addition = (num1, num2) => {
    return num1 + num2;
};
let addResult = addition(10, 10);
// console.log(addResult)
// another way (without curly bracket)
let addition2 = (num1, num2) => num1 + num2;
let addResult2 = addition(10, 10);
// console.log(addResult2)
// conditional ternary if else (short method)practice
let number = 6;
number > 5
    ?
        console.log(`The ${number} is greater Than given Number`) : console.log("Not Greater than");
