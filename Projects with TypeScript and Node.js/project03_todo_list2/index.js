#! /usr/bin/env node
import inquirer from "inquirer";
let todos = ["drink", "eat"];
console.log("Welcome to To Do App");
async function createTodo(todos) {
    let loop = true;
    while (loop) {
        let userAns = await inquirer.prompt({
            name: "operation",
            message: "Select an Operation",
            type: "list",
            choices: ["Add Task", "Update Task", "View Task", "Delete Task", "Close Application"],
        });
        if (userAns.operation == "Add Task") {
            let addTask = await inquirer.prompt({
                message: "Add Task in your To Do List",
                type: "input",
                name: "add",
            });
            todos.push(addTask.add);
        }
        if (userAns.operation == "Update Task") {
            let update = await inquirer.prompt({
                name: "update",
                message: "Select Task you want to Update",
                type: "list",
                choices: todos.map((task) => task),
            });
            let addUpdate = await inquirer.prompt({
                name: "addTask",
                type: "input",
                message: "Add Update Task",
            });
            let updateTask = todos.filter((task) => task !== update.update);
            todos = [...updateTask, addUpdate.addTask];
        }
        if (userAns.operation == "View Task") {
            console.log("**** Your To Do List ****");
            console.log(todos);
            console.log("*************************");
        }
        if (userAns.operation == "Delete Task") {
            let deleteTask = await inquirer.prompt({
                name: "delete",
                type: "list",
                message: "Select You Want to Delete",
                choices: todos.map((task) => task),
            });
            let updatedList = todos.filter((task) => task !== deleteTask.delete);
            todos = [...updatedList];
        }
        if (userAns.operation == "Close Application") {
            loop = false;
            console.log("Goodbye!....");
        }
    }
}
createTodo(todos);
