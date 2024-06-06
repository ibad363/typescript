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