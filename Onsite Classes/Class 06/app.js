"use strict";
//in class 06, revision of if else statement & else if new topic only
//if else statement
// let email :string = "ibad@gmail.com"
// let pass :string = '123456'
// if(email == "ibad@gmail.com" && pass === "123456"){
//     console.log("Sucsessfully Logged In");
// }else{
//     console.log("invalid Credentials");
// }
//else if statement
let percentage = 100.5;
if (percentage >= 80 && percentage <= 100) {
    console.log("A+ Grade");
}
else if (percentage >= 70 && percentage <= 79.99) {
    console.log("A Grade");
}
else if (percentage >= 60 && percentage <= 69.99) {
    console.log("B Grade");
}
else if (percentage >= 50 && percentage <= 59.99) {
    console.log("C Grade");
}
else if (percentage >= 33 && percentage <= 49.99) {
    console.log("D Grade");
}
else if (percentage > 100) {
    console.log("Invalid Percentage");
}
else {
    console.log("Fail");
}
