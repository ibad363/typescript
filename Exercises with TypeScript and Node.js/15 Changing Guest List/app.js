"use strict";
// 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
let guest = ['Ibad', 'Anus', 'Arsalan', 'Jahanzaib'];
//1st Invitation
//ex 14
for (let i = 0; i < guest.length; i++) {
    console.log(`Dear ${guest[i]}, \nyou are invited to Dinner. Please join us for a delightful evening! \nThank You\n`);
}
let absentGuest = 'Ibad';
let newGuest = 'Ashar';
guest[guest.indexOf(absentGuest)] = newGuest;
console.log(`Mr ${absentGuest} is Not Coming to the Dinner\n`);
//2nd Invitation
for (let i = 0; i < guest.length; i++) {
    console.log(`Dear ${guest[i]}, \nyou are Still invited to Dinner. Please join us for a delightful evening! \nThank You\n`);
}
