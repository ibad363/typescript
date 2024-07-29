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
let greet3 = (message = "Hello Dear") => {
    return message;
};
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
// // conditional ternary if else (short method)practice
// let number = 6
// number>5
// ?
// console.log(`The ${number} is greater Than given Number`) : console.log("Not Greater than");
// //promise
// let promise = new Promise(function (resolve, rejected){
//     resolve(10)
// })
// console.log(promise);
// // title case practice
// let sentence : string = "I am leaRnIng typesRipt"
// let splitWords :string[] = sentence.split(" ")
// let titleCase : string = ""
// for(let i = 0; i < splitWords.length; i++){
//     titleCase += splitWords[i].charAt(0).toUpperCase() + splitWords[i].slice(1,20).toLowerCase() + " "
// }
// console.log(titleCase);
// //callback function practice
// function myFunction (cb : ()=> void){
//     console.log("text 1");
//     cb()
// }
// function FunctionTwo (){
//     console.log("text 2");
// }
// myFunction(FunctionTwo)
// function myCallback (text : string){
//     console.log("inside myCallBack Function",text);
// }
// function callingFunction (text2 :string, cb : (text :string) => void){
//     cb(text2)
// }
// callingFunction("Ibad", myCallback)
function hello(cb, secondName) {
    cb(secondName);
}
let callBackFunction = (name) => {
    console.log(`Hello ${name}`);
};
hello(callBackFunction, "Ibad");
hello(callBackFunction, "Rayyan");
