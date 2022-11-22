// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What do you want the README file to be named?",
        name: "fileName",
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "What is the project's description?",
        name: "description",
    },
    {
        type: "list",
        message: "What kind of license is your project?",
        name: "license",
        choices: [
            {
                name: "MIT",
                value: "[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)",
            },
            {
                name: "JavaScript",
                value: "[![JavaScript](https://img.shields.io/badge/--F7DF1E?logo=javascript&logoColor=000)](https://www.javascript.com/)",
            },
            {
                name: "Jupyter",
                value: "[![Made withJupyter](https://img.shields.io/badge/Made%20with-Jupyter-orange?style=for-the-badge&logo=Jupyter)](https://jupyter.org/try)",
            },
            { name: "None", value: false },
        ],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // MAKE THIS A SYNCHRONOUS TASK!
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        // prettier-ignore
        .then((response) => {
            // create a file
            const md = generateMarkdown(response);
            // write to that file
            writeToFile(`${response.fileName}`, md);
        });
}

// Function call to initialize app
init();
