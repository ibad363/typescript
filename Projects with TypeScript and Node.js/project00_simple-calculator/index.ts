#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
    { message: "Your First Number", type: "number", name: "firstNumber" },
    { message: "Your Second Number", type: "number", name: "secondNumber" },
    { message: "Select One of the Operation to Perform Actions", type: "list", name: "operation", choices: ["Addition", "Subtraction", "Multiplication", "Division"] }
])

if (answer.operation === "Addition") {
    console.log("Your Answer is: " + (answer.firstNumber + answer.secondNumber));
} else if (answer.operation === "Subtraction") {
    console.log(`Your Answer is: ${answer.firstNumber - answer.secondNumber}`);
} else if (answer.operation === "Multiplication") {
    console.log(`Your Answer is: ${answer.firstNumber * answer.secondNumber}`);
} else if (answer.operation === "Division") {
    console.log(`Your Answer is: ${answer.firstNumber / answer.secondNumber}`);
} else (`Select Valid Operation`)