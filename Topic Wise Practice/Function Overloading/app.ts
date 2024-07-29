function sum(a: number,b:number): number
function sum(a: string,b:string): string

//implementation by unkown type
// function sum(a: unknown,b:unknown): unknown{
//     if(typeof a === "number" && typeof b === "number"){
//         return a+b
//     }else if(typeof a === "string" && typeof b === "string") {
//         return a+b
//     }
// }

//implementation by any type
function sum(a: any,b:any): any{
        return a+b
}

// console.log(sum(10,10));
// console.log(sum("10","10"));


// Function signatures (overloads)
function getInfo(input: string): string;
function getInfo(input: number): string;

// Function implementation
function getInfo(input: string | number): string {
    if (typeof input === "string") {
        return `This is a string: ${input}`;
    } else if (typeof input === "number") {
        return `This is a number: ${input}`;
    } else {
        return `Invalid input`;
    }
}

// Using the overloaded function
// console.log(getInfo("Hello")); // Output: This is a string: Hello
// console.log(getInfo(123));     // Output: This is a number: 123


// typescript documentation example
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;

function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}

const d1 = makeDate(12345678);
// console.log(d1);
const d2 = makeDate(10, 5, 5);
// console.log(d2);
// const d3 = makeDate(1, 3);



// another typescript documentation example
function len(s: string): number;
function len(arr: any[]): number;

function len(x: any) {
  return x.length;
}

// console.log(len("Hi"));      
// console.log(len([1,2,3,4,5]));