"use strict";
// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guest = ['Guest 1', 'Guest 2', 'Guest 3', 'Guest 4'];
for (let i = 0; i < guest.length; i++) {
    console.log(`Dear ${guest[i]}, \nyou are invited to dinner. Please join us for a delightful evening! \n   Thank You\n`);
}
