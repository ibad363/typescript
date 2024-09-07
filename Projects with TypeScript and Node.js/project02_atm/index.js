#!/usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //dollar
let myPin = 1234;
console.log(`Your Current Balance is ${myBalance}`);
const pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter Your Pin Number",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct Pin Code!!!");
    const operationAns = await inquirer.prompt({
        name: "operation",
        message: "What Operation you Want to Do",
        type: "list",
        choices: ["Check Balance", "Withdraw Amount"],
    });
    if (operationAns.operation === "Check Balance") {
        console.log(`Your Current Balance is ${myBalance}`);
        console.log("Thank You");
    }
    else if (operationAns.operation === "Withdraw Amount") {
        let withdrawAmount = await inquirer.prompt({
            message: "How much Amount you want to Withdraw",
            type: "list",
            name: "userinput",
            choices: ["1000", "2000", "5000", "10000"]
        });
        if (withdrawAmount.userinput <= myBalance) {
            myBalance -= withdrawAmount.userinput;
            console.log(`Your Remaining Balance is ${myBalance}`);
            console.log("Thank You for using ATM");
        }
        else {
            console.log(`Your balance is ${myBalance}, so you can't withdraw an amount that exceeds it`);
        }
    }
}
else {
    console.log("Invalid PIN");
}
