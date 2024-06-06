// in class 10, revision of return and log difference, arrow function, global scope and local/block scope


// arrow function
// let sum = (num1: number, num2: number):number =>{
//     return num1+num2
// }
// console.log(sum(10,10));


// global and local / block scope variable
// a block scope variable is a variable that is declared inside a block of code, which is defined by curly braces {}

let org = "Army & Rangers"

let callPolice1 = () => {
    let policest1 :string = "Malir"
    console.log(policest1);
    console.log(org);
}
// callPolice1()

let callPolice2 = () =>{
    let policest2 :string = "Saddar"
    console.log(policest2);
    // console.log(/policest1); // shows error because policestation1 is block scope
}
// callPolice2()

// another example of block scope variable
function example() {
    let x = 10;
    if (x > 5) {
        let y = 20; // y is block-scoped to this if block
        console.log(x); // 10
        console.log(y); // 20
    }
    console.log(x); // 10
    // console.log(y); // Error: y is not defined
}
example();
