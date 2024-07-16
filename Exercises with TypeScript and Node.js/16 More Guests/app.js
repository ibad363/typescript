"use strict";
//16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guest = ['Guest 1', 'Guest 2', 'Guest 3', 'Guest 4'];
// //1st Invitation
// //ex 14
// for(let i =0; i<guest.length;i++){
//   console.log(`Dear ${guest[i]}, \nyou are invited to Dinner. Please join us for a delightful evening! \nThank You\n`);
// }
let absentGuest = 'Guest 4';
let newGuest = 'Guest 5';
guest[3] = newGuest;
console.log(`Mr ${absentGuest} is Not Coming to the Dinner\n`);
//2nd Invitation
for (let i = 0; i < guest.length; i++) {
    console.log(`Dear ${guest[i]}, \nyou are Still invited to Dinner. Please join us for a delightful evening! \nThank You\n`);
}
console.log("I have Found a Bigger Dinner Table, so i want to invite 3 more guests\n");
guest.unshift('Guest 6'); //add Guest 6 in the start of guest array
guest.splice(3, 0, "Guest 7"); //add Guest 7 in the middle of guest array
guest.push('Guest 8'); //add Guest 8 in the end of guest array
//3rd Invitation
for (let i = 0; i < guest.length; i++) {
    console.log(`Dear ${guest[i]}, \nyou are 3rd timed invited to Dinner. Please join us for a delightful evening! \nThank You\n`);
}
