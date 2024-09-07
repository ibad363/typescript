#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    const userAnswers = await inquirer.prompt([
        {
            name: "todo",
            message: "What you want to add in your TO DO List?",
            type: "input"
        },
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add More in TO DO List?",
            default: false
        }
    ]);
    let { todo, addmore } = userAnswers;
    loop = addmore;
    if (todo) {
        todos.push(todo);
    }
    else {
        console.log("Kindly Add Valid Input");
    }
}
if (todos.length > 0) {
    console.log("Your TO DO List is...");
    todos.forEach(todo => {
        console.log(todo);
    });
}
else {
    console.log("No TODOS Found");
}
