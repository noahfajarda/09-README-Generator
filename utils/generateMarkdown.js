// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderExtraBadges(badges) {
    var allExtraBadges = "";
    for (var i = 0; i < badges.length; i++) {
        allExtraBadges += " " + badges[i];
    }
    return allExtraBadges;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// ACCESS THE VARIABLES CREATED IN 'questions' IN 'index.js'
function generateMarkdown(data) {
    return `# ${data.projectTitle}

${data.projectLicense ? data.projectLicense : ""}

// REFER TO THIS FOR FORMATTING: https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

## Table of contents
// INSERT

## Description

${data.projectDescription}

## Installation

${data.projectInstallation}

## Usage

${data.projectInstructions}

## Contributions

${data.projectCollaborators} 

## Tests

// INSERT TEST VARIABLE


## License

This project uses the ${data.projectLicense ? data.projectLicense : ""}.

## Badges

${renderExtraBadges(data.projectBadges)}

## IF YOU HAVE TIME:

    ## ask for additional badges
## Features



`;
}

module.exports = {
    generateMarkdown,
};
