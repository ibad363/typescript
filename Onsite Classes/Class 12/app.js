// in class 12, type aliases, type union, type literals
var officeNo = "Office";
var freindNo = 162627;
var humanName = "Ibad";
var animalL = 67876;
var animals = ["Lion", "Cheetah", "Cat", "anyone"];
var kuchBhi = ["133", "44"];
// console.log(kuchBhi)
// type literals
var trafficLight;
trafficLight = "Red";
trafficLight = "Green";
trafficLight = "Yellow";
// trafficLight = "kuch bhi"
// console.log(trafficLight)
var user;
user = "log in";
user = "log out";
var car = {
    make: "Toyota",
    model: 2023,
    variant: "1800cc",
    maxSpeed: function () {
        return "Max speed is 200";
    }
};
var car2 = {
    make: "Toyota",
    model: 2023,
    variant: "1800cc",
    start: function () {
        return "Starting speed is 50";
    },
    maxSpeed: function () {
        console.log("Max speed is 200");
    },
    isAC: function () { return true; }
};
var myBill = {
    customerName: "Ibad",
    products: {
        productName: "biryani",
        price: 250,
        isTasty: function () { return true; }
    }
};
var acCheck = {
    isAC: function () { return true; }
};
var car3 = [
    { name: "Toyota",
        color: "Black",
        price: 2500000
    },
    { name: "mehran",
        color: "white",
        price: 1000000
    },
    { name: "civic",
        color: "white",
        price: 2500000
    },
    { name: "fortuner",
        color: "Black",
        price: 2500000
    }, { name: "revo",
        color: "white",
        price: 10000000
    },
];
var myInfo = {
    name: "Ibad",
    age: 20,
    isMarried: false,
    isEarning: true,
};
// two methods of objects property access
// console.log(myInfo["name"])
// console.log(myInfo.name);
//filter method
var filterCar = car3.filter(function (cars) { return cars.color === "white"; });
filterCar = car3.filter(function (car) { return car.price > 1500000; });
// console.log(filterCar);
var filterCar2 = car3.filter(function (carcbf) { return carcbf.color == "white"; });
console.log(filterCar2);
