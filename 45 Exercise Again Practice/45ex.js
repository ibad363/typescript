"use strict";
// 1. Install [Node.js](https://nodejs.org/en/), [TypeScript](https://www.typescriptlang.org/download)  and [VS Code](https://code.visualstudio.com/) on your computer.
// ex 1 complete
// 2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric,
// would you like to learn some Python today?”
// let personName :string = "Eric" 
// console.log(`Hello ${personName}, would you like to learn some Python today`);
//ex 2 complete
// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// let personName:string = "ibad uR rehmAn"
// let upperCase: string = personName.toUpperCase()
// console.log(upperCase);
// let lowerCase: string = personName.toLowerCase()
// // // console.log(lowerCase);
// let titleCase:string = ""
// let split : string[] = personName.split(" ")
// for(let i = 0; i<split.length; i++){
//     titleCase += split[i].charAt(0).toUpperCase() + split [i].slice(1).toLowerCase() + " "
// }
// console.log(titleCase);
//ex 3 complete
// 4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the
// following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
// let quote :string = "A person who never made a mistake never tried anything new."
// console.log(`Albert Einstein once said, "${quote}"`);
//ex 4 complete
// 5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
// let famousPerson :string = "Albert Einstein"
// let message :string = "A person who never made a mistake never tried anything new."
// console.log(`${famousPerson} once said, "${message}"`);
//ex 5 complete
// 6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
// let whiteSpaceName:string = "\t\n\n ibad ur rehman \n \t"
// console.log("Name with White Spaces", whiteSpaceName);
// let strippedName :string = whiteSpaceName.trim()
// console.log("Stripped Name", strippedName);
//ex 6 complete
// 7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results. 
// console.log("Addition:",4+4);
// console.log("Subtraction:", 10-2);
// console.log("Multiplication:", 4*2);
// console.log("Division:", 16/2);
//ex 7 complete
// 8. You should create four lines that look like this:
// _____________________________________________
// console.log(5 + 3)
// _____________________________________________
// Your output should simply be four lines with the number 8 appearing once on each line.
// console.log(4+4);
// console.log(10-2);
// console.log(4*2);
// console.log(16/2);
//ex 8 complete
// 9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
// let favNumber: number = 10
// console.log(`My Favorite Number is ${favNumber}`);
//ex 9 complete
// 10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// // Code Written By: Ibad Ur Rehman 
// // Date: 8/7/24
// // greet variable declared and assign value
// let greet :string = "Hello Ibad"
//ex 10 complete
// 11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
// let freinds: string [] = ["ibad","ibad2", "ibad3", "ibad4", "ibad5"]
// console.log(freinds[0]);
// console.log(freinds[1]);
// console.log(freinds[2]);
// console.log(freinds[3]);
// console.log(freinds[4]);
//ex 11 complete
// 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
// let freinds: string [] = ["ibad","ibad2", "ibad3", "ibad4", "ibad5"]
// freinds.forEach(freind=>{
//     console.log(`Hello ${freind}, How are you?`);
// })
//ex 12 complete
// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// let favVehicle :string []= ["Bike 1","bike 2","bike 3","bike 4","bike 5"]
// console.log(`I would like to own a ${favVehicle[0]}.`);
// // remaining by loop
// for(let i=1; i < favVehicle.length; i++){
//     console.log(`I would like to own a ${favVehicle[i]}.`);
// }
//ex 13 complete
// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// let guest : string[] = ["guest 1","guest 2","guest 3","guest 4"]
// guest.forEach(guest=>{
//     console.log(`\nDear ${guest}, you are invited to dinner. Please join us for a delightful evening!\n`);
// })
//ex 14 complete
// 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
// let guests : string[] = ["guest 1","guest 2","guest 3","guest 4"]
// guests.forEach(guest=>{
//     console.log(`\nDear ${guest}, you are invited to dinner. Please join us for a delightful evening!\n`);
// })
// console.log(`\nMr ${guests[2]} is Not Coming to the Dinner\n`);
// let newGuest = "guest 5"
// guests[2] = newGuest
// guests.forEach(guest=>{
//     console.log(`\nThis is updated Invitation, Dear ${guest}, you are invited to dinner.\n`);
// })
//ex 15 complete
// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
// let guests : string[] = ["guest 1","guest 2","guest 3","guest 4"]
// guests.forEach(guest=>{
//     console.log(`Dear ${guest}, you are invited to dinner. Please join us for a delightful evening!\n`);
// })
// console.log(`Mr ${guests[2]} is Not Coming to the Dinner\n`);
// let newGuest = "guest 5"
// guests[2] = newGuest
// guests.forEach(guest=>{
//     console.log(`This is updated Invitation, Dear ${guest}, you are invited to dinner.\n`);
// })
// console.log(`I found a bigger dinner table.\n`);
// guests.unshift("guest 6") //beginning
// guests.splice(3,0,"guest 7") // (middle) after index no. 2, in 4th number index
// guests.push("guest 8") //end
// guests.forEach(guest=>{
//     console.log(`This is 3rd Invitation, Dear ${guest}, you are invited to dinner`);
// })
//ex 16 complete
// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// let guests : string[] = ["guest 1","guest 2","guest 3","guest 4"]
// guests.forEach(guest=>{
//     console.log(`Dear ${guest}, you are invited to dinner. Please join us for a delightful evening!\n`);
// })
// console.log(`Mr ${guests[2]} is Not Coming to the Dinner\n`);
// let newGuest = "guest 5"
// guests[2] = newGuest
// guests.forEach(guest=>{
//     console.log(`This is updated Invitation, Dear ${guest}, you are invited to dinner.\n`);
// })
// console.log(`I found a bigger dinner table.\n`);
// guests.unshift("guest 6") //beginning
// guests.splice(3,0,"guest 7") // (middle) after index no. 2, in 4th number index
// guests.push("guest 8") //end
// guests.forEach(guest=>{
//     console.log(`This is 3rd Invitation, Dear ${guest}, you are invited to dinner`);
// })
// console.log(`\nsorry, i can invite only two people for dinner.\n`);
// for(let i= 0; i<5;i++){
//     let remove = guests.pop()
//     console.log(`sorry ${remove} you cant invite to dinner.\n`);
// }
// console.log(`Dear ${guests[0]}, you are still invited to dinner`);
// console.log(`Dear ${guests[1]}, you are still invited to dinner`);
// guests.pop()
// guests.pop()
// console.log("Clear the Guest List: ",guests);
// ex 17 complete
// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// let dreamPlaces: string[] = ["Makkah","Madina","Najaf","Baghdad","Ajmer","Lahore","Bareilly"]
// console.log("Original Array", dreamPlaces); // Print your array in its original order.
// let alphabeticalOrder: string[] = [...dreamPlaces]
// alphabeticalOrder.sort()
// console.log("Alphabetically Sorted Array", alphabeticalOrder); // Print your array in alphabetical order without modifying the actual list.
// console.log("Original Array Again", dreamPlaces); // Show that your array is still in its original order by printing it.
// alphabeticalOrder.reverse()
// console.log("Reverse Alphabetically Sorted Array", alphabeticalOrder); // Print your array in reverse alphabetical order without changing the order of the original list.
// console.log("Original Array Again", dreamPlaces); // Show that your array is still in its original order by printing it again.
// dreamPlaces.reverse()
// console.log("Reverse Original Array",dreamPlaces); // Reverse the order of your list.
// dreamPlaces.reverse()
// console.log("Reverse Original Array Again",dreamPlaces); // Reverse the order of your list again. Print the list to show it’s back to its original order.
// dreamPlaces.sort()
// console.log("Alphabetically Sorted Original Array", dreamPlaces); // Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// dreamPlaces.reverse()
// console.log("Reverse Alphabetically Sorted Original Array", dreamPlaces); // Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// ex 18 complete
// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
// ex 16
// let guests : string[] = ["guest 1","guest 2","guest 3","guest 4"]
// guests.forEach(guest=>{
//     // console.log(`Dear ${guest}, you are invited to dinner. Please join us for a delightful evening!\n`);
// })
// // console.log(`Mr ${guests[2]} is Not Coming to the Dinner\n`);
// let newGuest = "guest 5"
// guests[2] = newGuest
// guests.forEach(guest=>{
//     // console.log(`This is updated Invitation, Dear ${guest}, you are invited to dinner.\n`);
// })
// // console.log(`I found a bigger dinner table.\n`);
// guests.unshift("guest 6") //beginning
// guests.splice(3,0,"guest 7") // (middle) after index no. 2, in 4th number index
// guests.push("guest 8") //end
// guests.forEach(guest=>{
//     // console.log(`This is 3rd Invitation, Dear ${guest}, you are invited to dinner`);
// })
// ex 19 start
// console.log("Total Number of Guest Invited to Dinner is" , guests.length);
// ex 19 complete
// 20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
// let cities: string[] = ["Karachi", "Lahore","Islamabad","Hyderabad","Multan","Quetta","Peshawar","Faisalabad","Rawalpindi","Sialkot","Bahawalpur"]
// console.log("List of Some Famous Cities in Pakistan", cities);
// ex 20 complete
// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// let personInfo :{
//     name: string
//     age: number
//     isMarried: boolean
// } = {
//     name: "Ibad",
//     age : 20,
//     isMarried: false,
// }
// console.log(personInfo);
// ex 21 complete
// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
// let cities: string[] = ["Karachi", "Lahore","Islamabad","Hyderabad","Multan","Quetta","Peshawar","Faisalabad","Rawalpindi","Sialkot","Bahawalpur"]
// console.log(cities[11]); // it shows undefined
// console.log(cities[10]); // Bahawalpur, Because array index start by 0
// ex 22 complete
// 23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// let car :string = "Revo"
// console.log("is car == 'Revo'? i predict True:", car == "Revo");
// console.log("is car === 'Revo'? i predict True:", car === "Revo");
// console.log("is car != 'revo'? i predict True:", car != "revo");
// console.log("is car == car.charAt(0).toUpperCase()+ car.slice(1).toLowerCase()? i predict True:", car == car.charAt(0).toUpperCase()+ car.slice(1).toLowerCase());
// console.log("is car.toUpperCase() == 'REVO'? i predict True:", car.toUpperCase() == 'REVO');
// console.log("is car != 'Revo'? i predict False:", car != "Revo");
// console.log("is car == 'revo'? i predict False:", car == "revo");
// console.log("is car == 'ReVo'? i predict False:", car == "ReVo");
// console.log("is car == 'Toyota'? i predict False:", car == "Toyota");
// console.log("is car == 'toyota'? i predict False:", car == "toyota");
// ex 23 complete
// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// let car : string =  "Revo"
// console.log("is car == 'Revo'? i predict True:", car == "Revo");
// console.log("is car == 'revo'? i predict False:", car == "revo");
// console.log("is car.toLowerCase() == 'Revo'? i predict True:", car.toLowerCase() == "revo");
// console.log("is car.toLowerCase() == 'Revo'? i predict False:", car.toLowerCase() == "Revo");
// let number :number = 10
// console.log("is number == 10? i predict True:", number == 10);
// console.log("is number == 100? i predict False:", number == 100);
// console.log("is number > 9? i predict True:", number > 9);
// console.log("is number > 11? i predict False:", number > 11);
// console.log("is number >= 9? i predict True:", number >= 9);
// console.log("is number >= 11? i predict False:", number >= 11);
// console.log("is number >= 9 && number > 9 ? i predict True:", number >= 9 && number > 9);
// console.log("is number >= 9 && number > 10 ? i predict False:", number >= 9 && number > 10);
// console.log("is number >= 9 || number > 10? i predict True:", number >= 9 || number > 10);
// console.log("is number == 9 || number > 10 ? i predict False:", number == 9 || number > 10);
// let cities : string[] = ["Karachi", "Lahore","Islamabad","Peshawar","Quetta"]
// console.log("is cities.includes('Karachi')? i predict True:",cities.includes("Karachi"));
// console.log("is cities.includes('karachi')? i predict False:",cities.includes("karachi"));
// ex 23 complete
// 25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another thatfails. (The version that fails will have no output.)
// let alienColor :string = "green"
// if (alienColor == "green") {
//     console.log("the player just earned 5 points.");
// }else{
//     console.log("Condition Failed");
// }
// if (alienColor == "red") {
//     console.log("the player just earned 5 points.");
// }else{
//     console.log("Condition Failed");
// }
// ex 25 complete
// 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
// let alienColor :string = "green"
// if(alienColor == "green"){
//     console.log("the player just earned 5 points for shooting the alien.");
// }else{
//     console.log("the player just earned 10 points.");
// }
// alienColor = "red"
// if(alienColor == "green"){
//     console.log("the player just earned 5 points for shooting the alien.");
// }else{
//     console.log("the player just earned 10 points.");
// }
// ex 26 complete
// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// let alienColor :string = "green"
// if(alienColor == "green"){
//     console.log("the player just earned 5 points.");
// }else if(alienColor == "yellow"){
//     console.log("the player just earned 10 points.");
// } else if (alienColor == "red"){
//     console.log("the player just earned 15 points.");
// }
// alienColor = "yellow"
// if(alienColor == "green"){
//     console.log("the player just earned 5 points.");
// }else if(alienColor == "yellow"){
//     console.log("the player just earned 10 points.");
// }else if (alienColor == "red"){
//     console.log("the player just earned 15 points.");
// }
// alienColor = "red"
// if(alienColor == "green"){
//     console.log("the player just earned 5 points.");
// }else if(alienColor == "yellow"){
//     console.log("the player just earned 10 points.");
// }else if (alienColor == "red"){
//     console.log("the player just earned 15 points.");
// }
// ex 27 complete 
// 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a to older.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
// let age :number = 65
// if(age < 2 ){
//     console.log("the person is a baby.");
// }else if(age == 2 || age < 4){
//     console.log("the person is a to older.");
// }else if(age == 4 || age < 13){
//     console.log("the person is a kid.");
// }else if(age == 13 || age < 20){
//     console.log("the person is a teenager.");
// }else if(age == 20 || age < 65){
//     console.log("the person is a adult.");
// }else if(age >= 65){
//     console.log("the person is a elder.");
// }
// ex 28 complete
// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
// let favFruits :string[]= ["Mango","Banana","Cherry","Pineapple","Orange"]
// if(favFruits.includes("Banana")){
//     console.log("i really like Banana");
// }
// if(favFruits.includes("Mango")){
//     console.log("i really like Mango");
// }
// if(favFruits.includes("Cherry")){
//     console.log("i really like Cherry");
// }
// if(favFruits.includes("Pineapple")){
//     console.log("i really like Pineapple");
// }
// if(favFruits.includes("orange")){
//     console.log("i really like Orange"); // not working, case Mistake
// }
// ex 29 complete
// 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user
// after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
// let username: string[] = ["user1","user2","user3","user4","user5","admin"]
// username.forEach(username=>{
//     if(username == "admin"){
//         console.log("Hello admin, would you like to see a status report?");
//     }else{
//         console.log(`Hello ${username}, thank you for logging in again.`);
//     }
// })
// ex 30 complete
// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// let username: string[] = ["user1","user2","user3","user4","user5","admin"]
// // for(let i=0;i<6;i++){
// //     username.pop()
// // }
// // while(username.length>0){
// //     username.pop()
// // }
// // username.splice(0,username.length)
// username.length = 0
// if(username.length === 0){
//     console.log("We need to find some users!");
// }else{
//     console.log("we have user in list");
// }
// ex 31 complete
// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// let currentUsers: string[] = ["user1","uSer2","user3","user4","user5"]
// let newUsers: string[] = ["user6","User2","user8","user9","user5"]
// newUsers.forEach(newuser=>{
//     if(currentUsers.some(currentUser=>currentUser.toLowerCase() == newuser.toLowerCase())){
//         console.log(`the ${newuser} will need to enter a new username.`);
//     }else{
//         console.log(`username is available.`);
//     }
// })
// ex 32 complete
// 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
// let number :number[] = [1,2,3,4,5,6,7,8,9]
// number.forEach(num=>{
//     let suffix = "th"
//     if(num == 1){
//         suffix = "st"
//     }else if(num == 2){
//         suffix = "nd"
//     }else if(num == 3){
//         suffix = "rd"
//     }
//     console.log(`${num}${suffix}`);
// })
// ex 33 complete
// 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
// let favPizza :string[] = ["Pizza 1","Pizza 2","Pizza 3","Pizza 4","Pizza 5"]
// favPizza.forEach(pizza=>{
//     console.log(`i like ${pizza} pizza`);
// })
// console.log("i really love pizza!");
// ex 34 complete
// 35. Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
// • Modify your program to print a statement about each animal, such as A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
// let animals : string[] = ["Cat","Dog","Cow","Rabbit"]
// animals.forEach(animal=>{
//     console.log(`A ${animal} would make a great pet.`);
// })
// console.log("Any of these animals would make a great pet!");
// ex 35 complete
// 36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
// function make_shirt(size: string, text:string){
//     console.log(`Make Shirt With Size '${size}' and Message '${text}'   `);
// }
// make_shirt("Medium","Coding is Passion")
// ex 36 complete
// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
// function make_shirt(size: string = "large", text:string = "I love TypeScript"){
//     console.log(`Make Shirt With Size '${size}' and Message '${text}'   `);
// }
// make_shirt()
// make_shirt("medium")
// make_shirt("Small","I am AI Engineer")
// make_shirt(undefined,"I am AI Engineer")
// ex 37 complete
// 38. Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
// function describe_city(city:string,country:string = "Pakistan"){
//     console.log(`${city} is in ${country}`);
// }
// describe_city("Karachi")
// describe_city("Lahore")
// describe_city("Islamabad")
// describe_city("Mumbai","India")
// ex 38 complete
// 39. City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
// function city_country(city:string,country: string){
//     return `${city}, ${country}`
// }
// console.log(city_country("Karachi","Pakistan"));
// console.log(city_country("Lahore","Pakistan"));
// console.log(city_country("Islamabad","Pakistan"));
// console.log(city_country("Delhi","India"));
// // ex 39 complete
// 40. Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly.
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
// function make_album(artistName: string, albTitle:string, tracks?:number){
//     let album :{artistName : string, albumTitle:string,tracks?:number} = {
//         artistName: artistName,
//         albumTitle: albTitle
//     }
//     if(tracks != undefined){
//         album.tracks = tracks
//     }
//     return album
// }
// console.log(make_album("Artist 1","Album 1"));
// console.log(make_album("Artist 2","Album 2"));
// console.log(make_album("Artist 3","Album 3"));
// console.log(make_album("Artist 4","Album 4",10));
// ex 40 complete
// 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// let magician :string[] = ["Magician 1","Magician 2","Magician 3","Magician 4"]
// function show_magicians (magician:string[]){
//     magician.forEach(magician=>{
//         console.log(magician);
//     })
// }
// show_magicians(magician)
// ex 41 complete
// 42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// let magician :string[] = ["Magician 1","Magician 2","Magician 3","Magician 4"]
// function show_magicians (array:string[]){
//     array.forEach(magician=>{
//         console.log(magician);
//     })
// }
// function make_great(array:string[]){
//     array.forEach(magician=>{
//         console.log(`The Great ${magician}`);
//     })
// }
// show_magicians(magician)
// make_great(magician)
// ex 42 complete
// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
// let magician :string[] = ["Magician 1","Magician 2","Magician 3","Magician 4"]
// function show_magicians (array:string[]){
//     array.forEach(magician=>{
//         console.log(magician);
//     })
// }
// function make_great(array:string[]){
//     array.forEach(magician=>{
//         console.log(`The Great ${magician}`);
//     })
// }
// let copyMagician:string[] = [...magician]
// console.log("This is Original Array");
// show_magicians(magician)
// console.log("This is Modified Array");
// make_great(copyMagician)
// ex 43 complete
// 44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
// function makeSandwich(...item:string[]){
//     console.log(`Make Sandwich with ${item.join(", ")}`);
// }
// makeSandwich("ham", "cheese")
// makeSandwich("turkey", "lettuce", "tomato")
// makeSandwich("avocado", "sprouts", "mustard", "mayo")
// ex 44 complete
// 45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the information was stored correctly.
// function storeCarInfo(manufacturer:string,modelName:string, ...extraOption:{[name:string]:any}[]):object{
//     let car = {
//         manufacturer: manufacturer,
//         modelName: modelName,
//         // manufacturer, //both methods working
//         // modelName, //both methods working
//         ...Object.assign({},...extraOption),
//     }
//     return car
// }
// console.log(storeCarInfo("Honda","Civic",{color: "Black",year:2024}));
// console.log(storeCarInfo("Ford","Fiesta",{color: "Blue"},{year:2024},{features: ["navigation", "window screen"]}));
// ex 45 complete
