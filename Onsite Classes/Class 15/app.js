"use strict";
// Class 15 (6/6/24) , Optional parameters, Rest parameters, Explicit casting, Stuctural typing, define API, Synchronous, Asynchronous
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
ball = tube; //ok, ye valid hai kyunke tube mein ball ke sari properties hain.
let hasBoth = {
    firstName: "Ali",
    lastName: "Khan"
};
hasBoth = {
    firstName: "Kashif",
    lastName: "Khan"
};
let hasThree = {
    firstName: "Ibad",
    middleName: "Ur",
    lastName: "Rehman"
};
hasBoth = hasThree;
// hasThree = hasBoth //error
// fresh aur stale object (sir zia code)
//Case when "FRESH" object literal is assigned to a variable 
let myType = { name: "Zia", id: 1 };
//Case 1
myType = { id: 2, name: "Tom" };
// Explanation: Only properties matching the contextual type are allowed.
//Case 2a
// myType = { id: 2,  name_person: "Tom" };
// Explanation: Error due to a renamed or missing property.
//Case 2b 
// Explanation: A type with an index signature allows additional properties with any string name and any value type.
var x;
x = { id: 1, fullname: "Zia" }; // Ok, `fullname` matched by index signature
//Case 3
// myType = { id: 2,  name: "Tom", age: 22 }; //My Explanation: stale(purane) object men fresh object banate waqt extra property allowed nh he.
// Explanation: Error due to an excess property.
//=================================================
//Case when STALE object literal is assigned to a variable 
let myType2 = { id: 2, name: "Tom" };
//Case 1
myType = myType2;
// Explanation: Only properties matching the contextual type are allowed, same rule for fresh and stale objects.
let myType3 = { id: 2, name_person: "Tom" };
//Case 2a
// myType = myType3;
// Explanation: Error due to a renamed or missing property, same rule for stale and fresh objects.
//Case 2b
// Explanation: A type can include an index signature to explicitly indicate that excess properties are permitted in fresh objects.
var x;
var y = { id: 1, fullname: "Zia" };
x = y; // Ok, `fullname` matched by index signature
var myType4 = { id: 2, name: "Tom", age: 22 };
//Case 3
myType = myType4;
// Explanation: Ok, excess property allowed in case of a stale object which is different from a fresh object.
// My Explanation: jese pehle case 3 men stale(purane) object men fresh object banate waqt extra property allowed nh he. lekin agr extra property wala object pehle se bana ho aur ap ab assign karen to ab allowed he
// define API
// API, ya Application Programming Interface, do software systems ke darmiyan communication ko hosla afzai karta hai.
// Ye aksar data exchange aur functionality sharing ke liye istemal hota hai, jaise ek application dosri se data mangna ya bhejna.
// API, ek bridge ki tarah kaam karta hai jo ek software ke functions aur features ko dusre software se accessible banata hai.
//Synchronous, Asynchronous, Call stack Callback queue , Higher order function, Callback function syntax
// Synchronous programming mein code line-by-line execute hota hai. Har ek operation ke baad agli line execute hoti hai.
function syncExample() {
    console.log("Start");
    // This line will wait for the console.log to finish
    console.log("This is synchronous");
    console.log("End");
}
// syncExample();
//Asynchronous programming mein kuch operations background mein chalte hain aur code apni execution continue rakhta hai. Aam tor par, asynchronous code promises ya async/await ke zariye likha jata hai.
function asyncExample() {
    console.log("Start");
    setTimeout(() => {
        console.log("This is asynchronous");
    }, 2000); // Wait for 2 seconds before executing this
    console.log("End");
}
// asyncExample(); 
// let a = 1
// let b = 2
// setTimeout(() => {
//   console.log(a); // output: beacuse a value is change in line no. 216
// },1000)
// console.log(b);
// a=3
//Callback Function
//Callback function ek function hai jo kisi doosre function ko as an argument pass kiya jata hai aur woh function usse apni execution ke baad call karta hai.
// // Main Function - HOC (Higher Order Function)
// function one(cb:()=> void){
//   console.log("ONE");
//   cb() // calling the cb function
// }
// // Callback
// function Two(){
//   console.log("Async Function");
// } 
// one(Two)
// // more practice
// function hello (callback:()=> void){
//     callback()
// }
// let callBackFunction = () => {
//   console.log("Callback Function");
// }
// hello(callBackFunction)
// // little advanced
// function hello (callback:any){
//     callback("Ibad")
// }
// let callBackFunction = (name:string) => {
//   console.log(`Hello ${name}`);
// }
// hello(callBackFunction)
// little more advanced
function hello(cb, secondName) {
    cb(secondName);
}
let callBackFunction = (name) => {
    console.log(`Hello ${name}`);
};
// hello(callBackFunction, "Ibad")
// hello(callBackFunction, "Rayyan")
