import inquirer from "inquirer";
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Q1 What is the correct way to check if two values are not equal in typescript",
        choices: ["a==b", "a===b", "a=b", "a!==b"]
    },
    {
        name: "question_2",
        type: "list",
        message: "Q2 which of the following character is commonly allowed im variable in typescript  ",
        choices: ["@", "$", "#", "&"]
    },
    {
        name: "question_3",
        type: "list",
        message: "Q3 which operators is commonly used for string concatenation in typescript ",
        choices: ["+", "-", "*", "/"]
    },
    {
        name: "question_4",
        type: "list",
        message: "Q4 In typescript which symbol is used to terminate a statement ",
        choices: [".", ":", ";", ","]
    },
    {
        name: "question_5",
        type: "list",
        message: " Q5 which method of inquirer.js is used to start the prompt  interface recieve and user input ",
        choices: ["start()", "prompt()", "init()", "run()"]
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "a!==b":
        console.log("1. correct!");
        ++score;
        break;
    default:
        console.log("1. Incorrect!");
}
switch (quiz.question_2) {
    case "$":
        console.log("2. correct!");
        ++score;
        break;
    default:
        console.log("2. Incorrect!");
}
switch (quiz.question_3) {
    case "+":
        console.log("3. correct!");
        ++score;
        break;
    default:
        console.log("3. Incorrect!");
}
switch (quiz.question_4) {
    case ";":
        console.log("4. correct!");
        ++score;
        break;
    default:
        console.log("4. Incorrect!");
}
switch (quiz.question_4) {
    case "prompt()":
        console.log("4. correct!");
        ++score;
        break;
    default:
        console.log("4. Incorrect!");
}
console.log(`Score ${score}`);
