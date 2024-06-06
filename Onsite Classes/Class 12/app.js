"use strict";
// in class 12, type aliases, type union, type literals
let officeNo = "Office";
let freindNo = 162627;
const humanName = "Ibad";
const animalL = 67876;
let animals = ["Lion", "Cheetah", "Cat", "anyone"];
const kuchBhi = ["133", "44"];
// console.log(kuchBhi)
// Type literals: Jab hume pehle se value ka pata hota hai, to hum variable ki type ki jagah par values directly likh dete hain. Ab iske ilawa koi aur value us variable mein nahi a sakti.
let trafficLight;
trafficLight = "Red";
trafficLight = "Green";
trafficLight = "Yellow";
// trafficLight = "kuch bhi" //error
// console.log(trafficLight)
let user;
user = "log in";
user = "log out";
const car = {
    make: "Toyota",
    model: 2023,
    variant: "1800cc",
    maxSpeed: () => {
        return "Max speed is 200";
    }
};
const car2 = {
    make: "Toyota",
    model: 2023,
    variant: "1800cc",
    start: () => {
        return "Starting speed is 50";
    },
    maxSpeed: () => {
        console.log("Max speed is 200");
    },
    // isAC:()=>true
    isAC: true
};
const myBill = {
    customerName: "Ibad",
    products: {
        productName: "biryani",
        price: 250,
        isTasty: () => true
    }
};
const acCheck = {
    isAC: () => true
};
let car3 = [
    { name: "Toyota",
        color: "Black",
        price: 2500000 },
    { name: "mehran",
        color: "white",
        price: 1000000 },
    { name: "civic",
        color: "white",
        price: 2500000 },
    { name: "fortuner",
        color: "Black",
        price: 2500000
    },
    { name: "revo",
        color: "white",
        price: 10000000
    },
];
//filter method
let filterCar = car3.filter(cars => cars.color === "white");
filterCar = car3.filter(car => car.price > 1500000);
// console.log(filterCar);
let filterCar2 = car3.filter(carcbf => carcbf.color == "white");
let myInfo = {
    name: "Ibad",
    age: 20,
    isMarried: false,
    isEarning: true,
};
// two methods of objects property access
// console.log(myInfo["name"])
// console.log(myInfo.name);
