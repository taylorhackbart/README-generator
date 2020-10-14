// Title, Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

var inquirer = require("inquirer");
var fs = require("fs");
var generateMarkdown = require("./utils/generateMarkdown");
const path = require('path');
// array of questions for user
const questions = [
    {
    type: "input",
    message: "Enter GitHub username:",
    name: "github",
    },
    {
    type: "input",
    message: "Enter Email:",
    name: "email",
    },
    {
    type : "input",
    message : "Enter a title for your project",
    name : "title",
    },
    {
    type : "input",
    message : "Enter a description",
    name : "description",
    },
    {
    type : "input",
    message : "Provide a list of contributors for this project",
    name : "contributing",
    },
    {
    type : "list",
    message : "What type of license should your project have?",
    name : "license",
    choices : ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "none"]
    },
    {
    type: "input",
    message: "Enter command to run tests:",
    name: "tests",
    }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(response => {
    
        writeToFile("README.md", generateMarkdown(response));
    })
}

// function call to initialize program
init();
