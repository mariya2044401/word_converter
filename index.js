#!/usr/bin/env node
import inquirer from "inquirer";
//Declare a constant answer and assigned
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the word: ",
    },
]);
//Declare after initialization execute block of code
const words = answers.sentence.trim().split(" ");
//print the array of words to the console
console.log(words);
//Print the word count of the sentence to the console
console.log(`Your sentence word count is ${words.length}`);
