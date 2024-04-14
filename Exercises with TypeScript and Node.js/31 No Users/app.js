"use strict";
// // No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// ex 28
let personAge = 19;
if (personAge < 2) {
    console.log("the person is a baby.");
}
else if (personAge < 4) {
    console.log("the person is too older.");
}
else if (personAge < 13) {
    console.log("the person is a kid");
}
else if (personAge < 20) {
    console.log("the person is a teenager");
}
else if (personAge < 65) {
    console.log("the person is a adult");
}
else {
    console.log("the person is an elder");
}
//clear the list 
let userNames = [];
//show the message
if (userNames.length === 0) {
    console.log("we need to find some users!");
}
else {
    //greeting
}
