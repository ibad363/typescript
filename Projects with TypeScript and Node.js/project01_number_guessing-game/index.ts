#! /usr/bin/env node

import inquirer from "inquirer"

const randomNumber = Math.floor(Math.random()* 6 + 1)

console.log("Welcome to Number Guessing Game");

const answer =  await inquirer.prompt(
    {message: "Please Guess a Number between 1-6",type: "number",name: "userGuess"}
)

if(randomNumber === answer.userGuess){
    console.log("Congratulations! You Guess the Right Number");
}else{
    console.log("You Guess Wrong Number");
}