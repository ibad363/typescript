//17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let guest : string[] = ['Ibad', 'Anus', 'Arsalan', 'Jahanzaib']

//1st Invitation
//ex 14
for(let i =0; i<guest.length;i++){
  console.log(`Dear ${guest[i]}, \nyou are invited to Dinner. Please join us for a delightful evening! \nThank You\n`);
}

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

console.log("The Table won't arrive in time, So Sorry to say! I can invite only two people for Dinner\n");

//removing 5 guests from 7 guests and message them to apologies
let removeGuest = guest.pop();
console.log(`${removeGuest},you're sorry you can't invite to dinner`);
let removeGuest2 = guest.pop();
console.log(`${removeGuest2},you're sorry you can't invite to dinner`);
let removeGuest3 = guest.pop();
console.log(`${removeGuest3},you're sorry you can't invite to dinner`);
let removeGuest4 = guest.pop();
console.log(`${removeGuest4},you're sorry you can't invite to dinner`);
let removeGuest5 = guest.pop();
console.log(`${removeGuest5},you're sorry you can't invite to dinner`);

//4th Invitation
for(let i =0; i<guest.length;i++){
  console.log(`Dear ${guest[i]}, \nThis is Final Invitaion, you are still invited to Dinner. Please join us for a delightful evening!\nThank You\n`);
}

//empty list of guest
guest.splice(0,2);
console.log(`Final Guest List :${guest}`);