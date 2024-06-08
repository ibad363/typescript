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

