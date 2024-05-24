// in class 12, type aliases, type union, type literals

// type aliases

type IrfanFreind = number
type IrfanOffice = string

let officeNo:IrfanOffice = "Office"
let freindNo:IrfanFreind = 162627

// console.log(officeNo);
// console.log(freindNo);

type Human = string
type AnimalLetter = number

const humanName : Human= "Ibad"
const animalL : AnimalLetter = 67876
//console.log(humanName)
//console.log(animalL)

type Animal = string[]

let animals : Animal = ["Lion", "Cheetah" , "Cat" , "anyone"]

//console.log(animals)


// type union

//type MyArray= (number | string)[]
type MyArray= string | number | string[] | number[]

const kuchBhi : MyArray = ["133","44"]
// console.log(kuchBhi)


// type literals

let trafficLight:"Red"| "Green" | "Yellow";
trafficLight= "Red"
trafficLight= "Green"
trafficLight= "Yellow"
// trafficLight = "kuch bhi"
// console.log(trafficLight)

let user : "log in"| "log out";
user = "log in"
user = "log out"
//user = "log hojao"
// console.log(user)


//object type

type CarObject = {
    make: string,
    model: number,
    variant : string,
    maxSpeed:()=> string
};

const car: CarObject = {
    make: "Toyota",
    model: 2023,
    variant : "1800cc",
    maxSpeed: () =>{
        return "Max speed is 200"
    }
}

// console.log(car.maxSpeed());



type MyCar= {
    make: string,
    model: number,
    variant: string,
    start: ()=> string,
    maxSpeed:()=> void,
    isAC: ()=> boolean
}


const car2 : MyCar = {
    make: "Toyota",
    model: 2023,
    variant: "1800cc",
    start: ()=>{
        return "Starting speed is 50"
    },
    maxSpeed: ()=>{
        console.log("Max speed is 200");
    },
    isAC:()=>true
}

type Bill = {
    customerName: string,
    products :{
        productName : string,
        price : number,
        isTasty : () => boolean
    }
}

const myBill: Bill = {
    customerName : "Ibad",
    products: {
        productName: "biryani",
        price : 250,
        isTasty: () => true
    }
}

// console.log(myBill.products.price);


// console.log(car2.start());
// car2.maxSpeed();
// console.log(car2.isAC());

type isAC = {
    isAC: () => boolean
}

const acCheck: isAC = {
    isAC: () => true
}

// console.log(acCheck.isAC())

type CarObject2 = {
    name :String,
    color: string,
    price:number
}

let car3:CarObject2[] = [
{name: "Toyota",
        color: "Black",
        price: 2500000
    },
{name: "mehran",
    color: "white",
    price: 1000000
},
{name: "civic",
        color: "white",
        price: 2500000
    },
    {name: "Toyota",
        color: "Black",
        price: 2500000
    },{name: "Toyota",
    color: "white",
    price: 2500000
},
]

let filterCar = car3.filter(cars => cars.color>"white");
console.log(filterCar);
