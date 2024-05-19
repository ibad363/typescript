"use strict";
// in class 12, type aliases, type union, type literals
let officeNo = "Office";
let freindNo = 162627;
const humanName = "Ibad";
const animalL = 67876;
let animals = ["Lion", "Cheetah", "Cat", "anyone"];
const kuchBhi = ["133", "44"];
// console.log(kuchBhi)
// type literals
let trafficLight;
trafficLight = "Red";
trafficLight = "Green";
trafficLight = "Yellow";
// trafficLight = "kuch bhi"
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
    isAC: () => true
};
const acCheck = {
    isAC: () => true
};
console.log(acCheck.isAC());
