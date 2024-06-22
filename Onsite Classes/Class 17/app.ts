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
