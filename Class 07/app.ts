//class 07 start by function

// // basic function

// function greet(){
//   return "Hello World"
// }

// let message = greet()
// console.log(message);

// function sum (){
//   return 2 + 2
// }

// let result = sum()
// console.log(result);


// // function with parameters

// function sum (num1 : number ,num2 :number){
//   let answer = num1 + num2
//   return answer
// }

// let result = sum(2, 8)
// console.log(result);


// //function with default parameter

// function greet(message = "Hello Dear"){
//   return message
// }

// let result = greet("hello bhai")
// console.log(result);


// //arrow function

// let greet =() => "Hello World"
// let result = greet()
// console.log(result);

// let sum =(num1:number, num2 : number) => num1 + num2
// let sumResult = sum(40,50)
// console.log(sumResult);


// let sum =(num1 :number ,num2: number) => {
//   let answer = num1 + num2
//   return answer
// }
// let sumResult = sum(10,40)
// console.log(sumResult);


// let sum =(num1 :number ,num2: number) => {
//   console.log(num1+num2);
// }
// sum(10,40)

let introduceMe =(name="Ibad",age=20,profession="Software Engineer") =>{
  console.log(`My Name is ${name}`);
  console.log(`My Age is ${age}`);
  console.log(`My Profession is ${profession}`);
}

introduceMe("Arsalan",20,"Engineer");
