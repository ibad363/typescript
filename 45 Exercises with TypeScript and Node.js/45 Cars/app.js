"use strict";
//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
// function storeCarInfo (manufacturer:string, modelName:string, ...extraOption:{[key:string] :any}[]):object {
//     const carInfo = {
//         manufacturer,
//         modelName,
//         ...Object.assign({},...extraOption )
//     }
//     return carInfo
// }
// console.log(storeCarInfo("Honda","Civic", {color: "Black"}, {features: ["navigation", "window screen"]}))
// console.log(storeCarInfo("Ford","Fiesta", {color: "Blue"}, {Year: 2020}))
function make_car(manufacturer, model, ...options) {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}
console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
