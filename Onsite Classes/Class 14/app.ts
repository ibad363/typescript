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