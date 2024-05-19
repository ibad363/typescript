// in class 12, type aliases, type union, type literals

// type IrfanFreind = number
// type IrfanOffice = string

// let officeNo:IrfanOffice = "Office"
// let freindNo:IrfanFreind = 162627

// type Human = string
// type AnimalLetter = number

// const humanName : Human= "Ibad"
// const animalL : AnimalLetter = 67876
// //console.log(humanName)
// //console.log(animalL)

// type Animal = string[]

// let animals : Animal = ["Lion", "Cheetah" , "Cat" , "anyone"]

// //console.log(animals)

// //type MyArray= (number | string)[]
// type MyArray= string | number | string[] | number[]

// const kuchBhi : MyArray = ["133","44"]
// console.log(kuchBhi)

// // traffic light

// let trafficLight:"Red"| "Green" | "Yellow";
// trafficLight= "Red"
// trafficLight= "Green"
// trafficLight= "Yellow"
// // trafficLight = "kuch bhi"
// console.log(trafficLight)

// let user : "log in"| "log out";
// user = "log in"
// user = "log out"
// //user = "log hojao"
// console.log(user)


// Const car:{
//     make: string,
//     Model: number,
//     Variant : string,
//     Maxspeed:()=> string
//     } = {
//       make: "Toyota",
//     Model: 2023,
//     Variant : "1800cc"
//     MaxSpeed: ()=>{
//     Return "Max speed is 200"
//     }
//     }
    
//     Console.log(car.MaxSpeed())

//     Const car :{
//         IsAC: () => boolean
//        }= {
//         IsAC: () => true
//        }
       
//        Console.log(car.isAC())


//        type Mycar= {
//         Make: string,
//        Model: number,
//        Variant: string,
//        Start: ()=> string,
//        Maxspeed:()=> void,
//        IsAc: ()=> boolean
//        }