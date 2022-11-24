// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// access external functions from 'generateMarkdown.js' file
const generateMarkdown = require("./utils/generateMarkdown");
// generateMarkdown.renderLicenseBadge
// generateMarkdown.renderLicenseLink
// generateMarkdown.renderLicenseSection
// generateMarkdown.generateMarkdown

// TODO: Create an array of questions for user input

const questions = [
    {
        // name of readme file (ideally README)
        type: "input",
        message: "What do you want the README file to be named?",
        name: "fileName",
    },
    {
        // Project Title
        type: "input",
        message: "What is the title of your project?",
        name: "projectTitle",
    },
    {
        // licensing of project
        type: "rawlist",
        message: "What kind of license is your project?",
        name: "projectLicense",
        choices: [
            // find common licensing later
            {
                name: "MIT",
                value: "[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://choosealicense.com/licenses/mit/#)",
            },
            {
                name: "Apache",
                value: "[![Apache license](https://img.shields.io/badge/License-Apache-red.svg)](https://choosealicense.com/licenses/apache-2.0/)",
            },
            {
                name: "GMU",
                value: "[![GMU license](https://img.shields.io/badge/License-GMU-green.svg)](https://choosealicense.com/licenses/agpl-3.0/)",
            },
            { name: "None", value: false },
        ],
        default: "JavaScript",
    },
    {
        // Description
        type: "input",
        message: "Provide a short description of your project:",
        name: "projectDescription",
    },
    {
        // Installation
        type: "input",
        message: "What are the steps required to install your project?",
        name: "projectInstallation",
    },
    {
        // Installation
        type: "input",
        message: "Provide Instructions for using your application.",
        name: "projectInstructions",
    },
    {
        // Installation
        type: "input",
        message: "List any collaborators that helped with this project:",
        // How would you like people to contribute to your open source project:
        name: "projectCollaborators",
    },
    {
        // licensing of project
        type: "checkbox",
        message: "What kind of license is your project?",
        name: "projectBadges",
        choices: [
            // find common licensing later
            {
                name: "JavaScript",
                value: "![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)",
            },
            {
                name: "Julia",
                value: "![Julia](https://img.shields.io/badge/-Julia-9558B2?style=for-the-badge&logo=julia&logoColor=white)",
            },
            // ADD MORE LATER
            { name: "None", value: false },
        ],
        default: "None",
    },
    // variables:
    // DONE project title: What is the title of your project?
    // License: What kind of license is your project?
    // DONEdescription: Provide a short description of your project.
    // DONEInstallation: What are the steps required to install your project?
    // DONEUsage: Provide Instructions for using your application.
    // DONECredits: List any collaborators that helped with this project.
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
            console.log(response);
            // create a file
            const md = generateMarkdown.generateMarkdown(response);
            // // write to that file
            writeToFile(`${response.fileName}`, md);
        });
}

// Function call to initialize app
init();
