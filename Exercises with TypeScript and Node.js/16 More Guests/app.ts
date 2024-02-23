//16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let guest : string[] = ['Ibad', 'Anus', 'Arsalan', 'Jahanzaib']

// //1st Invitation
// //ex 14
// for(let i =0; i<guest.length;i++){
//   console.log(`Dear ${guest[i]}, \nyou are invited to Dinner. Please join us for a delightful evening! \nThank You\n`);
// }

let absentGuest :string = 'Ibad';
let newGuest : string = 'Ashar';
guest[0] = newGuest;

console.log(`Mr ${absentGuest} is Not Coming to the Dinner\n`)

//2nd Invitation
for(let i =0; i<guest.length;i++){
  console.log(`Dear ${guest[i]}, \nyou are Still invited to Dinner. Please join us for a delightful evening! \nThank You\n`);
}

console.log("I have Found a Bigger Dinner Table, so i want to invite 3 more guests\n");

guest.unshift('Aashir'); //add aashir in the start of guest array
guest.splice(3,0,"Raza"); //add raza in the middle of guest array
guest.push('Rohan'); //add rohan in the end of guest array

//3rd Invitation
for(let i =0; i<guest.length;i++){
  console.log(`Dear ${guest[i]}, \nyou are 3rd timed invited to Dinner. Please join us for a delightful evening! \nThank You\n`);
}

