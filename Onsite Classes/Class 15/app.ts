// Class 15 (6/6/24) , Optional parameters, Rest parameters, Explicit casting , Stuctural typing  (object ki type): object properties and data type, Fresh object, Stale object, Synchronous, What is api, Asynchronous Call stack Callback queue , Higher order function, Callback function syntax

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




// structural typing (object ki type)
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

ball = tube //ok
console.log(ball); // output: { diameter: 25, length: 26 }
// tube = ball