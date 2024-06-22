"use strict";
// class 1,
// introduction of course and some motivation
// class 2, (Hello World)
// let message = "Hello World";
// console.log(message);
//class 3 about variables
// let favoriteColor :string= "Blue";
// console.log(favoriteColor);
//class 4 about arithmetic Operators
// let a: number = 5;
// let b: number = 2;
// let c: number;
// c= ++a + a++ + --b + b-- + a + b++ + b;
// //  6  +  6  +  1  + 1   + 7 + 0   + 1 = 22
// console.log(c); // output 22
// //class 5 about comparison Operators, logical operators & if else statements
// //comparison operators
// let num1 : number = 5
// let num2 : number = 2
// // let answer = num1 == num2 //false
// // let answer = num1 != num2 //true
// // let answer = num1 > num2 //true
// // let answer = num1 < num2 // false
// // console.log(answer);
// //logical operators ( && = logical and, || = logical or, ! = logical not)
// let a=5
// let b=2
// // let logicalAnd = (a > 0) && (b > 0); // true
// // let logicalOr = (a < 0) || (b > 0); // true
// // let logicalNot = !(a > 0); // false
// // console.log(logicalNot);
// //in class 6, revision of if else statement & else if new topic only
// //if else statement
// // let email :string = "ibad@gmail.com"
// // let pass :string = '123456'
// // if(email == "ibad@gmail.com" && pass === "123456"){
// //     console.log("Sucsessfully Logged In");
// // }else{
// //     console.log("invalid Credentials");
// // }
// //else if statement
// let percentage =100.5
// if (percentage >=80 && percentage <=100){
//     console.log("A+ Grade");
// }else if(percentage >=70 && percentage <=79.99){
//     console.log("A Grade");
// }else if(percentage >=60 && percentage <=69.99){
//     console.log("B Grade");
// }else if(percentage >=50 && percentage <=59.99){
//     console.log("C Grade");
// }else if(percentage >=33 && percentage <=49.99){
//     console.log("D Grade");
// }else if(percentage > 100){
//     console.log("Invalid Percentage");
// }else {
//     console.log("Fail");
// }
// //class 07 start by function
// // // basic function
// // function greet(){
// //   return "Hello World"
// // }
// // let message = greet()
// // console.log(message);
// // function sum (){
// //   return 2 + 2
// // }
// // let result = sum()
// // console.log(result);
// // // function with parameters
// // function sum (num1 : number ,num2 :number){
// //   let answer = num1 + num2
// //   return answer
// // }
// // let result = sum(2, 8)
// // console.log(result);
// // //function with default parameter
// // function greet(message = "Hello Dear"){
// //   return message
// // }
// // let result = greet("hello bhai")
// // console.log(result);
// // //arrow function
// // let greet =() => "Hello World"
// // let result = greet()
// // console.log(result);
// // let sum =(num1:number, num2 : number) => num1 + num2
// // let sumResult = sum(40,50)
// // console.log(sumResult);
// // let sum =(num1 :number ,num2: number) => {
// //   let answer = num1 + num2
// //   return answer
// // }
// // let sumResult = sum(10,40)
// // console.log(sumResult);
// // let sum =(num1 :number ,num2: number) => {
// //   console.log(num1+num2);
// // }
// // sum(10,40)
// let introduceMe =(name="Ibad",age=20,profession="Software Engineer") =>{
//     console.log(`My Name is ${name}`);
//     console.log(`My Age is ${age}`);
//     console.log(`My Profession is ${profession}`);
//   }
//   introduceMe("Arsalan",20,"Full Stack Engineer");
// // Class 08 (18 April 2024). The entire class will be dedicated to revising all previous lessons.
// //previous assignment revise
// let password: string = "abc1234"
// if (password.length >=8){
//     console.log("Strong Password");
// }else{
//     console.log("Create atleast 8 letter password");
// }
// // in class 09, revision of basic function, making some functions, string concatenation by template literals " ` ", return keyword, difference btw return and log
// // string concatenation by template literals ( ` )
// let firstName: string = "Ibad"
// let middleName : string = "ur"
// let lastName : string = "Rehman"
// console.log(`${firstName} ${middleName} ${lastName}`);
// // in class 10, revision of return and log difference, arrow function, global scope and local/block scope
// // arrow function
// // let sum = (num1: number, num2: number):number =>{
// //     return num1+num2
// // }
// // console.log(sum(10,10));
// // global and local / block scope variable
// // a block scope variable is a variable that is declared inside a block of code, which is defined by curly braces {}
// let org = "Army & Rangers"
// let callPolice1 = () => {
//     let policest1 :string = "Malir"
//     console.log(policest1);
//     console.log(org);
// }
// // callPolice1()
// let callPolice2 = () =>{
//     let policest2 :string = "Saddar"
//     console.log(policest2);
//     // console.log(/policest1); // shows error because policestation1 is block scope
// }
// // callPolice2()
// // another example of block scope variable
// function example() {
//     let x = 10;
//     if (x > 5) {
//         let y = 20; // y is block-scoped to this if block
//         console.log(x); // 10
//         console.log(y); // 20
//     }
//     console.log(x); // 10
//     // console.log(y); // Error: y is not defined
// }
// example();
// // in class 11, array, array methods and object
// let fruits : string [] = ["apple", "banana" , "mango", "pineapple"]
// // fruits.pop() // remove from end
// // fruits.shift() // remove from start
// // fruits.push("Orange") //add in end
// // // fruits.unshift("Papita") //add in start
// // slice starts inclusive and end exclusive (means, slice first parameter include karta he jese 1 he to 1st index include lekin second/last parameter include nh karta jese 3 he to 2nd index tak include kare ga 3rd index include nh kare ga)
// let extract = fruits.slice(1,3) //extracts from original array
// // console.log(extract);
// // fruits.splice(1,1,"Cheeku") //add element by index number and also delete element if you want
// // console.log(fruits);
// let student= {
//     name : "Ibad",
//     rollno: 324330,
//     Timing: "7 to 10"
// }
// // console.log(student);
// // console.log(student.name);
// let student2 = [
//     {name : "Ibad",
//     rollno: 21541616,
//     Timing: "7 to 10"
//     },
//     {
//         name: "Rayyan",
//         rollNo: 4103315,
//         Timing: "7 to 10"
//     }
// ]
// // conditional ternary if else (short method)practice
// // syntax: condition ? true code : false code
// // ? = it means if condition is true
// // : = it means if condition false
// let number = 6
// // number>5 ? console.log(`The ${number} is greater Than given Number`) : console.log("Not Greater than");
// // another writing style
// number>5
// ? 
// console.log(`The ${number} is greater Than given Number`)
// :
// console.log("Not Greater than");
// // in class 12, type aliases, type union, type literals
// // type aliases
// type IrfanFreind = number
// type IrfanOffice = string
// let officeNo:IrfanOffice = "Office"
// let freindNo:IrfanFreind = 162627
// // console.log(officeNo);
// // console.log(freindNo);
// type Human = string
// type AnimalLetter = number
// const humanName : Human= "Ibad"
// const animalL : AnimalLetter = 67876
// //console.log(humanName)
// //console.log(animalL)
// type Animal = string[]
// let animals : Animal = ["Lion", "Cheetah" , "Cat" , "anyone"]
// //console.log(animals)
// // Type union: A union type lets you define a variable or function argument that can hold multiple different data types. It's like saying, "This value can be either this type, or this type, or even this other type."
// // Example: string or number = string | number
// // In this example: string is allowed, number is also allowed, but any other type is not allowed because it is not defined. and in string or number only one is allowed either string or number
// // type MyArray= (number | string)[] // array men string aur number dono asakte hen
// type MyArray= string | number | string[] | number[]
// const kuchBhi : MyArray = ["133","44"]
// // console.log(kuchBhi)
// // Type literals: Jab Hume Pehle Se Value Ka Pata Hota Hai, to hum variable ki type ki jagah par values directly likh dete hain. Ab iske ilawa koi aur value us variable mein nahi a sakti.
// let trafficLight: "Red"| "Green" | "Yellow";
// trafficLight = "Red"
// trafficLight = "Green"
// trafficLight = "Yellow"
// // trafficLight = "kuch bhi" //error
// // console.log(trafficLight)
// let user : "log in"| "log out";
// user = "log in"
// user = "log out"
// //user = "log hojao"
// // console.log(user)
// //object type
// type CarObject = {
//     make: string,
//     model: number,
//     variant : string,
//     maxSpeed: ()=> string
// };
// const car: CarObject = {
//     make: "Toyota",
//     model: 2023,
//     variant : "1800cc",
//     maxSpeed: () =>{
//         return "Max speed is 200"
//     }
// }
// // console.log(car.maxSpeed());
// type MyCar= {
//     make: string,
//     model: number,
//     variant: string,
//     start: ()=> string,
//     maxSpeed:()=> void,
//     // isAC: ()=> boolean
//     isAC: boolean
// }
// const car2 : MyCar = {
//     make: "Toyota",
//     model: 2023,
//     variant: "1800cc",
//     start: ()=>{
//         return "Starting speed is 50"
//     },
//     maxSpeed: ()=>{
//         console.log("Max speed is 200");
//     },
//     // isAC:()=>true
//     isAC: true
// }
// // console.log(car2);
// // console.log(car2.start());
// // car2.maxSpeed();
// // console.log(car2.isAC());
// type Bill = {
//     customerName: string,
//     products :{
//         productName : string,
//         price : number,
//         isTasty : () => boolean
//     }
// }
// const myBill: Bill = {
//     customerName : "Ibad",
//     products: {
//         productName: "biryani",
//         price : 250,
//         isTasty: () => true
//     }
// }
// // console.log(myBill.products.price);
// type isAC = {
//     isAC: () => boolean
// }
// const acCheck: isAC = {
//     isAC: () => true
// }
// // console.log(acCheck.isAC())
// type CarObject2 = {
//     name :String,
//     color: string,
//     price:number
// }
// let car3:CarObject2[] = [
//     {name: "Toyota",
//         color: "Black",
//         price: 2500000},
//     {name: "mehran",
//     color: "white",
//     price: 1000000},
//     {name: "civic",
//         color: "white",
//         price: 2500000},
//     {name: "fortuner",
//         color: "Black",
//         price: 2500000
//     },
//     {name: "revo",
//     color: "white",
//     price: 10000000
//     },
// ]
// //filter method
// let filterCar = car3.filter(cars => cars.color === "white");
// filterCar = car3.filter(car => car.price > 1500000)
// // console.log(filterCar);
// let filterCar2 = car3.filter(carcbf => carcbf.color == "white")
// // console.log(filterCar2);
// type Info = {
//     name : string,
//     age: number,
//     isMarried: boolean,
//     isEarning: boolean,
// }
// let myInfo:Info = {
//     name : "Ibad",
//     age: 20,
//     isMarried: false,
//     isEarning: true,
// }
// // two methods of objects property access
// // console.log(myInfo["name"])
// // console.log(myInfo.name);
/*
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
let myArray : (number|string|boolean)[][]= [
    [true,false,true],
    ["ibad","ibad2","ibad3"],
]

// console.log(myArray);

// intersection types (&)

interface Person {
    name: string
}
interface Employee {
    employeeID: number
}
type PersonEmployee = Person & Employee; // (&) it is intersection type

const personEmployee : PersonEmployee = {
    name: "Ibad",
    employeeID: 152
}
// console.log(personEmployee);

// union types ( | )

let value: string | number;

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
let persons : string[]= ["babar","shaheen","imad","rizwan"]
// for (let i= 0; i < persons.length;i++){
//     // console.log(i);// output. 0,1,2,3 (means it shows index)
//     console.log(persons[i]);
// }

// for of loop
// for (let player of persons){
//     console.log(player.toUpperCase());
// }


// ENUM

enum Direction{
    North = "North",
    South = "South",
    East = "East",
    West = "West"
}

const compass: Direction = Direction.West
const compass2: Direction = Direction.North
// console.log(compass);
// console.log(compass2)

enum TimeSlot{
    Morning = "Morning",
    Afternoon = "Afternoon",
    Evening = "Evening",
    Night = "Night"
}

const compass3: TimeSlot = TimeSlot.Morning
// console.log(compass3);

enum Days{
    mon,
    tues,
    wed,
}

let today :Days = Days.mon
// console.log(today); //output 0 (shows index number starting by 0)

enum Days2{
    mon = 10,
    tues,
    wed,
}

let today2 :Days2 = Days2.tues
// console.log(today2); //output 11 (if monday index is 10, so tuesday index is 11)

enum Days3{
    mon = "Monday",
    tues = "Tuesday",
    wed = "Wednesday",
}

let today3 :Days3 = Days3.mon
// console.log(today3); //output Monday


//const enum

const enum Color {Red, Green, Blue}; // index starts with 0
let c: Color = Color.Green;
// console.log(c); // output 1

const enum Color1 {Red = 1, Green, Blue};
// let colorName: string = Color[2]; //it is Not allowed with const enums
// console.log(colorName);

const enum Color2 {Red = 1, Green = 2, Blue = 4}; //can also assign values to all
let colorIndex = Color2["Blue"];
// console.log(colorIndex); // output: shows value of blue
*/
/*
// in class 14 (30/5/24), enum, const enum, tuples , modules, Destructure the array, unkown type, any type, narrowing, error type, rest parameters

//Enum
enum Fuel {
    Petrol,
    Diesel
}

let fuel : Fuel = Fuel.Diesel
// console.log(fuel); // output: 1 (shows index no. of diesel)

enum Fuel2{
    Petrol = "Rs 274",
    Diesel = "Rs 300"
}

let fuel2 : Fuel2 = Fuel2.Diesel
// console.log(fuel2); // output: Rs 300 (shows value of diesel)

// const enum
const enum Fuel3 {
    Petrol,
    Diesel = "Rs 300"
}

let fuel3: Fuel3 = Fuel3.Petrol;
// console.log(fuel3); // Output: 0
let fuel4: Fuel3 = Fuel3.Diesel;
// console.log(fuel4); // Output: Rs 300

// difference in enum and const enum is:
// enum can be accesed by both indexes and values
// const enum can only be accesed through values. The TypeScript compiler inlines the values during compilation and does not create an object to allow access by index.

// regular enum
enum Fuel4 {
    Petrol,  // 0
    Diesel   // 1
}

// Access by value
let fuelByValue: Fuel4 = Fuel4.Diesel;
// console.log(fuelByValue); // Output: 1

// Access by index
let fuelByIndex: string = Fuel4[1];
// console.log(fuelByIndex); // Output: "Diesel"

//const enum
const enum Fuel5 {
    Petrol,  // 0
    Diesel   // 1
}

// Access by value
let fuelByValue2: Fuel5 = Fuel5.Diesel;
// console.log(fuelByValue2); // Output: 1

// Access by index is not possible with const enums
// let fuelByIndex2: string = Fuel5[1]; // This will result in a compile-time error

//Tuples (for sequential data)

let array1: [string,number,boolean, {name:string}?] = [ // ? means optional
    "TS",10,true,
]
// console.log(array1);

let studentInfo : [string, number, boolean][]
studentInfo= [
    ["Ibad", 10, true],
    ["Rayyan",11, true],
    // [12,"Usama",true] // it shows error because in 0 index string is allowed & index 1 number is allowed
]


//modules
export function sum (num1: number, num2: number){
    return num1+num2
}
//Export keyword export function, type aliases, interface, simple variable


// // Destructure the array
// let studentInfo2 : [string,number, boolean]
// studentInfo2 = ["Ibad", 324330, true]
// let [name, rollNo, onsite] = studentInfo2  // store array values in single variable like in this e.g ibad in name, 324330 in rollno and true in onsite
// // console.log("Student name:",name,"," ,"Roll No:",rollNo,",","Onsite:", onsite );
// console.log(onsite);


// unkown type

let val: unknown;
let val2: unknown = val //ok (means that type unkwown is compatible with unkwown)
let val3: any = val // ok (means that type any is compatible with unkwown)

// let firstName :string = val //error
// let age :number = val //error

// any type

// let firstName : any = "Ali"
// firstName= 10;
// firstName = true
// firstName = [""]
// firstName = () => true

// console.log(firstName);


// narrowing

// let age :String | number
// age = "twenty five"
// age = 25.202646

// if(typeof age === "number"){
//     // console.log(Math.round(age));
//     console.log(age.toFixed(2));
// }else{
//     console.log(age.toUpperCase());
// }

// if (typeof age === "number"){
//     console.log("this is a number");
// }else{
//     console.log("this is string");
// }

// error type

function Error1():never {
    throw new Error("Error Occured")
}
function error2() :never{
    throw new Error ("Error 2")
}
// Error1()
// error2()

// rest parameters

function wallet(color:string, ...arg: string[]){
    console.log(color, ...arg);
}

// wallet("Blue","NIC", "Bike Paper")
*/
/*
// Class 15 (6/6/24) , Optional parameters, Rest parameters, Explicit casting, Stuctural typing, define API, Synchronous, Asynchronous

//optional parameter
function add(a: number, b?: number) {
  return a + (b ?? 0);
}
// console.log(add(10)); // output: 10

function add2(a: number, b: number, c?: number) {
  return a + b + (c ?? 0);
}
// console.log(add2(10, 10)); // output: 20
// console.log(add2(10,10,10)); // output: 30

function greet(name: string, greeting?: string) {
  if (greeting) {
    console.log(`${greeting}, ${name}`);
  } else {
    console.log(`Hello, ${name}`);
  }
}
// greet("Ibad","Good Evening") // output: Good Evening, Ibad
// greet("Ibad") // output: Hello, Ibad
let output;
// output = greet("Ibad")
// console.log(output); // // output: undefined




//rest parameter
function concatenate(separator: string, ...otherString: string[]) {
  return otherString.join(separator);
}
// console.log(concatenate(", ", "apple", "banana", "mango")); // Output: "apple, banana, cherry"




//explicit casting (data type)
// let age: unknown;
// age = "Twenty Five";
// age = 25.512;
// let stringMethod = (age as string).toUpperCase();
// console.log(stringMethod);
// console.log((age as number).toFixed(1));




// structural typing (object ki type), object same properties and data type, Fresh object, Stale object
interface Ball {
  diameter: number;
}
interface Sphere {
  diameter: number;
}

let ball: Ball = {
  diameter: 15,
};
let sphere: Sphere = {
  diameter: 20,
};


// ball = sphere
// // console.log(ball); // output: { diameter: 20 }
// sphere = ball
// console.log(sphere); // output: { diameter: 20 } , because ball diameter is change by 20 in line no. 67, if line no. 67 comment output of diameter is 15

interface Tube {
  diameter:number,
  length: number
}
let tube : Tube= {
  diameter: 25,
  length: 26
}

ball = tube //ok, ye valid hai kyunke tube mein ball ke sari properties hain.
// console.log(ball); // output: { diameter: 25, length: 26 }

// tube = ball // invalid hai kyunke ball mein tube ki sari properties nahi hain (e.g., length property missing hai).

// in english, Because a ball does not have a length, then it cannot be assigned to the tube variable. However, all of the members of Ball are inside tube, and so it can be assigned.

// LHS aur RHS: Jab assign karain, to yeh yakin banayein ke RHS object ke paas kam az kam woh tamam properties hain jo LHS variable ke liye zaroori hain, aur RHS mein aisi zyada properties ho sakti hain jo LHS mein nahi hain, lekin iska ulta nahi ho sakta.


interface firstandLastName {
  firstName: string
  lastName: string
}
let hasBoth : firstandLastName= {
  firstName: "Ali",
  lastName: "Khan"
}

hasBoth= {
  firstName: "Kashif",
  lastName: "Khan"
}

interface ThreeName{
  firstName: string
  lastName: string
  middleName: string
}

let hasThree: ThreeName= {
  firstName:"Ibad",
  middleName: "Ur",
  lastName: "Rehman"
}

hasBoth = hasThree
// hasThree = hasBoth //error


// fresh aur stale object (sir zia code)
//Case when "FRESH" object literal is assigned to a variable

let myType = { name: "Zia", id: 1 };

//Case 1
myType = { id: 2,  name: "Tom" };
// Explanation: Only properties matching the contextual type are allowed.

//Case 2a
// myType = { id: 2,  name_person: "Tom" };
// Explanation: Error due to a renamed or missing property.

//Case 2b
// Explanation: A type with an index signature allows additional properties with any string name and any value type.
var x: { id: number, [x: string]: any };
x = { id: 1, fullname: "Zia" };  // Ok, `fullname` matched by index signature

//Case 3
// myType = { id: 2,  name: "Tom", age: 22 }; //My Explanation: stale(purane) object men fresh object banate waqt extra property allowed nh he.
// Explanation: Error due to an excess property.


//=================================================


//Case when STALE object literal is assigned to a variable

let myType2 = { id: 2,  name: "Tom" };

//Case 1
myType = myType2;
// Explanation: Only properties matching the contextual type are allowed, same rule for fresh and stale objects.

let myType3 = { id: 2,  name_person: "Tom" };
//Case 2a
// myType = myType3;
// Explanation: Error due to a renamed or missing property, same rule for stale and fresh objects.

//Case 2b
// Explanation: A type can include an index signature to explicitly indicate that excess properties are permitted in fresh objects.
var x: { id: number, [x: string]: any };
var y = { id: 1, fullname: "Zia" };
x = y; // Ok, `fullname` matched by index signature

var myType4 = { id: 2,  name: "Tom", age: 22 };

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

// Main Function - HOC (Higher Order Function)
function one(cb:()=> void){
  console.log("ONE");
  cb() // calling the cb function
}
// Callback
function Two(){
  console.log("Async Function");
}

one(Two)

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
function hello(cb:(name :string) =>void, secondName:string){
  cb(secondName)
}

let callBackFunction = (name:string) =>{
  console.log(`Hello ${name}`);
}

// hello(callBackFunction, "Ibad")
// hello(callBackFunction, "Rayyan")
*/
/*
// in class 16 (13/6/24), asynchronous, promise, then catch, promise chaining, async await, try catch

// let promiseOne = new Promise ((resolve,reject) =>{
//     console.log("Promise pending");
//     setTimeout(() => {
//         // console.log("Promise Resolved");
//         // resolve("Ibad")
//         reject(new Error ("Error Aya he"))
//     },1500)
// })

// promiseOne.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     // console.log(err);
//     console.log("Error Occured"); // another way for print error
// })



// let promiseTwo = new Promise ((resolve,reject)=>{
//     console.log("Promise pending");
//     setTimeout(() => {
//         let data = ["Ibad","AI Engineer",20] //resolve line
//     // let data = "" //reject line
//     if(data){
//         console.log("promise resolved");
//         resolve(data)
//     }else{
//         console.log("promise rejected");
//         reject("Data Fetch nh hosaka")
//     }
//     }, 1000);
// })
// promiseTwo.then((resolveResult)=>{
//     console.log(resolveResult);
// }).catch((error)=>{
//     console.log("Error from fetching Data");
// })




// let promiseThree = new Promise((resolve,reject)=>{
//     resolve(10)
// }).then((resoloveValue)=>{
//     console.log(resoloveValue);
//     return 20
// }).then((resoloveValue2)=>{
//     console.log(resoloveValue2);
//     let promiseFour = new Promise ((resolve,reject)=>{
//         resolve("Resolve Hogaya")
//     })
//     return promiseFour
// }).then((resoloveValue3)=>{
//     console.log(resoloveValue3);
// })




// let promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Ibad", email: "ibad@gmail.com"})
//     },1000)
// })

// promiseFive.then(function(response){
//     console.log(response);
// })



// let promiseSix = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({username: "Ibad", email: "ibad@gmail.com"})
//         }else{
//             reject("Error aya he")
//         }
//     },1000)
// })

// promiseSix.then(function(response){
//     console.log(response);
//     return response.username
// }).then(function(res){
//     console.log(res);
// }).catch(function(error){
//     console.log(error,);
// }).finally(()=>{
//     console.log("the promise is either resolve or rejected");
    
// })




//try catch

// let promiseSeven = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = true
//         if (!error) {
//             resolve({ username: "Ibad", email: "ibad@gmail.com" })
//         } else {
//             reject("Error aya he")
//         }
//     }, 1000)
// })

// async function promiseSevenConsumed() {
//     try{
//         const response = await promiseSeven
//         console.log(response);
//     }catch(err){
//         console.log(err);
//     }
// }
// promiseSevenConsumed()




// fetch advance practice
let url = "https://jsonplaceholder.typicode.com/posts/2"

let fetchData = async () =>{
    let fetching = await fetch(url)
    let convertJson = await fetching.json()
    console.log(convertJson);
}

fetchData()
*/
/*
// class 17 (20/6/24), object oriented programming, classes, constructor, inheritance

// object oriented programming (oop) (everything related to object)
// there are 2 types of programming
// 1.functional programming
// 2.object oriented programming

// 1. class: is a blueprint (naqsha)
//    1.variable
//    2.methods / functions
// 2. object


// 1. class (with variable)

// // this is static typing
// class Car{
//     name: string = "Civic"
//     make: string = "Honda"
//     year: number = 2024
// }
// let myCar = new Car()
// console.log(myCar);

// class Person {
//     name : string = "Ibad"
//     age : number = 20
// }
// let personBio = new Person()
// console.log(personBio);


// // this is dynamic typing
// class Person {
//     //class properties
//     name: string
//     age: number
//     email: string

//     // constructor is a class function for initializing class properties
//     // this refers to the instance class variables
//     constructor(name: string, age: number, email: string) {
//         this.name = name
//         this.age = age
//         this.email = email
//     }
// }

// let personBio = new Person("Ibad",20,"ibad@xyz.com")
// let personBio2 = new Person("Rayyan",23,"rayyan@xyz.com")

// console.log(personBio);
// console.log(personBio2);



// // 2. class (with function)
// class Person {
//     name: string
//     age: number
//     email: string

//     constructor(name: string, age: number, email: string) {
//         this.name = name
//         this.age = age
//         this.email = email
//     }
//     getDetails() : string{
//         return `My name is ${this.name} and my Age is ${this.age} and my email is ${this.email}`
//     }

//     favFood(food: string):string{
//         return `my name is ${this.name} and my age is ${this.age} and my email is ${this.email} and my favorite food is ${food}`
//     }
// }

// let personBio = new Person("Ibad",20,"ibad@xyz.com")
// console.log(personBio.getDetails());
// console.log(personBio.favFood("Biryani"));



// class Vehicle {
//     name: string
//     engine: string
//     color: string

//     constructor(nam : string, eng: string, col: string){
//         this.name = nam
//         this.engine = eng
//         this.color = col
//     }
// }

// class Car extends Vehicle{
//     year : number
//     constructor(name :string,engine :string, color:string, year:number){
//         super(name,engine,color)
//         this.year = year
//         }
// }

// let myVehicle = new Vehicle("Revo", "Petrol","Black")
// console.log(myVehicle);

// let myCar = new Car("Honda Civic", "Hybrid", "White",2024)
// console.log(myCar);

class Vehicle{
    engine: string
    tyre: number
    name:string
    constructor(engine:string,tyre:number,name:string){
        this.name=name
        this.engine = engine
        this.tyre= tyre
    }
}

class MotorBike extends Vehicle{
    constructor(engine:string,tyre :number,name:string){
        super(engine,tyre,name)
    }
}

let mb = new MotorBike("70cc",2,"Honda")
console.log(mb);
*/ 
